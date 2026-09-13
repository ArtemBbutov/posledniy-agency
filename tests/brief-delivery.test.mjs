import test from 'node:test';
import assert from 'node:assert/strict';
import { handleBrief } from '../server/brief-handler.mjs';
import { deliverBrief } from '../app/brief-delivery.js';
const env = {TELEGRAM_BOT_TOKEN: '123:fake-test-token', TELEGRAM_CHAT_ID: '-100123'};
const data = {task:'Запуск',stage:'До 1000',niche:'Медиа',product:'Идея',result:'Рост',budget:'Оценка',name:'Анна',telegram:'@anna_test',website:''};
const request = (body = data, extra = {}) => new Request('https://posledniy-agency.butovartemm.chatgpt.site/api/brief', {method:'POST',headers:{origin:'https://artembbutov.github.io','content-type':'application/json',...extra},body:JSON.stringify(body)});
test('missing configuration never claims success', async()=>{ const r=await handleBrief(request(),{}); assert.equal(r.status,503); assert.equal((await r.json()).ok,false); });
test('preflight works without a bot and allows only configured origins',async()=>{
 const r=await handleBrief(new Request('https://posledniy-agency.butovartemm.chatgpt.site/api/brief',{method:'OPTIONS',headers:{origin:'https://artembbutov.github.io'}})); assert.equal(r.status,204); assert.equal(r.headers.get('access-control-allow-origin'),'https://artembbutov.github.io');
 assert.equal((await handleBrief(request(data,{origin:'https://evil.example'}),env)).status,403);
});
test('missing fields, honeypot and oversized body are rejected without sending',async()=>{
 const send=()=>{throw Error('Should not send');};
 for(const body of [{...data,name:''},{...data,telegram:'@bad!'}, {...data,budget:undefined},{...data,website:'spam'}])assert.equal((await handleBrief(request(body),env,send)).status,400);
 assert.equal((await handleBrief(request({...data,niche:'a'.repeat(9000)}),env,send)).status,413);
});
test('sends all answers to configured group as plain text',async()=>{
 const r=await handleBrief(request({...data,name:'Анна <b>'}),env,async(url,options)=>{
 assert.equal(url,'https://api.telegram.org/bot123:fake-test-token/sendMessage');
 const body=JSON.parse(options.body);assert.equal(body.chat_id,'-100123');assert.equal(body.parse_mode,undefined);
 for(const value of Object.values(data).filter(Boolean))assert(body.text.includes(value));
 assert(body.text.includes('Анна <b>'));return Response.json({ok:true,result:{message_id:45}});
 });assert.equal(r.status,200);assert.equal((await r.json()).ok,true);
});
test('Telegram errors, invalid responses and uncertain network errors are not success',async()=>{
 for(const send of [async()=>Response.json({ok:false},{status:403}),async()=>Response.json({ok:true}),async()=>{throw Error('secret must not leak');}]){
 const r=await handleBrief(request(),env,send);assert.equal(r.status,502);assert(!(await r.text()).includes('secret must not leak'));
 }
});
test('basic burst limit prevents sixth request',async()=>{
 let sent=0;const send=async()=>{sent++;return Response.json({ok:true,result:{message_id:sent}});};
 for(let i=0;i<6;i++){const r=await handleBrief(request(data,{'cf-connecting-ip':'192.0.2.17'}),env,send);assert.equal(r.status,i<5?200:429);}assert.equal(sent,5);
});
test('client requires HTTP success AND explicit server confirmation',async()=>{
 const original=globalThis.fetch;
 try {
 for(const response of [Response.json({ok:false}),Response.json({ok:true},{status:503}),new Response('<html>Error</html>',{status:502})]){
 globalThis.fetch=async()=>response;await assert.rejects(deliverBrief('/api/brief',data));
 }
 globalThis.fetch=async()=>Response.json({ok:true});await deliverBrief('/api/brief',data);
 }finally{globalThis.fetch=original;}
});

test('custom domain HTTP and HTTPS preflights are permitted', async () => {
 for (const origin of ['http://nasilprod.online', 'https://nasilprod.online', 'http://www.nasilprod.online', 'https://www.nasilprod.online']) {
  const response = await handleBrief(request({}, {origin}));
  assert.equal(response.headers.get('access-control-allow-origin'), origin);
  const preflight = await handleBrief(new Request('https://posledniy-agency.butovartemm.chatgpt.site/api/brief', {method: 'OPTIONS', headers: {origin}}));
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('access-control-allow-origin'), origin);
 }
});
