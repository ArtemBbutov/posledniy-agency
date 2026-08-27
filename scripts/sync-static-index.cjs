const fs = require("fs");

const path = "index.html";
let html = fs.readFileSync(path, "utf8");
const cases = '<section class="cases-section" id="change"><header class="cases-heading"><p class="br-label">02 / КЕЙСЫ</p><h2>Выходы<br/>найдены.</h2><p>Три проекта, в которых контент перестал быть бесконечным коридором и начал вести к понятному результату.</p></header><div class="cases-grid"><article class="case-card"><figure><img src="public/case-wake-up-backrooms.png" alt="Проект WAKE UP на терминале в пространстве Backrooms"/><span class="case-number">01</span><span class="case-scan" aria-hidden="true"></span></figure><div class="case-copy"><div class="case-meta"><span>ЗАКРЫТОЕ СООБЩЕСТВО</span><b>187 участников</b></div><h3>WAKE UP</h3><dl class="case-results"><div><dt>Средний чек</dt><dd>4 000 ₽</dd></div><div><dt>Покупки</dt><dd>—</dd></div></dl></div></article><article class="case-card"><figure><img src="public/case-wake-up-empire-backrooms.png" alt="Проект Wake Up Empire 2.0 в архиве Backrooms"/><span class="case-number">02</span><span class="case-scan" aria-hidden="true"></span></figure><div class="case-copy"><div class="case-meta"><span>TELEGRAM-КАНАЛ</span><b>134 участника</b></div><h3>Wake Up Empire 2.0</h3><dl class="case-results"><div><dt>Средний чек</dt><dd>4 990 ₽</dd></div><div><dt>Покупки</dt><dd>—</dd></div></dl></div></article><article class="case-card"><figure><img src="public/case-100k-backrooms.png" alt="Проект 100.000₽ с нуля на развилке Backrooms"/><span class="case-number">03</span><span class="case-scan" aria-hidden="true"></span></figure><div class="case-copy"><div class="case-meta"><span>МАРАФОН</span><b>155 участников</b></div><h3>100.000₽ с нуля</h3><dl class="case-results"><div><dt>Средний чек</dt><dd>1 750 ₽</dd></div><div><dt>Покупки</dt><dd>—</dd></div></dl></div></article></div></section>';

html = html.replace(/assets\/index-[^\"]+\.css/g, "assets/index-CoxFRXMt.css");
html = html.replace(/<section class="(?:transformation|cases-section)" id="change">[\s\S]*?<\/section><section class="work-story"/, `${cases}<section class="work-story"`);
html = html.replace("'.transformation header > *','.shift-table article','.change-result'", "'.cases-heading > *','.case-card'");
html = html.replace("'.shift-table article,.work-story li,.format-lines article'", "'.case-card,.work-story li,.format-lines article'");

if (!html.includes("case-wake-up-backrooms.png")) throw new Error("Static case section was not generated");
fs.writeFileSync(path, html);
