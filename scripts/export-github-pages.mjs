import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";

const source = process.argv[2] ?? "http://127.0.0.1:4174/";
const response = await fetch(source);
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
  .replaceAll('content="https://posledniy-agency.s-eanwagner02532.chatgpt.site/hero-backrooms.png"', 'content="https://artembbutov.github.io/posledniy-agency/public/hero-backrooms.png"')
  .replaceAll('href="https://posledniy-agency.s-eanwagner02532.chatgpt.site/favicon.svg"', 'href="public/favicon.svg"')
  .replaceAll('content="https://posledniy-agency.s-eanwagner02532.chatgpt.site/og-telegram.png"', 'content="https://artembbutov.github.io/posledniy-agency/public/og-telegram.png"');

const staticInteractionScript = `<script>
document.querySelector('.what-we-do')?.addEventListener('click',function(){
  if(window.__agencyAudio){window.__agencyAudio.pause();window.__agencyAudio.currentTime=0}if(window.__agencyTimer)clearTimeout(window.__agencyTimer);
  const meme=new Audio('public/meme-phrase.mp4'),song=new Audio('public/agency-intro.mp3');window.__agencyAudio=meme;
  const playSong=()=>{window.__agencyAudio=song;song.currentTime=0;song.play().then(()=>{window.__agencyTimer=setTimeout(()=>{song.pause();song.currentTime=0;window.__agencyAudio=null},5000)}).catch(()=>{})};
  meme.addEventListener('ended',playSong,{once:true});meme.play().catch(playSong);
  setTimeout(()=>document.querySelector('#floor-02')?.scrollIntoView({behavior:'smooth',block:'start'}),190);
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
    .replaceAll("url(/backrooms-lower-level.png)", "url(../public/backrooms-lower-level.png)");
  await writeFile(path, css, "utf8");
}
await writeFile("index.html", html, "utf8");
