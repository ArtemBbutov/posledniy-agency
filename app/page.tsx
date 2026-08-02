"use client";

import { useState } from "react";

const services = [
  ["01", "Стратегия", "Находим точку, в которой идея перестаёт быть просто идеей и становится событием."],
  ["02", "Продюсирование", "Собираем людей, сроки, ресурсы и доводим замысел до выхода в свет."],
  ["03", "Контент", "Создаём форматы, которые хочется досмотреть, переслать и обсуждать."],
  ["04", "Запуск", "Упаковываем, шумим и выводим проект к его аудитории без пустых обещаний."],
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main>
      <header className="nav">
        <a className="logo" href="#top" aria-label="Последний — на главную">
          ПОСЛЕДНИЙ<span>©26</span>
        </a>
        <nav className={menu ? "navlinks open" : "navlinks"} aria-label="Основная навигация">
          <a href="#about" onClick={() => setMenu(false)}>о нас</a>
          <a href="#services" onClick={() => setMenu(false)}>что делаем</a>
          <a href="#contact" onClick={() => setMenu(false)}>контакт</a>
        </nav>
        <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Открыть меню">
          {menu ? "закрыть" : "меню"}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span>Москва / весь мир</span><span>Продюсерское агентство</span></div>
        <h1><span>АГЕНТСТВО</span><span className="outline">НАСИЛИЯ</span></h1>
        <div className="hero-bottom">
          <p>Мы не ждём подходящего момента.<br />Мы его продюсируем.</p>
          <a className="round-link" href="#contact" aria-label="Обсудить проект"><span>обсудить<br />проект ↘</span></a>
        </div>
        <div className="ticker" aria-hidden="true"><span>ИДЕЯ → ДАВЛЕНИЕ → ФОРМА → РЕЗУЛЬТАТ → ИДЕЯ → ДАВЛЕНИЕ → ФОРМА → РЕЗУЛЬТАТ →</span></div>
      </section>

      <section className="statement" id="about">
        <p className="section-label">[ МАНИФЕСТ ]</p>
        <h2>Хорошие идеи редко<br />выживают сами.</h2>
        <div className="statement-copy">
          <p>Поэтому мы вмешиваемся. «Последний» — продюсерское агентство, которое превращает амбицию в систему, а систему — в заметный проект.</p>
          <p>Работаем с авторами, артистами, брендами и всеми, кому тесно в готовых форматах.</p>
        </div>
        <div className="stamp">не причиняем<br />физического вреда<br /><b>только творческий</b></div>
      </section>

      <section className="services" id="services">
        <div className="services-head"><p className="section-label">[ ЧТО ДЕЛАЕМ ]</p><span>От первого сообщения<br />до последнего титра</span></div>
        <div className="service-list">
          {services.map(([n, title, text]) => (
            <article className="service" key={n}>
              <span>{n}</span><h3>{title}</h3><p>{text}</p><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <p className="section-label">[ ПРИНЦИП ]</p>
        <div className="big-word">ПОСЛЕДНИЙ</div>
        <div className="process-grid">
          <h2>Мы остаёмся,<br />пока не готово.</h2>
          <div><p>Не продаём часы. Не производим презентации ради презентаций. Входим в проект, разбираемся, берём ответственность и доводим до результата.</p><span>Стратегия / производство / запуск</span></div>
        </div>
      </section>

      <footer id="contact">
        <p className="section-label">[ СВЯЗЬ ]</p>
        <h2>ЕСТЬ ИДЕЯ?<br /><a href="mailto:hello@posledniy.agency">ДАВАЙТЕ ДАВИТЬ.</a></h2>
        <div className="footer-row">
          <a href="mailto:hello@posledniy.agency">hello@posledniy.agency</a>
          <div><a href="#">telegram ↗</a><a href="#">instagram ↗</a></div>
          <span>© 2026 ПОСЛЕДНИЙ</span>
        </div>
      </footer>
    </main>
  );
}
