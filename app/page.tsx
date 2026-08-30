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
    description: "За неделю собрали связку из нескольких воронок и частично автоматизировали продажи. В первый поток вошли более 180 участников со средним чеком около 4 000 ₽.",
  },
  {
    n: "02",
    image: "/case-wake-up-empire-backrooms.png",
    alt: "Проект Wake Up Empire в архиве Backrooms",
    title: "WAKE UP EMPIRE",
    duration: "5 дней",
    check: "от 4 990 ₽",
    participants: "80+",
    description: "За пять дней привлекли более 80 платных участников. Продажи собрали через последовательный прогрев и технически продуманный сайт.",
  },
  {
    n: "03",
    image: "/case-100k-backrooms.png",
    alt: "Проект 100 000 ₽ с нуля на развилке Backrooms",
    title: "100 000 ₽ С НУЛЯ",
    duration: "3 дня",
    check: "1 750 ₽",
    participants: "150+",
    description: "За три дня привлекли более 150 участников в доступный продукт. Он стал первой ступенью к групповой работе стоимостью более 60 000 ₽.",
  },
];

const work = [
  { n: "01", title: "Находим сильную идею продукта", text: "Изучаем аудиторию и вашу экспертизу, выбираем проблему, за решение которой люди готовы платить." },
  { n: "02", title: "Собираем продукт и оффер", text: "Проектируем результат, формат, программу, стоимость и предложение, которое легко понять и захотеть." },
  { n: "03", title: "Готовим аудиторию к покупке", text: "Выстраиваем контент, прогрев, воронку и точки касания — от первого интереса до заявки." },
  { n: "04", title: "Проводим запуск и докручиваем", text: "Управляем командой, выпуском и продажами, следим за цифрами и сохраняем рабочую систему для следующего запуска." },
];

const formats = [
  {
    n: "01",
    route: "LEVEL 01 / MEDIA",
    cadence: "Ежемесячно",
    title: "Полное продюсирование",
    description: "Становимся продюсерской командой проекта: развиваем Telegram-медиа и регулярно запускаем продукты.",
    result: ["Продукт и позиционирование", "Контент и прогрев под продажи", "Запуск в Telegram — от 500 000 ₽", "Система повторных запусков"],
    price: "от 120 тыс. / месяц",
  },
  {
    n: "02",
    route: "LEVEL 02 / LAUNCH",
    cadence: "Проектная работа",
    title: "Запуск продукта через Telegram",
    description: "Собираем и проводим один запуск: от идеи и оффера до прогрева, воронки и продаж.",
    result: ["Готовый к продаже продукт", "Прогрев и воронка под ключ", "Запуск в Telegram — от 500 000 ₽", "План улучшений по итогам продаж"],
    price: "после диагностики",
  },
  {
    n: "03",
    route: "EXIT / DIAGNOSTICS",
    cadence: "Бесплатно",
    title: "Бесплатная консультация",
    description: "За 30 минут разберём вашу точку А, продукт и аудиторию — и покажем, на чём можно собрать запуск.",
    result: ["Что и кому запускать", "Где сейчас теряются продажи", "Три ближайших шага", "Понятный формат дальнейшей работы"],
    price: "0 ₽",
    featured: true,
  },
];

