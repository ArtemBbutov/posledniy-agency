"use client";

import { useState } from "react";

// Set to the supplied video URL when the agency film is ready.
const INTRO_VIDEO_SRC = "";

export function AgencyIntro({ src = INTRO_VIDEO_SRC }: { src?: string }) {
  const [failed, setFailed] = useState(false);
  return <section className="agency-intro" id="intro" aria-labelledby="intro-title">
    <div className="agency-intro-copy">
      <p className="br-label">00 / ЗНАКОМСТВО</p>
      <h2 id="intro-title">Кто мы.<br/>За одну минуту.</h2>
      <p>Как мы помогаем авторам вести Telegram-каналы и запускать продукты — коротко, от команды агентства.</p>
      <a href="#faq">Вопросы о работе с нами ↘</a>
    </div>
    <figure className="intro-frame">
      <div className="intro-frame-label"><span>АГЕНТСТВО НАС#ЛИЯ</span><span>01 MIN / INTRO</span></div>
      <div className="intro-screen">
        {src && !failed ? <video key={src} controls playsInline preload="metadata" poster="/hero-backrooms-v2.png" aria-label="Знакомство с агентством" onError={() => setFailed(true)} src={src}/> : <div className="intro-placeholder">
          <img src="/hero-backrooms-v2.png" alt="" loading="lazy"/>
          <div><span className="intro-status">{failed ? "ВИДЕО НЕДОСТУПНО" : "СКОРО"}</span><strong>Знакомство<br/>с агентством</strong><p>{failed ? "Не удалось загрузить ролик. Попробуйте обновить страницу." : "Готовим короткое видео о нашей работе."}</p></div>
        </div>}
      </div>
      <figcaption><span>ЗАПИСЬ / 001</span><span>{src && !failed ? "Знакомство с командой" : "А пока — ответы ниже"}</span></figcaption>
    </figure>
  </section>;
}
