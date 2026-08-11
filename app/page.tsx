import { ProjectBrief } from "./project-brief";
import { SiteInteractions } from "./site-interactions";

const shifts = [
  ["Канал держится на вашем настроении", "Редакция работает по понятному ритму"],
  ["Посты выходят, но не складываются в образ", "У канала появляется позиция и узнаваемый голос"],
  ["Запуск начинается внезапно для аудитории", "Контент заранее подводит к продукту"],
  ["Подрядчиков приходится собирать самому", "Один продюсерский контур отвечает за результат"],
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
      <div className="br-status"><span>СЕКТОР TELEGRAM</span><span className="live-dot">ПРИЁМ ПРОЕКТОВ ОТКРЫТ</span></div>
      <div className="br-hero-copy">
        <p>Продюсерское агентство / Бутов × Федонко</p>
        <h1 id="hero-title"><span>Агенство</span><em>Нас#лия</em></h1>
        <div className="br-hero-bottom">
          <div><p>Строим авторские Telegram-каналы, которые интересно читать и из которых естественно покупать.</p><ul className="hero-deliverables"><li>позиция</li><li>контент</li><li>аудитория</li><li>запуск</li></ul></div>
          <a className="story-hero-cta" href="#reality"><span>Узнать, что мы забираем на себя</span><i>↓</i></a>
        </div>
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

    <section className="transformation" id="change">
      <header><p className="br-label">02 / ЧТО МЕНЯЕТСЯ</p><h2>Не больше контента.<br/>Больше смысла в каждом выходе.</h2><p>Мы не продаём пачку постов. Перестраиваем сам способ, которым канал создаётся, растёт и приводит людей к продукту.</p></header>
      <div className="shift-table">
        <div className="shift-head"><span>СЕЙЧАС</span><i/><span>ПОСЛЕ СБОРКИ СИСТЕМЫ</span></div>
        {shifts.map(([before,after], index)=><article key={before}><b>{String(index+1).padStart(2,"0")}</b><p>{before}</p><i>→</i><strong>{after}</strong></article>)}
      </div>
      <aside className="change-result"><span>В ИТОГЕ</span><strong>Автор остаётся автором.</strong><p>Мы забираем планирование, производство, команду, продвижение и подготовку запусков. Вы сохраняете голос и принимаете ключевые решения.</p></aside>
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
      <header className="brief-heading"><p className="br-label">06 / НАЧАТЬ РАЗГОВОР</p><h2>Покажите,<br/>что происходит.</h2><p>Ответьте на шесть коротких вопросов. Мы поймём контекст и предложим первый нормальный шаг — без созвона ради созвона.</p></header>
      <ProjectBrief/>
      <footer><span>Агенство Нас#лия © 2026</span><span>Артём Бутов × Артём Федонко</span><a href="#top">Наверх ↑</a></footer>
    </section>
  </main>;
}