export default function Home() {
  return <main id="top" className="backrooms-site authentic-backrooms story-site">
    <SiteInteractions/>
    <header className="br-nav">
      <a className="br-logo" href="#top"><b>А#</b><span>АГЕНТСТВО НАС#ЛИЯ<br/>TELEGRAM PRODUCTION</span></a>
      <nav aria-label="Навигация по разделам"><span className="nav-liquid" aria-hidden="true"><i className="nav-liquid-core"/></span><a href="#reality">СИТУАЦИЯ</a><a href="#change">РЕЗУЛЬТАТ</a><a href="#work">РАБОТА</a><a href="#exit">АНКЕТА</a></nav>
      <a className="br-call" href="#exit">Обсудить запуск <span>↓</span></a>
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
        <p className="hero-eyebrow">Продюсерское агентство Telegram-продуктов</p>
        <h1 id="hero-title"><span className="hero-title-line" data-text="Запуски">Запуски</span><span className="hero-title-line" data-text="в Telegram">в Telegram</span></h1>
        <p className="hero-lead">Превращаем вашу экспертизу и аудиторию в продукт и продажи. Собираем стратегию, оффер, прогрев, воронку и сам запуск — одной командой.</p>
        <div className="hero-cta-row"><a className="hero-main-cta" href="#change"><span>Посмотреть кейсы</span><i>↓</i></a></div>
      </div>
      <img className="hero-foreground" src="/hero-backrooms-v2.png" alt="" aria-hidden="true" />
      <div className="fluorescent f-one"/><div className="fluorescent f-two"/>
    </section>

    <section className="story-scene" id="reality">
      <img src="/telegram-workspace-v1.png" alt="Рабочее место автора Telegram-канала"/>
      <div className="scene-shade"/>
      <header><p className="br-label">01 / УЗНАЁТЕ СЕБЯ?</p><h2>Экспертиза есть.<br/>Запускать — некому.</h2></header>
      <div className="scene-notes">
        <article><span>ИДЕЯ</span><strong>Продукт хочется запустить, но неясно какой</strong><p>Экспертизы много, а понятного результата, формата и предложения для аудитории пока нет.</p></article>
        <article><span>КОНТЕНТ</span><strong>Канал живёт отдельно от продаж</strong><p>Посты выходят, но не ведут читателя к продукту и не формируют спрос до старта.</p></article>
        <article><span>ЗАПУСК</span><strong>Вся операционка остаётся на вас</strong><p>Нужно одновременно создавать продукт, писать прогрев, управлять командой и следить за продажами.</p></article>
      </div>
      <p className="scene-conclusion">Мы входим как продюсерская команда: превращаем экспертизу в продукт, собираем стратегию запуска, готовим аудиторию и ведём проект до продаж.</p>
    </section>

    <section className="cases-section" id="change">
      <header className="cases-heading"><h2>Кейсы</h2></header>
      <div className="cases-grid">
        {cases.map((item)=><article className="case-card" key={item.n}>
          <figure><img src={item.image} alt={item.alt}/><span className="case-scan" aria-hidden="true"/></figure>
          <div className="case-copy">
            <div className="case-identity"><span>Кейс {item.n}</span><h3>{item.title}</h3></div>
            <div className="case-details"><p className="case-description">{item.description}</p><dl className="case-results"><div><dt>Длительность</dt><dd>{item.duration}</dd></div><div><dt>Участники</dt><dd>{item.participants}</dd></div><div><dt>Средний чек</dt><dd>{item.check}</dd></div></dl></div>
          </div>
        </article>)}
      </div>
    </section>

    <section className="work-story" id="work">
      <div className="work-story-copy">
        <p className="br-label">03 / КАК МЫ СОБИРАЕМ ЗАПУСК</p>
        <h2>Берём запуск<br/>под ключ.</h2>
        <p className="work-intro">Вы даёте экспертизу и участвуете в ключевых решениях. Мы превращаем её в продукт, ведём проект от идеи до продаж и собираем систему для следующих запусков.</p>
        <ol>{work.map((item)=><li key={item.n}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
      </div>
      <figure className="system-map">
        <img src="/editorial-wall-v1.png" alt="Карта запуска Telegram-продукта"/>
        <figcaption><span>СИСТЕМА ЗАПУСКА / ВИД ИЗНУТРИ</span><strong>Продукт, контент, дедлайны, продажи и цифры собраны в одной карте.</strong></figcaption>
        <button className="map-point point-a" type="button"><b>01</b><small>оффер продукта</small></button>
        <button className="map-point point-b" type="button"><b>02</b><small>сценарий прогрева</small></button>
        <button className="map-point point-c" type="button"><b>03</b><small>точки продаж</small></button>
      </figure>
    </section>

    <section className="proof-strip">
      <p className="br-label">04 / ЧТО ВЫ ПОЛУЧАЕТЕ</p>
      <div><article><span>01</span><strong>Продукт с ясным результатом</strong><p>Понятно, для кого он, какую задачу решает и за что платит клиент.</p></article><article><span>02</span><strong>Стратегия запуска</strong><p>Цели, экономика, этапы, сроки и ответственность команды.</p></article><article><span>03</span><strong>Прогрев и воронка</strong><p>Контент и точки касания, которые последовательно ведут к покупке.</p></article><article><span>04</span><strong>Управление продажами</strong><p>Запуск, аналитика и решения, которые усиливают следующий цикл.</p></article></div>
    </section>

    <section className="formats-story" id="formats">
      <header><p className="br-label">05 / С ЧЕМ МОЖЕМ ПОМОЧЬ</p><h2>Выберите<br/>дверь.</h2><p>Три сценария: стать вашей продюсерской командой, собрать один запуск под ключ или бесплатно определить лучшую точку входа.</p></header>
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
      <header className="brief-heading"><p className="br-label">06 / НАЧАТЬ РАЗГОВОР</p><h2>Расскажите<br/>о проекте.</h2><p>Пять коротких ответов. Разберём вашу точку А и предложим следующий шаг к запуску.</p></header>
      <ProjectBrief/>
      <footer><span>Агентство Нас#лия © 2026</span><span>Артём Бутов × Артём Федонко</span><a href="#top">Наверх ↑</a></footer>
    </section>
  </main>;
}
