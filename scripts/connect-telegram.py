#!/usr/bin/env python3
"""Local-only Telegram setup. Never prints or commits the bot token."""
import getpass
import json
import os
from pathlib import Path
import re
import urllib.request

root = Path(__file__).resolve().parent.parent
print('Подключение заявок агентства к Telegram')
print('Создайте бота через @BotFather → /newbot. Добавьте его в группу или в администраторы канала с правом публикации.')
token = getpass.getpass('Вставьте токен бота (ввод скрыт): ').strip()
if not re.fullmatch(r'\d+:[A-Za-z0-9_-]+', token):
    raise SystemExit('Формат токена неверный. Запустите помощник ещё раз.')

def api(method):
    try:
        with urllib.request.urlopen(urllib.request.Request(
            'https://api.telegram.org/bot' + token + '/' + method,
            data=b'{}', headers={'Content-Type': 'application/json'}), timeout=20) as response:
            result = json.load(response)
        if not result.get('ok'):
            raise ValueError('Telegram rejected request')
        return result['result']
    except Exception:
        raise SystemExit('Telegram не ответил. Проверьте токен, интернет и отсутствие другого сервиса, использующего этого бота. Токен не сохранён.')

bot = api('getMe')
print('Бот найден: @' + bot['username'])
input('Напишите в группе или опубликуйте в канале /setup@' + bot['username'] + ', затем нажмите Enter здесь: ')
updates = api('getUpdates')
groups = {}
for update in updates:
    message = update.get('message') or update.get('channel_post', {})
    chat = message.get('chat', {})
    text = message.get('text', '')
    if chat.get('type') in ('group', 'supergroup', 'channel') and text.split(' ')[0] in ('/setup', '/setup@' + bot['username']):
        groups[str(chat['id'])] = chat.get('title', 'Чат без названия')
if not groups:
    raise SystemExit('Публикация /setup не найдена. Проверьте права бота, отправьте команду заново в нужный канал или группу и перезапустите помощник.')
items = list(groups.items())
for index, (_, title) in enumerate(items, 1):
    print(str(index) + '. ' + title)
try:
    selection = int(input('Номер канала или группы для заявок: ')) - 1
    if selection < 0: raise ValueError()
    chat_id, title = items[selection]
except (ValueError, IndexError):
    raise SystemExit('Канал или группа не выбраны. Ничего не сохранено.')
if input('Сохранить получение заявок в «' + title + '»? Введите да: ').strip().lower() != 'да':
    raise SystemExit('Отменено. Ничего не сохранено.')
path = root / '.env.local'
existing = path.read_text() if path.exists() else ''
lines = [line for line in existing.splitlines() if not re.match(r'^\s*(?:export\s+)?TELEGRAM_(?:BOT_TOKEN|CHAT_ID)\s*=', line)]
lines.extend(['TELEGRAM_BOT_TOKEN=' + json.dumps(token), 'TELEGRAM_CHAT_ID=' + json.dumps(chat_id)])
fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
with os.fdopen(fd, 'w') as f:
    f.write('\n'.join(lines) + '\n')
os.chmod(path, 0o600)
print('Готово. Данные сохранены только в скрытом локальном файле .env.local, исключённом из Git.')
print('Напишите в Codex: «Бот подключён, примени настройки и проверь тестовую заявку».')
print('До применения настроек на сервере заявки отправляться не будут.')
