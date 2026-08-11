import { BackroomsAction } from "./backrooms-action";

const doors = [
  { n: "01", title: "Нет канала", tag: "экспертиза → медиа", text: "Собираем позиционирование, оформление и контент-систему, с которой можно уверенно выйти в Telegram." },
  { n: "02", title: "Канал не растёт", tag: "тишина → внимание", text: "Находим, где теряется интерес, перестраиваем рубрики, редакционный ритм и продвижение." },
  { n: "03", title: "Нет запуска", tag: "аудитория → продукт", text: "Связываем контент, предложение и путь к покупке без внезапной рекламной атаки." },
  { n: "04", title: "Всё на авторе", tag: "хаос → управление", text: "Берём редакцию, аналитику, команду и запуски под единое продюсерское управление." },
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
      <nav aria-label="Навигация по разделам"><a href="#floor-01">КОМУ</a><a href="#floor-02">ЗАДАЧА</a><a href="#floor-03">ПРОЦЕСС</a><a href="#exit">СВЯЗЬ</a></nav>
      <a className="br-call" href="#exit">Войти в проект <span>↗︎</span></a>
    </header>

    <section className="br-hero br-level" aria-labelledby="hero-title">
      <img className="br-hero-image" src="/hero-backrooms-v2.png" alt="Тёмный бесконечный этаж Backrooms" />
      <div className="br-hero-shade" />
      <div className="br-status"><span>ЭТАЖ 00</span><span className="live-dot">СВЕТ СТАБИЛЕН</span></div>
      <div className="br-hero-copy">
        <p>Telegram-продюсирование / Бутов × Федонко</p>
        <h1 id="hero-title"><span>Агенство</span><em>Нас#лия</em></h1>
        <div className="br-hero-bottom"><p>Продюсируем Telegram-каналы для экспертов и авторов: от позиции и редакции до роста и запуска продукта.</p><div className="br-hero-actions"><BackroomsAction/></div></div>
      </div>
      <div className="fluorescent f-one"/><div className="fluorescent f-two"/>
    </section>

    <section className="br-level br-room floor-01" id="floor-01">
      <div className="ceiling-grid"><i/><i/><i/></div><div className="carpet-plane"/>
      <aside className="level-marker"><b>01</b><span>КОМУ ПОДХОДИМ</span></aside>
      <div className="wall-message">
        <p className="br-label">ЭТАЖ 01 / КОМУ МЫ НУЖНЫ</p>
        <h2>Тем, кому нужен<br/>канал как медиа.</h2>
        <p>Работаем с экспертами, авторами и небольшими командами, у которых есть знание или продукт, но нет устойчивой системы Telegram: позиции, редакции, роста и запусков.</p>
      </div>
      <div className="observation-window"><span>ЭКСПЕРТЫ</span><span>АВТОРЫ</span><span>КОМАНДЫ</span><span>ПРОДУКТЫ</span></div>
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
      <p className="hall-note">Можно войти с одной проблемой. На диагностике соберём маршрут под реальное состояние канала и продукта.</p>
    </section>

    <section className="br-level corridor-level" id="floor-03">
      <div className="corridor-frame frame-a"/><div className="corridor-frame frame-b"/><div className="corridor-frame frame-c"/>
      <div className="corridor-lights"><i/><i/><i/><i/><i/></div>
      <div className="route-panel">
        <div className="route-heading"><p className="br-label">ЭТАЖ 03 / КАК МЫ РАБОТАЕМ</p><h2>От диагностики<br/>до запуска.</h2><p>Не начинаем с пачки постов. Сначала определяем задачу и точку назначения, затем собираем редакцию, рост и продуктовый маршрут.</p></div>
        <ol>{route.map(([n,title,text])=><li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><i>→</i></li>)}</ol>
      </div>
    </section>

    <section className="br-level proof-level" id="cases">
      <header className="proof-heading"><p className="br-label">ЭТАЖ 04 / ПРИМЕРЫ ЗАДАЧ</p><h2>Как это выглядит<br/>на практике.</h2><p>Показываем типовые сценарии работы, не выдавая их за готовые кейсы. Подтверждённые результаты и цифры добавим отдельно.</p></header>
      <div className="proof-grid">
        <article><span>01 / КАНАЛ С НУЛЯ</span><h3>Эксперт → самостоятельное медиа.</h3><p>Есть опыт и продукт, но нет ясной позиции и привычки вести канал. Собираем основу, с которой автор может регулярно выходить к аудитории.</p><ul><li>Позиционирование</li><li>Архитектура и рубрики</li><li>Первые 12–16 материалов</li></ul></article>
        <article><span>02 / ПЕРЕЗАПУСК</span><h3>Тихий канал → редакционная система.</h3><p>Канал существует, но публикации случайны и не дают ощущения движения. Пересобираем голос, ритм, навигацию и план роста.</p><ul><li>Аудит канала</li><li>Новый редакционный ритм</li><li>План продвижения</li></ul></article>
        <article><span>03 / ЗАПУСК ПРОДУКТА</span><h3>Аудитория → продуктовый маршрут.</h3><p>В канале есть внимание, но продукт появляется внезапно. Выстраиваем последовательность от интереса и доверия до предложения.</p><ul><li>Продукт и оффер</li><li>Контент-маршрут</li><li>Воронка и аналитика</li></ul></article>
      </div>
      <div className="team-note"><span>Проекты ведут лично</span><strong>Артём Бутов — стратегия и контент</strong><strong>Артём Федонко — продукт и запуск</strong></div>
      <p className="proof-note">На первом разговоре покажем рабочие материалы и разберём, какой из сценариев ближе вашей задаче.</p>
    </section>

    <section className="br-level price-level" id="formats">
      <header className="price-heading"><p className="br-label">ЭТАЖ 05 / ФОРМАТЫ И СТОИМОСТЬ</p><h2>Выберите<br/>глубину.</h2><p>Начинаем с задачи, а не с пакета услуг. Ниже — ориентиры, чтобы понимать порядок работы и бюджета до первого сообщения.</p></header>
      <div className="price-list">
        <article><span>01 / РАЗОВО</span><div><h3>Стратегия и упаковка</h3><p>Диагностика, позиционирование, структура канала, рубрики и план запуска редакции.</p></div><strong>от 60 000 ₽</strong></article>
        <article><span>02 / ЕЖЕМЕСЯЧНО</span><div><h3>Продюсирование канала</h3><p>Стратегия, редакция, контент, рост, аналитика и управление процессом.</p></div><strong>от 120 000 ₽ / мес.</strong></article>
        <article><span>03 / ПРОЕКТНО</span><div><h3>Запуск продукта</h3><p>Продукт, оффер, прогрев, воронка, продажи и разбор результатов.</p></div><strong>смета после диагностики</strong></article>
      </div>
      <a className="price-cta" href="https://t.me/but0vv" target="_blank" rel="noreferrer">Обсудить подходящий формат <span>↗︎</span></a>
    </section>

    <section className="br-level exit-level" id="exit">
      <div className="exit-light">ВЫХОД В TELEGRAM</div>
      <a className="exit-door" href="https://t.me/but0vv" target="_blank" rel="noreferrer" aria-label="Написать Артёму Бутову в Telegram и обсудить проект">
        <div className="exit-copy">
          <p>ЭТАЖ 06 / ПРЯМАЯ СВЯЗЬ</p>
          <h2><span>Есть канал.</span><span>Или только идея?</span></h2>
          <span className="exit-lead">Расскажите о задаче в Telegram. Разберём вводные, предложим точку входа и честно скажем, подходим ли друг другу.</span>
          <div className="exit-action"><span><strong>Написать в Telegram</strong><small>@but0vv · обсудить проект</small></span><b aria-hidden="true">↗︎</b></div>
        </div>
        <div className="exit-signal" aria-hidden="true"><span>↗︎</span><i>НАЖМИТЕ В ЛЮБОЙ ТОЧКЕ</i></div>
      </a>
      <footer><span>Агенство Нас#лия © 2026</span><span>Бутов × Федонко</span><a href="#top">На этаж 00 ↑</a></footer>
    </section>
  </main>;
}
