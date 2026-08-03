import { BackroomsAction } from "./backrooms-action";

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
        <div className="br-hero-bottom"><p>Строим каналы, вокруг которых растут аудитория, доверие и интерес к продукту.</p><div className="br-hero-actions"><BackroomsAction/><a href="#floor-01">Спуститься ниже <span>↓</span></a></div></div>
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
      <header className="hall-heading"><p className="br-label">ЭТАЖ 02 / ВЫБЕРИТЕ МАРШРУТ</p><h2>С какой точки<br/>вы входите?</h2></header>
      <div className="route-lighting" aria-hidden="true">{doors.map((door)=><i key={door.n}/>)}</div>
      <div className="route-choices">
        {doors.map((door)=><article className="service-route" key={door.n} tabIndex={0} aria-label={`${door.n}. ${door.title}. ${door.text}`}>
          <div className="route-index"><span>{door.n}</span><i>{door.tag}</i></div><h3>{door.title}</h3><p>{door.text}</p><b aria-hidden="true">↗</b>
        </article>)}
      </div>
      <p className="hall-note">Все маршруты ведут в одну систему. Отличается только точка входа.</p>
    </section>

    <section className="br-level corridor-level" id="floor-03">
      <div className="corridor-frame frame-a"/><div className="corridor-frame frame-b"/><div className="corridor-frame frame-c"/>
      <div className="corridor-lights"><i/><i/><i/><i/><i/></div>
      <div className="route-panel">
        <div className="route-heading"><p className="br-label">ЭТАЖ 03 / МАРШРУТ ПРОЕКТА</p><h2>От первого поста<br/>до запуска.</h2><p>Можно зайти с одной задачей или пройти маршрут целиком. На каждом участке понятно, что происходит и куда мы идём.</p></div>
        <ol>{route.map(([n,title,text])=><li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><i>→</i></li>)}</ol>
      </div>
    </section>

    <section className="br-level proof-level" id="cases">
      <header className="proof-heading"><p className="br-label">ЭТАЖ 04 / ПРАКТИКА КОМАНДЫ</p><h2>Без выдуманных<br/>цифр.</h2><p>Первые проекты агентства оформляем в публичные кейсы. Пока показываем то, за что отвечаем лично, и рабочие материалы — на созвоне.</p></header>
      <div className="proof-grid">
        <article><span>АРТЁМ БУТОВ / СТРАТЕГИЯ И КОНТЕНТ</span><h3>Голос, который узнают.</h3><p>Позиционирование автора, архитектура канала, рубрики, редакционный ритм и тексты, которые не звучат как корпоративный блог.</p><ul><li>Стратегия канала</li><li>Редакционная система</li><li>Контент и упаковка</li></ul></article>
        <article><span>АРТЁМ ФЕДОНКО / ПРОДУКТ И ЗАПУСК</span><h3>Система, которая продаёт.</h3><p>Продукт, команда, прогрев, воронка и управление запуском — от первой гипотезы до разбора результатов.</p><ul><li>Продукт и оффер</li><li>Воронка запуска</li><li>Команда и аналитика</li></ul></article>
      </div>
      <p className="proof-note">Как только появляется подтверждённый результат — добавляем сюда цифры. Не раньше.</p>
    </section>

    <section className="br-level utility-level">
      <div className="pipe p1"/><div className="pipe p2"/><div className="pipe p3"/>
      <div className="utility-sign"><p className="br-label">ЭТАЖ 05 / ПЕРВЫЕ 30 ДНЕЙ</p><h2>Что будет<br/>через месяц.</h2></div>
      <div className="utility-grid month-grid"><article><span>01</span><h3>Позиция</h3><p>Аудит, аудитория, роль автора, обещание канала и понятная причина подписаться.</p></article><article><span>02</span><h3>Редакция</h3><p>Голос, рубрики, контент-план и первые 12–16 материалов для стабильного выхода.</p></article><article><span>03</span><h3>Рост</h3><p>План продвижения, список площадок, первые тесты и метрики, по которым принимаем решения.</p></article><article><span>04</span><h3>Запуск</h3><p>Карта продукта, оффер, прогрев и календарь запуска — если проект готов к продажам.</p></article></div>
      <p className="month-note">Точный состав первого месяца фиксируем после диагностики: он зависит от состояния канала и продукта.</p>
    </section>

    <section className="br-level price-level" id="formats">
      <header className="price-heading"><p className="br-label">ЭТАЖ 06 / ФОРМАТЫ И СТОИМОСТЬ</p><h2>Выберите<br/>глубину.</h2><p>Начинаем с задачи, а не с пакета услуг. Ниже — ориентиры, чтобы понимать порядок работы и бюджета до первого сообщения.</p></header>
      <div className="price-list">
        <article><span>01 / РАЗОВО</span><div><h3>Стратегия и упаковка</h3><p>Диагностика, позиционирование, структура канала, рубрики и план запуска редакции.</p></div><strong>от 60 000 ₽</strong></article>
        <article><span>02 / ЕЖЕМЕСЯЧНО</span><div><h3>Продюсирование канала</h3><p>Стратегия, редакция, контент, рост, аналитика и управление процессом.</p></div><strong>от 120 000 ₽ / мес.</strong></article>
        <article><span>03 / ПРОЕКТНО</span><div><h3>Запуск продукта</h3><p>Продукт, оффер, прогрев, воронка, продажи и разбор результатов.</p></div><strong>смета после диагностики</strong></article>
      </div>
      <a className="price-cta" href="https://t.me/but0vv" target="_blank" rel="noreferrer">Обсудить подходящий формат <span>↗</span></a>
    </section>

    <section className="br-level exit-level" id="exit">
      <div className="exit-light">ВЫХОД</div>
      <div className="exit-door"><div className="exit-copy"><p>ЭТАЖ 07 / СВЯЗЬ</p><h2>Готовы зайти<br/>в проект?</h2><span>Напишите нам о канале, продукте или идее. Ответим лично и поймём, сможем ли быть полезны.</span><a href="https://t.me/but0vv" target="_blank" rel="noreferrer">Обсудить проект в Telegram ↗</a></div><i/></div>
      <footer><span>Агенство Нас#лия © 2026</span><span>Бутов × Федонко</span><a href="#top">На этаж 00 ↑</a></footer>
    </section>
  </main>;
}
