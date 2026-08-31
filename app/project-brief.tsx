"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type BriefStep = {
  key: string;
  tone: string;
  label: string;
  question: string;
  hint: string;
  options: Array<{ label: string; value?: string; other?: boolean }>;
};

const briefSteps: BriefStep[] = [
  {
    key: "task",
    tone: "signal",
    label: "Задача",
    question: "Что хотите получить от Telegram?",
    hint: "Выберите сценарий, который ближе всего к вашей ситуации.",
    options: [
      { label: "Запустить продукт в Telegram" },
      { label: "Передать канал под ключ" },
      { label: "Вырастить аудиторию и продажи" },
      { label: "Начать с бесплатной консультации" },
    ],
  },
  {
    key: "stage",
    tone: "audience",
    label: "Стадия",
    question: "Сколько людей уже читают канал?",
    hint: "Если каналов несколько — укажите основной.",
    options: [
      { label: "Канала ещё нет" },
      { label: "До 1 000 подписчиков" },
      { label: "1–5 тысяч" },
      { label: "5–20 тысяч" },
      { label: "Больше 20 тысяч" },
    ],
  },
  {
    key: "niche",
    tone: "spectrum",
    label: "Ниша",
    question: "В какой нише работаете?",
    hint: "Нам важно понять продукт и будущую аудиторию.",
    options: [
      { label: "Образование / экспертность" },
      { label: "Бизнес / консалтинг" },
      { label: "Блог / медиа" },
      { label: "Агентство / услуги" },
      { label: "Другое", other: true },
    ],
  },
  {
    key: "product",
    tone: "blueprint",
    label: "Продукт",
    question: "На какой стадии продукт?",
    hint: "Не страшно, если пока есть только идея — это тоже точка входа.",
    options: [
      { label: "Уже продаём" },
      { label: "Продукт есть, запусков не было" },
      { label: "Сейчас собираем продукт" },
      { label: "Пока только идея" },
    ],
  },
  {
    key: "result",
    tone: "target",
    label: "Результат",
    question: "Какой результат сейчас главный?",
    hint: "Выберите один приоритет — остальное обсудим на созвоне.",
    options: [
      { label: "Запуск от 500 000 ₽" },
      { label: "Системные продажи из канала" },
      { label: "Рост сильной аудитории" },
      { label: "Полностью снять операционку" },
      { label: "Другое", other: true },
    ],
  },
  {
    key: "budget",
    tone: "scale",
    label: "Масштаб",
    question: "Какой бюджет готовы вложить?",
    hint: "Это помогает сразу предложить реалистичный формат работы.",
    options: [
      { label: "До 100 000 ₽" },
      { label: "100–300 тысяч ₽" },
      { label: "300–500 тысяч ₽" },
      { label: "От 500 000 ₽" },
      { label: "Сначала нужна оценка" },
    ],
  },
];

const fieldLabels: Record<string, string> = {
  task: "Задача",
  stage: "Аудитория",
  niche: "Ниша",
  product: "Стадия продукта",
  result: "Главный результат",
  budget: "Бюджет",
};

