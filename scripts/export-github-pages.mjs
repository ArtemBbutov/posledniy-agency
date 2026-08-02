import { cp, mkdir, rm, writeFile } from "node:fs/promises";

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
  .replaceAll('href="https://posledniy-agency.s-eanwagner02532.chatgpt.site/favicon.svg"', 'href="public/favicon.svg"')
  .replaceAll('content="https://posledniy-agency.s-eanwagner02532.chatgpt.site/og-telegram.png"', 'content="https://artembbutov.github.io/posledniy-agency/public/og-telegram.png"');

await rm("assets", { recursive: true, force: true });
await mkdir("assets", { recursive: true });
await cp("dist/client/assets", "assets", { recursive: true });
await writeFile("index.html", html, "utf8");
