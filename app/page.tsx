import { BackroomsAction } from "./backrooms-action";
import { ProjectBrief } from "./project-brief";

const doors = [
  { n: "01", title: "Нет канала", tag: "экспертиза → медиа", text: "Собираем позиционирование, оформление и контент-систему, с которой можно уверенно выйти в Telegram." },
  { n: "02", title: "Канал не растёт", tag: "тишина → внимание", text: "Находим, где теряется интерес, перестраиваем рубрики, редакционный ритм и продвижение." },
  { n: "03", title: "Нет запуска", tag: "аудитория → продукт", text: "Связываем контент, предложение и путь к покупке без внезапной рекламной атаки." },
  { n: "04", title: "Всё на авторе", tag: "хаос → управление", text: "Берём редакцию, аналитику, команду и запуски под единое продюсерское управление." },
];

const route = [
  ["01", "Стратегия", "Автор, аудитория и позиционирование", "На выходе: карта канала и контент-углы"],
  ["02", "Редакция", "Голос, рубрики, тексты и визуальная система", "На выходе: готовый ритм публикаций"],
  ["03", "Рост", "Посевы, коллаборации и аналитика", "На выходе: понятный план привлечения"],
  ["04", "Запуск", "Прогрев, оффер, воронка и следующий цикл", "На выходе: сценарий запуска и метрики"],
];