export function ProjectBrief() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [otherOpen, setOtherOpen] = useState<Record<string, boolean>>({});
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [complete, setComplete] = useState(false);
  const advanceTimer = useRef<number | null>(null);
  const totalSteps = briefSteps.length + 1;

  useEffect(() => () => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
  }, []);

  const goTo = (step: number) => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    setCurrent(Math.max(0, Math.min(totalSteps - 1, step)));
  };

  const selectAnswer = (stepIndex: number, step: BriefStep, option: BriefStep["options"][number]) => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    if (option.other) {
      setOtherOpen((state) => ({ ...state, [step.key]: true }));
      setAnswers((state) => ({ ...state, [step.key]: "" }));
      return;
    }
    setOtherOpen((state) => ({ ...state, [step.key]: false }));
    setAnswers((state) => ({ ...state, [step.key]: option.value ?? option.label }));
    advanceTimer.current = window.setTimeout(() => goTo(stepIndex + 1), 180);
  };

  const confirmOther = (stepIndex: number, step: BriefStep) => {
    const value = otherValues[step.key]?.trim();
    if (!value || value.length < 2) return;
    setAnswers((state) => ({ ...state, [step.key]: `Другое: ${value}` }));
    goTo(stepIndex + 1);
  };

  const cleanTelegram = (value: string) => value
    .replace(/^\s*(https?:\/\/)?(www\.)?t\.me\//i, "")
    .replace(/[@\s]/g, "")
    .replace(/[^A-Za-z0-9_]/g, "")
    .slice(0, 32);

  const submitBrief = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanContact = cleanTelegram(telegram);
    if (cleanName.length < 2 || cleanContact.length < 4) return;

    const payload = { ...answers, name: cleanName, telegram: `@${cleanContact}` };
    window.dispatchEvent(new CustomEvent("agency:brief-submit", { detail: payload }));
    const message = [
      "АНКЕТА ПРОЕКТА / АГЕНТСТВО НАС#ЛИЯ",
      "",
      ...briefSteps.map((step) => `${fieldLabels[step.key]}: ${answers[step.key] ?? "—"}`),
      `Имя: ${cleanName}`,
      `Telegram: @${cleanContact}`,
    ].join("\n");
    try { await navigator.clipboard.writeText(message); } catch { /* Bot endpoint will replace this handoff. */ }
    setComplete(true);
  };

  return <form className="project-brief brief-quiz" data-complete={complete ? "true" : "false"} onSubmit={submitBrief}>
    <div className="brief-progress" aria-label={`Шаг ${current + 1} из ${totalSteps}`}>
      <div className="brief-progress-copy"><span>АНКЕТА / {String(current + 1).padStart(2, "0")}</span><b>{current + 1} из {totalSteps}</b></div>
      <div className="brief-progress-rail" aria-hidden="true"><i style={{ transform: `scaleX(${(current + 1) / totalSteps})` }}/></div>
    </div>

    <div className="brief-stage">
      {briefSteps.map((step, stepIndex) => {
        const isActive = current === stepIndex && !complete;
        const isOther = Boolean(otherOpen[step.key]);
        return <fieldset className="brief-step" key={step.key} data-step={String(stepIndex + 1).padStart(2, "0")} data-tone={step.tone} data-active={isActive ? "true" : "false"} data-position={stepIndex < current ? "before" : stepIndex > current ? "after" : "current"} aria-hidden={!isActive}>
          <legend><span>{String(stepIndex + 1).padStart(2, "0")}</span>{step.label}</legend>
          <div className="brief-question"><h3>{step.question}</h3><p>{step.hint}</p></div>
          <div className="brief-choice-grid">
            {step.options.map((option, optionIndex) => {
              const selected = option.other ? isOther : answers[step.key] === (option.value ?? option.label);
              return <button type="button" key={option.label} data-answer data-key={step.key} data-value={option.value ?? option.label} data-other={option.other ? "true" : undefined} aria-pressed={selected} onClick={() => selectAnswer(stepIndex, step, option)}><span>{String(optionIndex + 1).padStart(2, "0")}</span><b>{option.label}</b><i aria-hidden="true">↗</i></button>;
            })}
          </div>
          <div className="brief-other" data-visible={isOther ? "true" : "false"}>
            <label htmlFor={`brief-${step.key}-other`}>Напишите свой вариант</label>
            <div><input id={`brief-${step.key}-other`} type="text" value={otherValues[step.key] ?? ""} onChange={(event) => setOtherValues((state) => ({ ...state, [step.key]: event.target.value }))} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); confirmOther(stepIndex, step); } }} placeholder="Коротко, своими словами" tabIndex={isActive && isOther ? 0 : -1}/><button type="button" onClick={() => confirmOther(stepIndex, step)} disabled={(otherValues[step.key]?.trim().length ?? 0) < 2} aria-label="Подтвердить свой вариант">→</button></div>
          </div>
        </fieldset>;
      })}

      <fieldset className="brief-step brief-contact-step" data-step="07" data-tone="contact" data-active={current === briefSteps.length && !complete ? "true" : "false"} data-position={current < briefSteps.length ? "after" : "current"} aria-hidden={current !== briefSteps.length || complete}>
        <legend><span>07</span>Контакт</legend>
        <div className="brief-question"><h3>Куда прислать разбор?</h3><p>Только имя и Telegram — без телефона и длинных комментариев.</p></div>
        <div className="brief-contact-fields">
          <label><span>Как вас зовут</span><input type="text" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Имя" tabIndex={current === briefSteps.length ? 0 : -1}/></label>
          <label><span>Telegram</span><div className="brief-telegram-input"><i>@</i><input type="text" autoCapitalize="off" autoCorrect="off" spellCheck="false" value={telegram} onChange={(event) => setTelegram(cleanTelegram(event.target.value))} placeholder="username" tabIndex={current === briefSteps.length ? 0 : -1}/></div></label>
        </div>
        <button className="brief-finish" type="submit" disabled={name.trim().length < 2 || cleanTelegram(telegram).length < 4}><span>Завершить анкету</span><i aria-hidden="true">→</i></button>
      </fieldset>

      <section className="brief-success" data-active={complete ? "true" : "false"} aria-live="polite" aria-hidden={!complete}>
        <span>07 / ГОТОВО</span><h3>Спасибо.<br/>Контекст собран.</h3><p>Теперь разговор начнётся не с общих вопросов, а с конкретного сценария для вашего проекта.</p><a href="#top">Вернуться наверх <i>↑</i></a>
      </section>
    </div>

    <div className="brief-navigation" data-hidden={complete ? "true" : "false"} data-first={current === 0 ? "true" : "false"}>
      <button type="button" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Вернуться к предыдущему вопросу"><i aria-hidden="true">←</i><span>Назад</span></button>
    </div>
  </form>;
}
