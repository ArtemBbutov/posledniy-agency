"use client";

import { useState } from "react";

const INTRO_VIDEO_SRC = "/agency-intro.mp4";

export function AgencyIntro({ src = INTRO_VIDEO_SRC }: { src?: string }) {
  const [failed, setFailed] = useState(false);
  return <section className="agency-intro" id="intro" aria-labelledby="intro-title">
    <div className="agency-intro-copy">
      <p className="br-label">00 / ЗНАКОМСТВО</p>
      <h2 id="intro-title">За кадром<br/>вашего канала.</h2>
      <p>Посты, сайт, запуск. Показываем, как собираем их в одну систему.</p>
      <a href="#faq">Как устроена работа ↘</a>
    </div>
    <figure className="intro-frame">
      <div className="intro-frame-label"><span>АГЕНТСТВО НАС#ЛИЯ</span><span>01:03 / INTRO</span></div>
      <div className="intro-screen">
        {src && !failed ? <video key={src} controls playsInline preload="metadata" poster="/agency-intro-poster.jpg" aria-label="Знакомство с агентством" onError={() => setFailed(true)} src={src}/> : <div className="intro-placeholder">
          <img src="/hero-backrooms-v2.png" alt="" loading="lazy"/>
          <div><span className="intro-status">{failed ? "ВИДЕО НЕДОСТУПНО" : "СКОРО"}</span><strong>Два Артёма.<br/>Один подход.</strong><p>{failed ? "Не удалось загрузить ролик. Попробуйте обновить страницу." : "Наш подход — в минутном видео."}</p></div>
        </div>}
      </div>
      <figcaption><span>ЗАПИСЬ / 001</span><span>{src && !failed ? "Знакомство с командой" : "Скоро в эфире"}</span></figcaption>
    </figure>
  </section>;
}
