const doors = [
  { n: "01", title: "Канал с нуля", tag: "эксперт → медиа", text: "Позиционирование, оформление и контент-система, из которой не хочется выходить." },
  { n: "02", title: "Перезапуск", tag: "хаос → система", text: "Разбираем старый этаж, меняем маршрут и возвращаем каналу внимание аудитории." },
  { n: "03", title: "Запуск продукта", tag: "контент → продажи", text: "Прогрев, предложение и продажи через Telegram без внезапной рекламной атаки." },
  { n: "04", title: "Продюсирование", tag: "автор → бизнес", text: "Берём канал, редакцию, аналитику, команду и запуски под единое управление." },
];

const route = [
  ["01", "Стратегия", "Автор, аудитория, позиционирование и точка назначения"],
  ["02", "Редакция", "Голос канала, рубрики, тексты и визуальная система"],
  ["03", "Рост", "Посевы, коллаборации, аналитика и новая аудитория"],
  ["04", "Запуск", "Прогрев, оффер, воронка, продажи и следующий цикл"],
];

export default function Home() {
  return <main id="top" className="backrooms-site authentic-backrooms">
    <header className="br-nav">
      <a className="br-logo" href="#top"><b>А#</b><span>АГЕНСТВО НАС#ЛИЯ<br/>СЕКТОР TELEGRAM</span></a>
      <nav aria-label="Навигация по этажам"><a href="#floor-01">01</a><a href="#floor-02">02</a><a href="#floor-03">03</a><a href="#exit">ВЫХОД</a></nav>
      <a className="br-call" href="#exit">Войти в проект <span>↗</span></a>
    </header>

    <section className="br-hero br-level" aria-labelledby="hero-title">
      <img className="br-hero-image" src="/hero-backrooms-v2.png" alt="Тёмный бесконечный этаж Backrooms" />
      <div className="br-hero-shade" />
      <div className="br-status"><span>ЭТАЖ 00</span><span className="live-dot">СВЕТ СТАБИЛЕН</span></div>
      <div className="br-hero-copy">
        <p>Telegram-каналы и запуски / Бутов × Федонко</p>
        <h1 id="hero-title"><span>Агенство</span><em>Нас#лия</em></h1>
        <div className="br-hero-bottom"><p>Строим каналы, вокруг которых растут аудитория, доверие и продажи.</p><a href="#floor-01">Спуститься ниже <span>↓</span></a></div>
      </div>
      <div className="fluorescent f-one"/><div className="fluorescent f-two"/>
    </section>

    <section className="br-level br-room floor-01" id="floor-01">
      <div className="ceiling-grid"><i/><i/><i/></div><div className="carpet-plane"/>
      <aside className="level-marker"><b>01</b><span>КОМНАТА ЗНАКОМСТВА</span></aside>
      <div className="wall-message">
        <p className="br-label">КТО МЫ / СЕКТОР 01-А</p>
        <h2>Не просто<br/>пишем посты.</h2>
        <p>Превращаем экспертизу и личность автора в самостоятельное медиа. Здесь аудитория знакомится, остаётся, доверяет — и покупает во время запуска.</p>
      </div>
      <div className="observation-window"><span>ПОЗИЦИОНИРОВАНИЕ</span><span>КОНТЕНТ</span><span>РОСТ</span><span>ЗАПУСК</span></div>
    </section>

    <section className="br-level door-level" id="floor-02">
      <div className="hall-ceiling"><i/><i/><i/><i/></div>
      <header className="hall-heading"><p className="br-label">ЭТАЖ 02 / ВЫБЕРИТЕ ДВЕРЬ</p><h2>С какой точки<br/>вы входите?</h2></header>
      <div className="door-row">
        {doors.map((door)=><article className="service-door" key={door.n}>
          <div className="door-plate"><span>{door.n}</span><i>{door.tag}</i></div><div className="door-panel"><h3>{door.title}</h3><p>{door.text}</p></div><b className="door-knob"/>
        </article>)}
      </div>
      <p className="hall-note">Все двери ведут в одну систему. Отличается только точка входа.</p>
    </section>

    <section className="br-level corridor-level" id="floor-03">
      <div className="corridor-frame frame-a"/><div className="corridor-frame frame-b"/><div className="corridor-frame frame-c"/>
      <div className="corridor-lights"><i/><i/><i/><i/><i/></div>
      <div className="route-panel">
        <div className="route-heading"><p className="br-label">ЭТАЖ 03 / МАРШРУТ ПРОЕКТА</p><h2>От первого поста<br/>до запуска.</h2><p>Можно зайти с одной задачей или пройти маршрут целиком. На каждом участке понятно, что происходит и куда мы идём.</p></div>
        <ol>{route.map(([n,title,text])=><li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><i>→</i></li>)}</ol>
      </div>
    </section>

    <section className="br-level utility-level">
      <div className="pipe p1"/><div className="pipe p2"/><div className="pipe p3"/>
      <div className="utility-sign"><p className="br-label">ЭТАЖ 04 / ТЕХНИЧЕСКИЙ</p><h2>Что держит<br/>систему.</h2></div>
      <div className="utility-grid"><article><span>01</span><h3>Автор</h3><p>Сохраняем настоящую интонацию. Канал не превращается в безликий полезный блог.</p></article><article><span>02</span><h3>Ритм</h3><p>У контента появляются рубрики, темп, редакционный процесс и измеримые точки роста.</p></article><article><span>03</span><h3>Продажа</h3><p>Запуск становится продолжением отношений с аудиторией, а не внезапным вторжением.</p></article></div>
    </section>

    <section className="br-level exit-level" id="exit">
      <div className="exit-light">ВЫХОД</div>
      <div className="exit-door"><div className="exit-copy"><p>ЭТАЖ 05 / СВЯЗЬ</p><h2>Есть канал?<br/>Заходите.</h2><span>Расскажите о себе, канале и продукте. Если канала ещё нет — это тоже нормальная точка старта.</span><a href="mailto:hello@posledniy.agency">hello@posledniy.agency ↗</a></div><i/></div>
      <footer><span>Агенство Нас#лия © 2026</span><span>Бутов × Федонко</span><a href="#top">На этаж 00 ↑</a></footer>
    </section>
  </main>;
}
