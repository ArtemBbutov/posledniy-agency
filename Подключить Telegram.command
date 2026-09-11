#!/bin/zsh
cd -- "${0:A:h}"
/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 scripts/connect-telegram.py
printf '\nНажмите Enter, чтобы закрыть окно.'
read
