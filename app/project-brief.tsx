"use client";

import { FormEvent, useState } from "react";

export function ProjectBrief() {
  const [status, setStatus] = useState<"idle" | "copied" | "ready">("idle");

  const prepareBrief = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const labels: Record<string, string> = {
      entry: "Точка входа",
      project: "Проект",
      objective: "Цель",
      link: "Ссылка",
      contact: "Контакт",
    };
    const grouped = new Map<string, string[]>();
    for (const [key, value] of data.entries()) {
      const values = grouped.get(key) ?? [];
      values.push(String(value));
      grouped.set(key, values);
    }
    const message = ["АНКЕТА ПРОЕКТА / АГЕНСТВО НАС#ЛИЯ", ""];
    for (const [key, values] of grouped) message.push(`${labels[key] ?? key}: ${values.join(", ")}`);

    try {
      await navigator.clipboard.writeText(message.join("\n"));
      setStatus("copied");
    } catch {
      setStatus("ready");
    }
  };

  return <form className="project-brief" onSubmit={prepareBrief}>
    <fieldset className="brief-field brief-entry">
      <legend><span>01</span><strong>С какой точки вы входите?</strong></legend>
      <div className="brief-options">
        {[
          "Канала ещё нет",
          "Канал есть, но не растёт",
          "Готовим запуск продукта",
          "Нужно продюсирование целиком",
        ].map((option) => <label key={option}><input required type="radio" name="entry" value={option}/><span>{option}</span></label>)}
      </div>
    </fieldset>

    <fieldset className="brief-field brief-project">
      <legend><span>02</span><strong>Пара слов о проекте</strong></legend>
      <textarea required name="project" rows={3} placeholder="Чем занимаетесь и что уже есть в Telegram?"/>
    </fieldset>

    <fieldset className="brief-field">
      <legend><span>03</span><strong>Главная задача</strong></legend>
      <div className="brief-options brief-checks">
        {["Запустить канал", "Вернуть рост", "Подготовить запуск", "Передать канал команде"].map((option) => <label key={option}><input required type="radio" name="objective" value={option}/><span>{option}</span></label>)}
      </div>
    </fieldset>

    <div className="brief-row brief-contact-row">
      <fieldset className="brief-field">
        <legend><span>04</span><strong>Канал, если есть</strong></legend>
        <input name="link" type="url" inputMode="url" placeholder="https://t.me/..."/>
      </fieldset>
      <fieldset className="brief-field brief-contact">
        <legend><span>05</span><strong>Ваш Telegram</strong></legend>
        <input required name="contact" type="text" placeholder="Имя и @username"/>
      </fieldset>
    </div>

    <div className="brief-submit">
      <span>Займёт около минуты</span>
      <button type="submit"><span>{status === "idle" ? "Собрать заявку" : status === "copied" ? "Заявка скопирована" : "Заявка готова"}</span><b aria-hidden="true">→</b></button>
    </div>
  </form>;
}
