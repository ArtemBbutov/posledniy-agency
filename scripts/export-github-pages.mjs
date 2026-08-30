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
const revealTargets=[...document.querySelectorAll(['.story-scene header','.scene-notes article','.scene-conclusion','.transformation header > *','.shift-table article','.change-result','.work-story-copy > *','.work-story li','.system-map','.proof-strip article','.formats-story header > *','.brief-heading > *','.project-brief > *'].join(','))];
revealTargets.forEach((element,index)=>{element.classList.add('reveal-item');element.style.setProperty('--reveal-delay',Math.min(index%4,3)*70+'ms')});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');revealObserver.unobserve(entry.target)}}),{threshold:.13,rootMargin:'0px 0px -7%'});
revealTargets.forEach(element=>revealObserver.observe(element));
const appearanceTargets=[...document.querySelectorAll('.format-lines article,.case-card')];
appearanceTargets.forEach((element,index)=>{element.classList.add('appearance-item');element.style.setProperty('--appearance-delay',Math.min(index%3,2)*70+'ms')});
const appearanceObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');appearanceObserver.unobserve(entry.target)}}),{threshold:.16,rootMargin:'0px 0px -8%'});
appearanceTargets.forEach(element=>appearanceObserver.observe(element));
[...document.querySelectorAll('.shift-table article,.work-story li')].forEach(element=>{
  element.tabIndex=0;
  const select=()=>{element.parentElement?.querySelectorAll('.is-selected').forEach(item=>item.classList.remove('is-selected'));element.classList.add('is-selected')};
  element.addEventListener('click',select);
  element.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();select()}});
});
const progress=document.querySelector('.scroll-progress');
const updateProgress=()=>{const maximum=document.documentElement.scrollHeight-innerHeight;progress?.style.setProperty('--progress',String(maximum>0?scrollY/maximum:0))};
updateProgress();addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);
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
