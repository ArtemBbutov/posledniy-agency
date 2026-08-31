import { ProjectBrief } from "./project-brief";
import { SiteInteractions } from "./site-interactions";

const cases = [
  {
    n: "01",
    image: "/case-wake-up-backrooms.png",
    alt: "Проект WAKE UP на терминале в пространстве Backrooms",
    title: "WAKE UP",
    duration: "7 дней",
    check: "4 000 ₽",
    participants: "180+",
    description: "За неделю мы соединили несколько воронок и частично автоматизировали запуск. В продукт вошли более 180 человек со средним чеком около 4 000 ₽.",
  },
  {
    n: "02",
    image: "/case-wake-up-empire-backrooms.png",
    alt: "Проект Wake Up Empire в архиве Backrooms",
    title: "WAKE UP EMPIRE",
    duration: "5 дней",
    check: "от 4 990 ₽",
    participants: "80+",
    description: "За пять дней мы привлекли более 80 платных подписчиков. Основой запуска стали сильный прогрев и технически продуманный сайт.",
  },
  {
    n: "03",
    image: "/case-100k-backrooms.png",
    alt: "Проект 100 000 ₽ с нуля на развилке Backrooms",
    title: "100 000 ₽ С НУЛЯ",
    duration: "3 дня",
    check: "1 750 ₽",
    participants: "150+",
    description: "Быстрый запуск был рассчитан на широкий охват, а не на высокий чек. Продукт стал первым шагом к групповой работе стоимостью более 60 000 ₽.",
  },
];

const work = [
  { n: "01", title: "Решаем, о чём будет канал", text: "Находим главную тему и объясняем, почему людям будет интересно читать именно вас." },
  { n: "02", title: "Пишем и выпускаем посты", text: "Узнаём, как вы говорите, придумываем темы, пишем тексты и публикуем их вовремя." },
  { n: "03", title: "Находим ваших читателей", text: "Рассказываем о канале там, где уже есть нужные вам люди, и смотрим, кто приходит." },
  { n: "04", title: "Помогаем продавать через канал", text: "Рассказываем о вашем продукте так, чтобы читателю было понятно, зачем он ему нужен и как его купить." },
];

const formats = [
  {
    n: "01",
    route: "LEVEL 01 / MEDIA",
    cadence: "Ежемесячно",
    title: "Полное продюсирование",
    description: "Развиваем канал как медиа и продюсируем запуски продуктов.",
    result: ["Широкая аудитория", "Контент выходит по системе", "Запуск в Telegram — от 500 000 ₽", "Готовая база для следующих запусков"],
    price: "от 120 тыс. / месяц",
  },
  {
    n: "02",
    route: "LEVEL 02 / LAUNCH",
    cadence: "Проектная работа",
    title: "Запуск продукта через Telegram",
    description: "Прогрев, посты и вся операционная работа — на нас.",
    result: ["Запуск в Telegram — от 500 000 ₽", "Готовый к продаже продукт", "Канал продолжает работать после запуска"],
    price: "после диагностики",
  },
  {
    n: "03",
    route: "EXIT / DIAGNOSTICS",
    cadence: "Бесплатно",
    title: "Бесплатная консультация",
    description: "Разберём канал и дадим три конкретных совета по монетизации контента.",
    result: ["Понимание потенциала канала", "Три идеи для монетизации", "Понятные условия дальнейшей работы"],
    price: "0 ₽",
    featured: true,
  },
];

function SectionMood({ tone }: { tone: "situation" | "cases" | "work" | "services" | "brief" }) {
  return <>
    <span className={`section-bridge bridge-${tone}`} aria-hidden="true"/>
    <div className={`section-atmosphere atmosphere-${tone}`} aria-hidden="true">
      <span className="section-light-source"/>
      <span className="section-light-pool"/>
      <span className="section-motes"/>
    </div>
  </>;
}