export default function Home() {
  return <main id="top" className="backrooms-site authentic-backrooms">
    <header className="br-nav">
      <a className="br-logo" href="#top"><b>А#</b><span>АГЕНСТВО НАС#ЛИЯ<br/>СЕКТОР TELEGRAM</span></a>
      <nav aria-label="Навигация по разделам"><a href="#floor-01">КОМУ</a><a href="#floor-02">ЗАДАЧА</a><a href="#floor-03">ПРОЦЕСС</a><a href="#exit">АНКЕТА</a></nav>
      <a className="br-call" href="#exit">Заполнить анкету <span>↓</span></a>
    </header>

    <section className="br-hero br-level" aria-labelledby="hero-title">
      <img className="br-hero-image" src="/hero-backrooms-v2.png" alt="Тёмный бесконечный этаж Backrooms" />
      <div className="br-hero-shade" />
      <div className="br-status"><span>ЭТАЖ 00</span><span className="live-dot">СВЕТ СТАБИЛЕН</span></div>
      <div className="br-hero-copy">
        <p>Telegram-продюсирование / Бутов × Федонко</p>
        <h1 id="hero-title"><span>Агенство</span><em>Нас#лия</em></h1>
        <div className="br-hero-bottom"><div><p>Превращаем экспертизу в Telegram-медиа, которое регулярно выходит, растит доверие и приводит аудиторию к продукту.</p><ul className="hero-deliverables"><li>стратегия</li><li>редакция</li><li>рост</li><li>запуски</li></ul></div><div className="br-hero-actions"><BackroomsAction/></div></div>
      </div>
      <div className="fluorescent f-one"/><div className="fluorescent f-two"/>
    </section>

    <section className="br-level br-room floor-01" id="floor-01">
      <div className="ceiling-grid"><i/><i/><i/></div><div className="carpet-plane"/>
      <aside className="level-marker"><b>01</b><span>КОМУ ПОДХОДИМ</span></aside>
      <div className="wall-message">
        <p className="br-label">ЭТАЖ 01 / КОМУ МЫ НУЖНЫ</p>
        <h2>Есть экспертиза.<br/>Нужна система.</h2>
        <p>Подходим экспертам, авторам и небольшим командам, у которых уже есть знание или продукт, но Telegram пока держится на вдохновении одного человека.</p>
        <ul className="audience-facts"><li>Канал должен звучать как автор, а не как редакция</li><li>Контент должен выходить без ежедневного контроля</li><li>Аудитория должна понимать, зачем читать и что покупать</li></ul>
      </div>
      <figure className="workspace-visual"><img src="/telegram-workspace-v1.png" alt="Редакционный стол Telegram-проекта в атмосфере Backrooms"/><figcaption><span>РАБОЧАЯ СЦЕНА / 01</span><strong>Вы даёте экспертизу.<br/>Мы держим производство.</strong></figcaption></figure>
    </section>

    <section className="br-level door-level" id="floor-02">
      <div className="hall-ceiling"><i/><i/><i/><i/></div>
      <header className="hall-heading"><p className="br-label">ЭТАЖ 02 / КАКУЮ ПРОБЛЕМУ РЕШАЕМ</p><h2>Что сейчас<br/>не работает?</h2></header>
      <div className="route-lighting" aria-hidden="true">{doors.map((door)=><i key={door.n}/>)}</div>
      <div className="route-choices">
        {doors.map((door)=><article className="service-route" key={door.n} tabIndex={0} aria-label={`${door.n}. ${door.title}. ${door.text}`}>
          <div className="route-index"><span>{door.n}</span><i>{door.tag}</i></div><h3>{door.title}</h3><p>{door.text}</p><b aria-hidden="true">↗︎</b>
        </article>)}
      </div>
      <div className="problem-result"><span>ВХОД</span><p>«Надо что-то делать с Telegram»</p><i>→</i><span>ВЫХОД</span><p>Понятная роль канала, регулярная редакция и маршрут к продукту</p></div>
    </section>

    <section className="br-level corridor-level" id="floor-03">
      <div className="corridor-frame frame-a"/><div className="corridor-frame frame-b"/><div className="corridor-frame frame-c"/>
      <div className="corridor-lights"><i/><i/><i/><i/><i/></div>
      <div className="route-panel">
        <div className="route-heading"><p className="br-label">ЭТАЖ 03 / КАК МЫ РАБОТАЕМ</p><h2>От диагностики<br/>до запуска.</h2><p>Не начинаем с пачки постов. Сначала определяем задачу и точку назначения, затем собираем редакцию, рост и продуктовый маршрут.</p></div>
        <ol>{route.map(([n,title,text,result])=><li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p><small>{result}</small></div><i>→</i></li>)}</ol>
      </div>
    </section>

    <section className="br-level proof-level" id="cases">
      <header className="proof-heading"><p className="br-label">ЭТАЖ 04 / ЧТО ПОЛУЧАЕТ КЛИЕНТ</p><h2>Вот что остаётся<br/>после слов.</h2><p>Не абстрактное «ведение канала», а конкретные рабочие поверхности: голос автора, редакционный конвейер и маршрут запуска.</p></header>
      <div className="work-showcase">
        <figure className="work-photo work-photo-main"><img src="/editorial-wall-v1.png" alt="Стена редакционного планирования запуска"/><figcaption><span>01 / РЕДАКЦИЯ</span><strong>Контент не придумывается заново каждое утро</strong><p>Карта тем, роли материалов, дедлайны и связь с продуктом собраны в один производственный маршрут.</p></figcaption></figure>

        <article className="work-screen channel-screen compact-channel">
          <div className="screen-bar"><span>02 / КАНАЛ</span><i>ПРЕВЬЮ</i></div>
          <div className="telegram-mock"><header><b>ГОЛОС АВТОРА</b><span>система агентства</span></header><div className="post-mock"><small>09:40</small><strong>Текст, который хочется дочитать</strong><p>Узнаваемый голос, последовательность тем и причина остаться.</p><i/></div></div>
          <footer><strong>Канал и голос</strong><span>Позиция, упаковка, рубрики</span></footer>
        </article>

        <article className="work-screen editorial-screen">
          <div className="screen-bar"><span>02 / РЕДАКЦИЯ</span><i>РАБОЧИЙ РИТМ</i></div>
          <div className="editorial-board">
            <div><b>ИДЕИ</b><span>Личная история</span><span>Разбор рынка</span></div>
            <div><b>В РАБОТЕ</b><span>Главный тезис</span><span className="active">Пост запуска</span></div>
            <div><b>ГОТОВО</b><span>Кейс автора</span><span>Навигация</span></div>
          </div>
          <footer><strong>Редакционная система</strong><span>Темы не заканчиваются, публикации не зависят от настроения</span></footer>
        </article>

        <article className="work-screen launch-screen">
          <div className="screen-bar"><span>03 / ЗАПУСК</span><i>КАРТА ДВИЖЕНИЯ</i></div>
          <div className="launch-map">
            <span><b>01</b><i>Интерес</i></span><span><b>02</b><i>Доверие</i></span><span><b>03</b><i>Проблема</i></span><span><b>04</b><i>Продукт</i></span>
            <div className="launch-line"><i/><i/><i/><i/></div>
            <p>Контент ведёт к предложению постепенно — без резкой смены голоса и рекламного вторжения.</p>
          </div>
          <footer><strong>Продуктовый маршрут</strong><span>Оффер, прогрев, воронка и точки аналитики</span></footer>
        </article>
      </div>
      <div className="team-note"><span>Проекты ведут лично</span><strong>Артём Бутов — стратегия и контент</strong><strong>Артём Федонко — продукт и запуск</strong></div>
      <p className="proof-note">Это демонстрация состава работы, а не выдуманный кейс. Реальные цифры и материалы добавим только с разрешения клиента.</p>
    </section>

    <section className="br-level price-level" id="formats">
      <header className="price-heading"><p className="br-label">ЭТАЖ 05 / ФОРМАТЫ РАБОТЫ</p><h2>Можно начать<br/>с разной точки.</h2><p>Три понятных формата — от сборки фундамента до полного продюсерского управления. Итоговый состав фиксируем после диагностики.</p></header>
      <div className="price-list">
        <article><span>01 / РАЗОВО</span><div><h3>Стратегия и упаковка</h3><p>Диагностика, позиционирование, структура канала, рубрики и план запуска редакции.</p></div><strong>от 60 000 ₽</strong></article>
        <article><span>02 / ЕЖЕМЕСЯЧНО</span><div><h3>Продюсирование канала</h3><p>Стратегия, редакция, контент, рост, аналитика и управление процессом.</p></div><strong>от 120 000 ₽ / мес.</strong></article>
        <article><span>03 / ПРОЕКТНО</span><div><h3>Запуск продукта</h3><p>Продукт, оффер, прогрев, воронка, продажи и разбор результатов.</p></div><strong>смета после диагностики</strong></article>
      </div>
      <a className="price-cta" href="#exit">Перейти к анкете проекта <span>↓</span></a>
    </section>

    <section className="br-level brief-level" id="exit">
      <header className="brief-heading"><p className="br-label">ЭТАЖ 06 / АНКЕТА ПРОЕКТА</p><h2>Покажите,<br/>с чем входите.</h2><p>Шесть коротких вопросов вместо созвона «познакомиться». По ответам поймём задачу, подходящий формат и следующий шаг.</p></header>
      <ProjectBrief/>
      <footer><span>Агенство Нас#лия © 2026</span><span>Бутов × Федонко</span><a href="#top">На этаж 00 ↑</a></footer>
    </section>
  </main>;
}
