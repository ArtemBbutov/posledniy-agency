import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";

const source = process.argv[2] ?? "http://127.0.0.1:4174/";
const response = source === "--dist"
  ? await (async () => {
      const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url));
      return worker.fetch(
        new Request("http://localhost/"),
        { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
        { waitUntil() {}, passThroughOnException() {} },
      );
    })()
  : await fetch(source);
if (!response.ok) throw new Error(`Unable to render site: ${response.status}`);

let html = await response.text();
html = html
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replaceAll('href="/assets/', 'href="assets/')
  .replaceAll('href="/hero-room-v2.png"', 'href="public/hero-room-v2.png"')
  .replaceAll('src="/hero-room-v2.png"', 'src="public/hero-room-v2.png"')
  .replaceAll('href="/hero-room-v3.png"', 'href="public/hero-room-v3.png"')
  .replaceAll('src="/hero-room-v3.png"', 'src="public/hero-room-v3.png"')
  .replaceAll('href="/hero-backrooms.png"', 'href="public/hero-backrooms.png"')
  .replaceAll('src="/hero-backrooms.png"', 'src="public/hero-backrooms.png"')
  .replaceAll('href="/hero-backrooms-v2.png"', 'href="public/hero-backrooms-v2.png"')
  .replaceAll('src="/hero-backrooms-v2.png"', 'src="public/hero-backrooms-v2.png"')
  .replaceAll('src="/telegram-workspace-v1.png"', 'src="public/telegram-workspace-v1.png"')
  .replaceAll('src="/editorial-wall-v1.png"', 'src="public/editorial-wall-v1.png"')
  .replaceAll('src="/case-wake-up-backrooms.png"', 'src="public/case-wake-up-backrooms.png"')
  .replaceAll('src="/case-wake-up-empire-backrooms.png"', 'src="public/case-wake-up-empire-backrooms.png"')
  .replaceAll('src="/case-100k-backrooms.png"', 'src="public/case-100k-backrooms.png"')
  .replaceAll('href="/case-wake-up-backrooms.png"', 'href="public/case-wake-up-backrooms.png"')
  .replaceAll('href="/case-wake-up-empire-backrooms.png"', 'href="public/case-wake-up-empire-backrooms.png"')
  .replaceAll('href="/case-100k-backrooms.png"', 'href="public/case-100k-backrooms.png"')
  .replaceAll('href="/telegram-workspace-v1.png"', 'href="public/telegram-workspace-v1.png"')
  .replaceAll('href="/editorial-wall-v1.png"', 'href="public/editorial-wall-v1.png"')
  .replaceAll('content="https://posledniy-agency.s-eanwagner02532.chatgpt.site/hero-backrooms.png"', 'content="https://artembbutov.github.io/posledniy-agency/public/hero-backrooms.png"')
  .replaceAll('href="https://posledniy-agency.s-eanwagner02532.chatgpt.site/favicon.svg"', 'href="public/favicon.svg"')
  .replaceAll('href="https://posledniy-agency.s-eanwagner02532.chatgpt.site/favicon-ahash.svg"', 'href="public/favicon-ahash.svg"')
  .replaceAll('content="https://posledniy-agency.s-eanwagner02532.chatgpt.site/og-telegram.png"', 'content="https://artembbutov.github.io/posledniy-agency/public/og-telegram.png"');