export default function Home() {
  return <main id="top" className="backrooms-site authentic-backrooms story-site">
    <SiteInteractions/>
    <header className="br-nav">
      <a className="br-logo" href="#top"><b>А#</b><span>АГЕНТСТВО НАС#ЛИЯ<br/>TELEGRAM PRODUCTION</span></a>
      <nav aria-label="Навигация по разделам"><span className="nav-liquid" aria-hidden="true"><i className="nav-liquid-core"/></span><a href="#reality">СИТУАЦИЯ</a><a href="#change">РЕЗУЛЬТАТ</a><a href="#work">РАБОТА</a><a href="#exit">АНКЕТА</a></nav>
      <a className="br-call" href="#exit">Обсудить канал <span>↓</span></a>
    </header>

    <section className="br-hero br-level" aria-labelledby="hero-title">
      <img className="br-hero-image" src="/hero-backrooms-v2.png" alt="Тёмный бесконечный этаж Backrooms" />
      <div className="br-hero-shade" />
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-ceiling-light"><i/><i/></span>
        <span className="hero-fog hero-fog-far"/>
        <span className="hero-fog hero-fog-near"/>
        <span className="hero-dust"/>
      </div>
      <div className="hero-story-copy">
        <p className="hero-eyebrow">Продюсерское агентство</p>
        <h1 id="hero-title"><span className="hero-title-line" data-text="Продюсирование">Продюсирование</span><span className="hero-title-line" data-text="телеграм-каналов">телеграм-каналов</span></h1>
        <p className="hero-lead">Стратегия, контент, выпуск, продвижение и запуски — одной командой. Автор сохраняет голос и не живёт в операционке.</p>
        <div className="hero-cta-row"><a className="hero-main-cta" href="#change"><span>Посмотреть кейсы</span><i>↓</i></a></div>
      </div>
      <img className="hero-foreground" src="/hero-backrooms-v2.png" alt="" aria-hidden="true" />
      <div className="fluorescent f-one"/><div className="fluorescent f-two"/>
    </section>

    <section className="story-scene" id="reality">
      <SectionMood tone="situation"/>
      <img src="/telegram-workspace-v1.png" alt="Рабочее место автора Telegram-канала"/>
      <div className="scene-shade"/>
      <header><p className="br-label">01 / УЗНАЁТЕ СЕБЯ?</p><h2>Канал есть.<br/>Времени на него — нет.</h2></header>
      <div className="scene-notes">
        <article><span>18:40</span><strong>Пост снова переносится на завтра</strong><p>Днём — клиенты и команда. До канала руки доходят только вечером.</p></article>
        <article><span>21:15</span><strong>Всё ждёт вашего ответа</strong><p>Пока вы не согласуете тему и текст, редактор не может двигаться дальше.</p></article>
        <article><span>ЗАПУСК</span><strong>Продавать нужно уже через неделю</strong><p>Продукт готов, а аудиторию начинают готовить в последний момент.</p></article>
      </div>
      <p className="scene-conclusion">Мы забираем канал на себя: вместе выбираем темы, сами готовим и выпускаем посты, следим за ростом и заранее готовим аудиторию к запуску.</p>
    </section>

    <section className="cases-section" id="change">
      <SectionMood tone="cases"/>
      <header className="cases-heading"><h2>Кейсы</h2></header>
      <div className="case-carousel" role="region" aria-roledescription="carousel" aria-label="Кейсы агентства" tabIndex={0}>
        <div className="case-viewport">
          <div className="cases-grid case-track">
            {cases.map((item,index)=><article className="case-card" key={item.n} role="group" aria-roledescription="slide" aria-label={`Кейс ${index + 1} из ${cases.length}: ${item.title}`} data-case-slide data-active={index === 0 ? "true" : "false"} aria-hidden={index === 0 ? undefined : true}>
              <figure><img src={item.image} alt={item.alt}/><span className="case-scan" aria-hidden="true"/></figure>
              <div className="case-copy">
                <div className="case-identity"><span>Кейс {item.n}</span><h3>{item.title}</h3></div>
                <div className="case-details"><p className="case-description">{item.description}</p><dl className="case-results"><div><dt>Длительность</dt><dd>{item.duration}</dd></div><div><dt>Участники</dt><dd>{item.participants}</dd></div><div><dt>Средний чек</dt><dd>{item.check}</dd></div></dl></div>
              </div>
            </article>)}
          </div>
        </div>
        <button className="case-arrow case-arrow-prev" type="button" aria-label="Предыдущий кейс"><i aria-hidden="true"/></button>
        <button className="case-arrow case-arrow-next" type="button" aria-label="Следующий кейс"><i aria-hidden="true"/></button>
        <div className="case-pagination" aria-label="Выбор кейса">
          {cases.map((item,index)=><button type="button" key={item.n} data-case-index={index} aria-label={`Показать кейс ${item.title}`} aria-current={index === 0 ? "true" : undefined}><i/></button>)}
        </div>
        <p className="case-counter" aria-live="polite"><span data-case-current>01</span><i>/</i><span>{String(cases.length).padStart(2,"0")}</span></p>
      </div>
    </section>

    <section className="work-story" id="work">
      <SectionMood tone="work"/>
      <div className="work-story-copy">
        <p className="br-label">03 / КАК МЫ ВЕДЁМ КАНАЛ</p>
        <h2>Берём ваш канал<br/>на себя.</h2>
        <p className="work-intro">Вы рассказываете нам о себе и своей цели. Дальше мы придумываем темы, пишем посты, находим читателей и помогаем продавать.</p>
        <ol>{work.map((item)=><li key={item.n}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
      </div>
      <figure className="system-map">
        <img src="/editorial-wall-v1.png" alt="Редакционная карта Telegram-проекта"/>
        <figcaption><span>РАБОЧАЯ СИСТЕМА / ВИД ИЗНУТРИ</span><strong>Темы, дедлайны, продукт и продвижение видны в одной карте.</strong></figcaption>
        <button className="map-point point-a" type="button"><b>01</b><small>контент-углы</small></button>
        <button className="map-point point-b" type="button"><b>02</b><small>ритм редакции</small></button>
        <button className="map-point point-c" type="button"><b>03</b><small>точки запуска</small></button>
      </figure>
    </section>

    <section className="formats-story" id="formats">
      <SectionMood tone="services"/>
      <header><p className="br-label">05 / С ЧЕМ МОЖЕМ ПОМОЧЬ</p><h2>Выберите<br/>дверь.</h2><p>Три двери — три сценария работы. За первой мы берём канал целиком, за второй собираем запуск, третья ведёт на бесплатную консультацию.</p></header>
      <div className="format-lines">
        {formats.map((format) => <article className={format.featured ? "format-featured" : undefined} key={format.n} data-route={format.route}>
          <span className="format-door-motion" aria-hidden="true"><i /></span>
          <div className="format-index"><small>{format.cadence}</small></div>
          <div className="format-product"><h3>{format.title}</h3><p>{format.description}</p></div>
          <div className="format-result"><span>Что получите</span><ul>{format.result.map((item)=><li key={item}>{item}</li>)}</ul></div>
          <div className="format-meta"><p><span>Стоимость</span><strong>{format.price}</strong></p><a href="#exit" aria-label={format.featured ? "Записаться на бесплатную консультацию" : `Обсудить формат «${format.title}»`}><span>{format.featured ? "Записаться бесплатно" : "Обсудить"}</span><i aria-hidden="true">↘</i></a></div>
        </article>)}
      </div>
    </section>

    <section className="br-level brief-level" id="exit">
      <SectionMood tone="brief"/>
      <header className="brief-heading"><p className="br-label">06 / КОРОТКАЯ АНКЕТА</p><h2>Поймём задачу<br/>за минуту.</h2><p>Без длинных полей: выбирайте подходящие ответы, а мы соберём контекст для предметного разговора.</p></header>
      <ProjectBrief/>
      <footer><span>Агентство Нас#лия © 2026</span><span>Артём Бутов × Артём Федонко</span><a href="#top">Наверх ↑</a></footer>
    </section>
  </main>;
}
