const labels = { task: 'Задача', stage: 'Аудитория', niche: 'Ниша', product: 'Стадия продукта', result: 'Главный результат', budget: 'Бюджет' };
const visits = new Map();
const allowed = new Set(['http://nasilprod.online', 'https://nasilprod.online', 'http://www.nasilprod.online', 'https://www.nasilprod.online', 'https://artembbutov.github.io', 'https://posledniy-agency.butovartemm.chatgpt.site']);

export async function handleBrief(request, env = {}, send = fetch) {
  const origin = request.headers.get('origin');
  const permitted = origin && (allowed.has(origin) || origin === new URL(request.url).origin);
  const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Vary': 'Origin' };
  if (permitted) headers['Access-Control-Allow-Origin'] = origin;
  const reply = (status, message, extra = {}) => Response.json({ ok: status === 200, message, ...extra }, {status, headers});
  if (!permitted) return reply(403, 'Отправка с этого адреса недоступна.');
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: {...headers, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '600'} });
  if (request.method !== 'POST') return reply(405, 'Используйте форму на сайте.');
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return reply(503, 'Приём заявок пока не подключён. Ваши ответы остались в анкете.');
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply(415, 'Неверный формат заявки.');
  // Limit both declared and streamed request sizes.
  if (Number(request.headers.get('content-length')) > 8192) return reply(413, 'Слишком длинные ответы.');
  let data;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply(400, 'Заполните анкету.');
    let total = 0, text = ''; const decoder = new TextDecoder();
    while (true) { const {done, value} = await reader.read(); if (done) break; total += value.length; if (total > 8192) { await reader.cancel(); return reply(413, 'Слишком длинные ответы.'); } text += decoder.decode(value, {stream: true}); }
    data = JSON.parse(text + decoder.decode());
  } catch { return reply(400, 'Не удалось прочитать анкету.'); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return reply(400, 'Неверный формат заявки.');
  if (data.website) return reply(400, 'Не удалось отправить анкету.');
  const clean = {};
  for (const key of [...Object.keys(labels), 'name', 'telegram']) {
    if (typeof data[key] !== 'string') return reply(400, 'Ответьте на все вопросы и укажите контакт.');
    clean[key] = data[key].trim();
    if (clean[key].length < 2 || clean[key].length > (key === 'name' ? 80 : 300)) return reply(400, 'Проверьте имя и ответы: поля не должны быть пустыми или слишком длинными.');
  }
  if (!/^@[A-Za-z][A-Za-z0-9_]{3,31}$/.test(clean.telegram)) return reply(400, 'Проверьте имя пользователя Telegram.');
  // Best-effort per-isolate flood protection; no raw IPs or applicant data are logged.
  const now = Date.now();
  for (const [key, value] of visits) if (value.until <= now) visits.delete(key);
  const ip = request.headers.get('cf-connecting-ip');
  if (ip) {
    const limit = visits.get(ip) || {count: 0, until: now + 600000};
    if (limit.count >= 5) return reply(429, 'Слишком много попыток. Попробуйте через 10 минут.');
    limit.count++;
    if (visits.size < 10000 || visits.has(ip)) visits.set(ip, limit);
  }
  const text = ['НОВАЯ ЗАЯВКА / АГЕНТСТВО НАС#ЛИЯ', '', `Имя: ${clean.name}`, `Telegram: ${clean.telegram}`, '', ...Object.entries(labels).map(([key, label]) => `${label}: ${clean[key]}`)].join('\n');
  try {
    const response = await send(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({chat_id: env.TELEGRAM_CHAT_ID, text, link_preview_options: {is_disabled: true}}),
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true || !Number.isInteger(result.result?.message_id)) return reply(502, 'Telegram не подтвердил отправку. Ответы сохранены в форме — попробуйте позже.');
    return reply(200, 'Заявка отправлена.');
  } catch { return reply(502, 'Не удалось подтвердить доставку. Ответы остались в форме. При повторной отправке возможен дубликат.'); }
}
