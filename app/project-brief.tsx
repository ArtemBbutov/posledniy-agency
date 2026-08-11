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
      budget: "Бюджет",
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

    <fieldset className="brief-field">
      <legend><span>02</span><strong>О чём проект и что уже есть?</strong></legend>
      <textarea required name="project" rows={5} placeholder="Экспертиза, продукт, аудитория, команда — коротко и без презентации на 40 слайдов"/>
    </fieldset>

    <fieldset className="brief-field">
      <legend><span>03</span><strong>Что должно измениться?</strong></legend>
      <div className="brief-options brief-checks">
        {["Запустить канал", "Вернуть рост", "Собрать редакцию", "Запустить продукт", "Снять операционку с автора"].map((option) => <label key={option}><input type="checkbox" name="objective" value={option}/><span>{option}</span></label>)}
      </div>
    </fieldset>

    <div className="brief-row">
      <fieldset className="brief-field">
        <legend><span>04</span><strong>Ссылка на канал или продукт</strong></legend>
        <input name="link" type="url" inputMode="url" placeholder="https://t.me/..."/>
      </fieldset>
      <fieldset className="brief-field">
        <legend><span>05</span><strong>Ориентир по бюджету</strong></legend>
        <select name="budget" defaultValue="Нужно оценить">
          <option>Нужно оценить</option>
          <option>До 100 000 ₽</option>
          <option>100 000–200 000 ₽</option>
          <option>Больше 200 000 ₽</option>
        </select>
      </fieldset>
    </div>

    <fieldset className="brief-field brief-contact">
      <legend><span>06</span><strong>Как с вами связаться?</strong></legend>
      <input required name="contact" type="text" placeholder="Имя и @username в Telegram"/>
    </fieldset>

    <div className="brief-submit">
      <div><span>Следующий шаг</span><p>Пока отправка не подключена, кнопка соберёт ответы в готовый текст и скопирует его. Когда выберете Telegram — подключим отправку напрямую.</p></div>
      <button type="submit"><span>{status === "idle" ? "Подготовить заявку" : status === "copied" ? "Анкета скопирована" : "Анкета готова"}</span><b aria-hidden="true">→</b></button>
    </div>
  </form>;
}
