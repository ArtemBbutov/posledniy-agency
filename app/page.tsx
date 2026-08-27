import { ProjectBrief } from "./project-brief";
import { SiteInteractions } from "./site-interactions";

const cases = [
  { n: "01", image: "/case-wake-up-backrooms.png", alt: "Проект WAKE UP на терминале в пространстве Backrooms", tag: "ЗАКРЫТОЕ СООБЩЕСТВО", title: "WAKE UP", check: "4 000 ₽", purchases: "187" },
  { n: "02", image: "/case-wake-up-empire-backrooms.png", alt: "Проект Wake Up Empire 2.0 в архиве Backrooms", tag: "TELEGRAM-КАНАЛ", title: "Wake Up Empire 2.0", check: "4 990 ₽", purchases: "134" },
  { n: "03", image: "/case-100k-backrooms.png", alt: "Проект 100.000₽ с нуля на развилке Backrooms", tag: "МАРАФОН", title: "100.000₽ с нуля", check: "1 750 ₽", purchases: "155" },
];

const work = [
  { n: "01", title: "Находим сильную позицию", text: "Понимаем, за чем к вам должны возвращаться и почему канал нельзя заменить десятком других." },
  { n: "02", title: "Собираем голос и редакцию", text: "Интервьюируем автора, проектируем рубрики, пишем и выпускаем контент без потери интонации." },
  { n: "03", title: "Приводим нужную аудиторию", text: "Планируем посевы и коллаборации, считаем не только подписчиков, но и качество внимания." },
  { n: "04", title: "Связываем канал с продуктом", text: "Готовим предложение и прогрев так, чтобы продажа продолжала разговор, а не ломала его." },
];

export default function Home() {
  return <main id="top" className="backrooms-site authentic-backrooms story-site">
    <SiteInteractions/>
    <header className="br-nav">
      <a className="br-logo" href="#top"><b>А#</b><span>АГЕНСТВО НАС#ЛИЯ<br/>TELEGRAM PRODUCTION</span></a>
      <nav aria-label="Навигация по разделам"><a href="#reality">СИТУАЦИЯ</a><a href="#change">РЕЗУЛЬТАТ</a><a href="#work">РАБОТА</a><a href="#exit">АНКЕТА</a></nav>
      <a className="br-call" href="#exit">Обсудить канал <span>↓</span></a>
    </header>

    <section className="br-hero br-level" aria-labelledby="hero-title">
      <img className="br-hero-image" src="/hero-backrooms-v2.png" alt="Тёмный бесконечный этаж Backrooms" />
      <div className="br-hero-shade" />
      <div className="hero-depth-lens" aria-hidden="true" />
      <div className="hero-story-copy">
        <p className="hero-eyebrow">Продюсерское агентство</p>
        <h1 id="hero-title"><span>Продюсирование</span><span>телеграм-каналов</span></h1>
        <p className="hero-lead">Стратегия, контент, выпуск, продвижение и запуски — одной командой. Автор сохраняет голос и не живёт в операционке.</p>
        <div className="hero-cta-row"><a className="hero-main-cta" href="#change"><span>Посмотреть кейсы</span><i>↓</i></a></div>
      </div>
      <div className="fluorescent f-one"/><div className="fluorescent f-two"/>
    </section>

    <section className="story-scene" id="reality">
      <img src="/telegram-workspace-v1.png" alt="Рабочее место автора Telegram-канала"/>
      <div className="scene-shade"/>
      <header><p className="br-label">01 / УЗНАЁТЕ СЕБЯ?</p><h2>Канал снова<br/>остался на вечер.</h2></header>
      <div className="scene-notes">
        <article><span>18:40</span><strong>Нужно придумать, о чём писать завтра</strong><p>Контент каждый раз начинается с пустого листа.</p></article>
        <article><span>21:15</span><strong>Редактор ждёт комментарий</strong><p>Без автора производство останавливается.</p></article>
        <article><span>ЗАПУСК</span><strong>Продукт готов, аудитория — нет</strong><p>Продажу приходится резко вставлять между обычными постами.</p></article>
      </div>
      <p className="scene-conclusion">Мы нужны не потому, что вам некому написать пост. Мы нужны, когда Telegram должен стать самостоятельным медиа и частью бизнеса.</p>
    </section>

    <section className="cases-section" id="change">
      <header className="cases-heading"><h2>Кейсы</h2></header>
      <div className="cases-grid">
        {cases.map((item)=><article className="case-card" key={item.n}>
          <figure><img src={item.image} alt={item.alt}/><span className="case-scan" aria-hidden="true"/></figure>
          <div className="case-copy"><div className="case-identity"><span>Кейс {item.n}</span><h3>{item.title}</h3></div><dl className="case-results"><div><dt>Средний чек</dt><dd>{item.check}</dd></div><div><dt>Покупки</dt><dd>{item.purchases}</dd></div></dl></div>
        </article>)}
      </div>
    </section>

    <section className="work-story" id="work">
      <div className="work-story-copy">
        <p className="br-label">03 / ЧТО ИМЕННО ДЕЛАЕМ</p>
        <h2>Собираем канал<br/>как продукт.</h2>
        <p className="work-intro">Каждый этап заканчивается не созвоном и словами, а материалом, который остаётся у проекта.</p>
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

    <section className="proof-strip">
      <p className="br-label">04 / ЧТО ВЫ ПОЛУЧАЕТЕ</p>
      <div><article><span>01</span><strong>Позиция канала</strong><p>Кому, о чём и почему именно вас читать.</p></article><article><span>02</span><strong>Редакция под ключ</strong><p>Темы, тексты, визуал, выпуск и контроль качества.</p></article><article><span>03</span><strong>Система роста</strong><p>Посевы, партнёрства, аналитика и корректировки.</p></article><article><span>04</span><strong>Запуски продуктов</strong><p>Оффер, прогрев, путь к покупке и разбор цикла.</p></article></div>
    </section>

    <section className="formats-story" id="formats">
      <header><p className="br-label">05 / КАК МОЖНО НАЧАТЬ</p><h2>Сначала задача.<br/>Потом формат.</h2><p>Не заставляем выбирать тариф вслепую. Определяем, что сейчас сильнее всего мешает каналу, и собираем подходящий объём работы.</p></header>
      <div className="format-lines">
        <article><span>РАЗОВО</span><div><h3>Стратегия и запуск редакции</h3><p>Для нового канала или перезапуска существующего.</p></div><strong>от 60 000 ₽</strong></article>
        <article><span>ЕЖЕМЕСЯЧНО</span><div><h3>Полное продюсирование</h3><p>Редакция, рост и управление каналом одной командой.</p></div><strong>от 120 000 ₽ / мес.</strong></article>
        <article><span>ПРОЕКТНО</span><div><h3>Запуск продукта через Telegram</h3><p>От предложения и контента до запуска и аналитики.</p></div><strong>после диагностики</strong></article>
      </div>
    </section>

    <section className="br-level brief-level" id="exit">
      <header className="brief-heading"><p className="br-label">06 / НАЧАТЬ РАЗГОВОР</p><h2>Расскажите<br/>о канале.</h2><p>Пять коротких ответов. Посмотрим проект и предложим, с чего лучше начать.</p></header>
      <ProjectBrief/>
      <footer><span>Агенство Нас#лия © 2026</span><span>Артём Бутов × Артём Федонко</span><a href="#top">Наверх ↑</a></footer>
    </section>
  </main>;
}