const staticInteractionScript = `<script>
document.documentElement.classList.add('motion-ready');
const revealTargets=[...document.querySelectorAll(['.story-scene header','.scene-notes article','.scene-conclusion','.cases-heading','.case-card','.transformation header > *','.shift-table article','.change-result','.work-story-copy > *','.work-story li','.system-map','.formats-story header > *','.brief-heading > *','.project-brief > *','.brief-level > footer'].join(','))];
revealTargets.forEach((element,index)=>{element.classList.add('reveal-item');element.style.setProperty('--reveal-delay',Math.min(index%4,3)*70+'ms')});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');revealObserver.unobserve(entry.target)}}),{threshold:.13,rootMargin:'0px 0px -7%'});
revealTargets.forEach(element=>revealObserver.observe(element));
const appearanceTargets=[...document.querySelectorAll('.format-lines article')];
appearanceTargets.forEach((element,index)=>{element.classList.add('appearance-item');element.style.setProperty('--appearance-delay',Math.min(index%3,2)*70+'ms')});
const appearanceObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const element=entry.target;const delay=parseInt(element.style.getPropertyValue('--appearance-delay'),10)||0;element.classList.add('is-visible');setTimeout(()=>element.classList.remove('appearance-item'),delay+560);appearanceObserver.unobserve(element)}}),{threshold:.16,rootMargin:'0px 0px -8%'});
appearanceTargets.forEach(element=>appearanceObserver.observe(element));
[...document.querySelectorAll('.shift-table article,.work-story li')].forEach(element=>{
  element.tabIndex=0;
  const select=()=>{element.parentElement?.querySelectorAll('.is-selected').forEach(item=>item.classList.remove('is-selected'));element.classList.add('is-selected')};
  element.addEventListener('click',select);
  element.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();select()}});
});
const progress=document.querySelector('.scroll-progress');
const ambient=document.querySelector('.site-ambient');
const nav=document.querySelector('.br-nav nav');
const navHeader=nav?.closest('.br-nav');
const navLiquid=nav?.querySelector('.nav-liquid');
const navLiquidCore=nav?.querySelector('.nav-liquid-core');
const navLinks=[...(nav?.querySelectorAll('a[href^="#"]')||[])];
let activeNavLink=navLinks[0];
let navIsPointed=false;
let displayedNavLink;
let liquidFrame=0;
let liquidX=0;
let liquidTargetX=0;
let liquidVelocity=0;
let liquidLastTime=0;
let liquidPositioned=false;
let navScrollLock;
let navScrollUnlockTimer=0;
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const scheduleAmbientEvent=()=>{
  if(reduceMotion||!ambient)return;
  setTimeout(()=>{
    if(!document.hidden){
      const eventClass=Math.random()<.78?'is-light-failure':'is-light-surge';
      ambient.classList.remove('is-light-failure','is-light-surge');void ambient.offsetWidth;ambient.classList.add(eventClass);
      setTimeout(()=>ambient.classList.remove(eventClass),eventClass==='is-light-failure'?520:680);
    }
    scheduleAmbientEvent();
  },5200+Math.random()*9200);
};
scheduleAmbientEvent();
const renderLiquid=()=>{
  if(!navLiquid)return;
  navLiquid.style.transform='translate3d('+liquidX+'px,0,0)';
  const stretch=1+Math.min(Math.abs(liquidVelocity)/900,.16);
  if(navLiquidCore)navLiquidCore.style.transform='scale3d('+stretch+','+(1-(stretch-1)*.28)+',1)';
};
const stepLiquid=time=>{
  if(!liquidLastTime)liquidLastTime=time;
  const delta=Math.min((time-liquidLastTime)/1000,.032);
  liquidLastTime=time;
  const acceleration=(liquidTargetX-liquidX)*100-liquidVelocity*10;
  liquidVelocity+=acceleration*delta;
  liquidX+=liquidVelocity*delta;
  renderLiquid();
  if(Math.abs(liquidTargetX-liquidX)<.08&&Math.abs(liquidVelocity)<.08){
    liquidX=liquidTargetX;liquidVelocity=0;liquidLastTime=0;liquidFrame=0;renderLiquid();return;
  }
  liquidFrame=requestAnimationFrame(stepLiquid);
};
const startLiquidSpring=()=>{if(!liquidFrame){liquidLastTime=0;liquidFrame=requestAnimationFrame(stepLiquid)}};
const moveLiquid=link=>{
  if(!navLiquid||!link||displayedNavLink===link)return;
  displayedNavLink=link;
  liquidTargetX=link.offsetLeft-5;
  navLiquid.style.opacity='1';
  navLinks.forEach(item=>item.toggleAttribute('aria-current',item===link));
  if(!liquidPositioned||reduceMotion){liquidX=liquidTargetX;liquidVelocity=0;liquidPositioned=true;renderLiquid()}
  else startLiquidSpring();
};
const updateActiveNav=()=>{
  if(navScrollLock){activeNavLink=navScrollLock;navHeader?.classList.toggle('is-scrolled',scrollY>72);moveLiquid(navScrollLock);return}
  const threshold=innerHeight*.42;
  const visible=navLinks.filter(link=>{const target=document.querySelector(link.hash);return target&&target.getBoundingClientRect().top<=threshold});
  activeNavLink=visible.at(-1)||navLinks[0];
  navHeader?.classList.toggle('is-scrolled',scrollY>72);
  if(!navIsPointed)moveLiquid(activeNavLink);
};
navLinks.forEach(link=>{
  const enter=()=>{navIsPointed=true;moveLiquid(link)};
  link.addEventListener('pointerenter',enter);
  link.addEventListener('focus',enter);
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.hash);
    if(!target)return;
    event.preventDefault();navScrollLock=link;activeNavLink=link;moveLiquid(link);
    target.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});
    history.replaceState(null,'',link.hash);
    clearTimeout(navScrollUnlockTimer);
    navScrollUnlockTimer=setTimeout(()=>{navScrollLock=undefined;updateActiveNav()},reduceMotion?80:1400);
  });
});
const resetPointedNav=()=>{navIsPointed=false;moveLiquid(activeNavLink)};
nav?.addEventListener('pointerleave',resetPointedNav);
nav?.addEventListener('focusout',event=>{if(!(event.relatedTarget instanceof Node)||!nav.contains(event.relatedTarget))resetPointedNav()});
addEventListener('scrollend',()=>{if(navScrollLock){clearTimeout(navScrollUnlockTimer);navScrollLock=undefined;updateActiveNav()}});
const updateProgress=()=>{const maximum=document.documentElement.scrollHeight-innerHeight;progress?.style.setProperty('--progress',String(maximum>0?scrollY/maximum:0))};
updateProgress();updateActiveNav();
addEventListener('scroll',updateProgress,{passive:true});addEventListener('scroll',updateActiveNav,{passive:true});
addEventListener('resize',updateProgress);addEventListener('resize',updateActiveNav);
document.querySelector('.project-brief')?.addEventListener('submit',async function(event){
  event.preventDefault();
  const labels={entry:'Точка входа',project:'Проект',objective:'Цель',link:'Ссылка',budget:'Бюджет',contact:'Контакт'};
  const grouped=new Map();
  for(const [key,value] of new FormData(this).entries())grouped.set(key,[...(grouped.get(key)||[]),String(value)]);
  const lines=['АНКЕТА ПРОЕКТА / АГЕНТСТВО НАС#ЛИЯ',''];
  for(const [key,values] of grouped)lines.push((labels[key]||key)+': '+values.join(', '));
  const button=this.querySelector('.brief-submit button span');
  try{await navigator.clipboard.writeText(lines.join('\\n'));if(button)button.textContent='Анкета скопирована'}
  catch{if(button)button.textContent='Анкета готова'}
});
</script>`;
html = html.replace("</body>", `${staticInteractionScript}</body>`);

await rm("assets", { recursive: true, force: true });
await mkdir("assets", { recursive: true });
await cp("dist/client/assets", "assets", { recursive: true });
for (const file of await readdir("assets")) {
  if (!file.endsWith(".css")) continue;
  const path = `assets/${file}`;
  const css = (await readFile(path, "utf8"))
    .replaceAll("url(/hero-backrooms-v2.png)", "url(../public/hero-backrooms-v2.png)")
    .replaceAll("url(/backrooms-lower-level.png)", "url(../public/backrooms-lower-level.png)")
    .replaceAll("url(/backrooms-junction.png)", "url(../public/backrooms-junction.png)")
    .replaceAll("url(/backrooms-four-routes.png)", "url(../public/backrooms-four-routes.png)");
  await writeFile(path, css, "utf8");
}
html = html.replaceAll(/url\(C:\/Users\/1wrar\/OneDrive\/Desktop\/nasyl agency\/\.vinext\/fonts\/([^/]+)\/([^/]+\.woff2)\)/g, "url(assets/_vinext_fonts/$1/$2)");
await writeFile("index.html", html, "utf8");
