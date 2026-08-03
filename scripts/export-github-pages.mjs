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
  const AudioContextClass=window.AudioContext||window.webkitAudioContext;
  if(AudioContextClass){
    const context=new AudioContextClass(),now=context.currentTime,master=context.createGain();
    master.gain.setValueAtTime(.0001,now);master.gain.exponentialRampToValueAtTime(.22,now+.025);master.gain.exponentialRampToValueAtTime(.0001,now+.72);master.connect(context.destination);
    const thud=context.createOscillator(),gain=context.createGain();thud.type='sine';thud.frequency.setValueAtTime(82,now);thud.frequency.exponentialRampToValueAtTime(38,now+.32);gain.gain.setValueAtTime(.9,now);gain.gain.exponentialRampToValueAtTime(.0001,now+.38);thud.connect(gain).connect(master);thud.start(now);thud.stop(now+.4);
    const length=Math.floor(context.sampleRate*.65),buffer=context.createBuffer(1,length,context.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<length;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/length,2.4);
    const scrape=context.createBufferSource(),filter=context.createBiquadFilter(),scrapeGain=context.createGain();scrape.buffer=buffer;filter.type='bandpass';filter.frequency.setValueAtTime(520,now);filter.frequency.exponentialRampToValueAtTime(170,now+.62);scrapeGain.gain.setValueAtTime(.12,now);scrapeGain.gain.exponentialRampToValueAtTime(.0001,now+.65);scrape.connect(filter).connect(scrapeGain).connect(master);scrape.start(now);scrape.stop(now+.66);setTimeout(()=>context.close(),900);
  }
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
