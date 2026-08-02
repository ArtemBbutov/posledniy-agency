const services = [
  ["01", "Продюсирование", "Берём идею под ответственность: собираем команду, бюджет, график и доводим проект до релиза."],
  ["02", "Разработка форматов", "Придумываем механику, драматургию и визуальный язык, которые работают именно на вашу аудиторию."],
  ["03", "Производство контента", "Организуем съёмки и постпродакшн — от одного ролика до полноценного сезона."],
  ["04", "Запуск и продвижение", "Упаковываем проект, планируем выход и помогаем ему встретиться с нужными людьми."],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="wordmark" href="#top">АН / 26</a>
        <nav aria-label="Основная навигация">
          <a href="#services">Услуги</a><a href="#process">Процесс</a><a href="#team">Команда</a>
        </nav>
        <a className="nav-contact" href="#contact">Обсудить проект</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Продюсерское агентство / Москва</p>
          <h1>Агентство<br/><em>насилия</em></h1>
          <p className="lead">Придумываем, собираем и запускаем проекты, которые невозможно не заметить.</p>
          <a className="primary" href="#contact">Начать проект <span>↗</span></a>
        </div>
        <div className="room" aria-label="Схематичная комната — фирменный образ агентства">
          <div className="ceiling-line"/><div className="floor-line"/>
          <div className="door"><span>вход<br/>в проект</span><i/></div>
          <div className="room-note note-one">идея должна<br/>выдержать давление</div>
          <div className="room-note note-two">не декор.<br/>система.</div>
          <span className="doodle d1">☆</span><span className="doodle d2">◡</span><span className="doodle d3">идея →</span><span className="doodle d4">×</span>
          <div className="room-label">КОМНАТА / 00</div>
          <div className="chair"><i/><i/><i/><i/></div>
        </div>
        <div className="hero-index"><span>Идея</span><span>Стратегия</span><span>Производство</span><span>Запуск</span></div>
      </section>

      <section className="manifesto">
        <p className="section-no">01 / Подход</p>
        <h2>Хорошая идея —<br/>это только начало.</h2>
        <div className="manifesto-text"><p>Мы не наблюдаем со стороны. Входим в проект, задаём неудобные вопросы, собираем нужных людей и остаёмся до результата.</p><p>Работаем с авторами, артистами и брендами, которым тесно в готовых форматах.</p></div>
        <p className="margin-note">Насилие — над шаблонами.<br/>Не над людьми.</p>
      </section>

      <section className="services" id="services">
        <div className="section-head"><p className="section-no">02 / Что делаем</p><p>Полный цикл или отдельный этап.<br/>Без лишних звеньев.</p></div>
        <div className="service-list">
          {services.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="process" id="process">
        <p className="section-no">03 / Как работаем</p>
        <h2>От разговора<br/>до выхода в свет.</h2>
        <ol>
          <li><span>01</span><b>Разбираемся</b><p>Слушаем задачу, изучаем контекст и формулируем, что на самом деле нужно сделать.</p></li>
          <li><span>02</span><b>Собираем</b><p>Создаём концепцию, команду и прозрачный план производства.</p></li>
          <li><span>03</span><b>Делаем</b><p>Ведём процесс, решаем проблемы и держим качество на каждом этапе.</p></li>
          <li><span>04</span><b>Запускаем</b><p>Готовим выход и передаём проект его аудитории.</p></li>
        </ol>
      </section>

      <section className="team" id="team">
        <div className="section-head"><p className="section-no">04 / Кто мы</p><p>Два продюсера.<br/>Одна ответственность.</p></div>
        <div className="team-grid">
          <article><div className="portrait"><span>АБ</span><i>сооснователь / продюсер</i></div><h3>Артём Бутов</h3><p>Стратегия, идеи и креативное продюсирование.</p></article>
          <article><div className="portrait second"><span>АФ</span><i>сооснователь / продюсер</i></div><h3>Артём Федонко</h3><p>Производство, команды и управление проектами.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-no">05 / Контакты</p>
        <h2>Есть что<br/>продюсировать?</h2>
        <p className="contact-lead">Опишите идею в нескольких предложениях. Мы прочитаем и вернёмся с вопросами.</p>
        <div className="contact-list">
          <a href="mailto:hello@posledniy.agency"><span>Почта</span><b>hello@posledniy.agency</b><i>↗</i></a>
          <div><span>Telegram</span><b>Контакт добавим после запуска</b><i>—</i></div>
        </div>
        <div className="footer"><span>Агентство насилия © 2026</span><span>Бутов × Федонко</span><a href="#top">Наверх ↑</a></div>
      </section>
    </main>
  );
}
