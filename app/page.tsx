const directions = [
  { n: "01", title: "Канал с нуля", text: "Находим позиционирование, оформляем канал и выстраиваем контент так, чтобы случайный читатель понимал, зачем оставаться.", tag: "эксперт → медиа" },
  { n: "02", title: "Перезапуск канала", text: "Разбираем текущий контент, меняем подачу и собираем систему, которая возвращает внимание и рост.", tag: "хаос → система" },
  { n: "03", title: "Запуск продукта", text: "Проектируем прогрев, предложение и продажи через Telegram — без набора разрозненных постов в последний момент.", tag: "контент → продажи" },
  { n: "04", title: "Продюсирование", text: "Берём канал и запуски под управление: стратегия, редакция, аналитика, команда и движение к следующей точке роста.", tag: "автор → бизнес" },
];

const services = [
  ["Стратегия", "Позиционирование автора, аудитория, продукт и план роста"],
  ["Редакция", "Рубрики, контент-план, тексты, визуал и голос канала"],
  ["Рост", "Дистрибуция, посевы, коллаборации и аналитика аудитории"],
  ["Запуск", "Прогрев, оффер, воронка, продажи и разбор результатов"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="nav">
        <a className="wordmark" href="#top"><b>А#</b><span>Telegram / запуски<br/>уровень 00</span></a>
        <nav aria-label="Основная навигация"><a href="#directions">Направления</a><a href="#services">Услуги</a><a href="#contact">Контакты</a></nav>
        <a className="nav-contact" href="#contact">Обсудить проект <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-title">
          <p className="eyebrow">Артём Бутов × Артём Федонко / 2026</p>
          <h1><span>Агенство</span><em>Нас#лия</em></h1>
          <div className="hero-bottom">
            <p>Строим Telegram-каналы, вокруг которых растут аудитория, доверие и запуски.</p>
            <a className="button light" href="#contact">Обсудить канал <span>↗</span></a>
          </div>
        </div>
        <figure className="room-card" aria-label="Нулевой этаж Агенства Нас#лия">
          <img className="room-image" src="/hero-backrooms.png" alt="Лиминальный офисный этаж с продюсерским столом и планом запуска" />
          <figcaption><span>ЭТАЖ / 00</span><span>ВХОД ОБНАРУЖЕН</span></figcaption>
        </figure>
      </section>

      <section className="intro floor-section floor-one">
        <p className="label">ЭТАЖ 01 / Кто мы</p>
        <div className="intro-copy"><h2>Не просто<br/>пишем посты.</h2><p>Мы превращаем экспертизу и личность автора в понятное медиа. Канал становится местом, где аудитория знакомится, остаётся, доверяет — и покупает во время запуска.</p></div>
        <div className="ticker" aria-label="Виды работ"><span>ПОЗИЦИОНИРОВАНИЕ</span><i>✳</i><span>КОНТЕНТ</span><i>✳</i><span>РОСТ</span><i>✳</i><span>ЗАПУСК</span></div>
      </section>

      <section className="directions floor-section floor-two" id="directions">
        <div className="section-heading"><p className="label">ЭТАЖ 02 / С чем работаем</p><h2>Канал как<br/><em>точка роста.</em></h2><p>Подключаемся на нужном этапе: создаём с нуля, перезапускаем или берём всё продюсирование на себя.</p></div>
        <div className="direction-grid">
          {directions.map((item) => <article key={item.n}><div className="card-top"><span>{item.n}</span><i>{item.tag}</i></div><h3>{item.title}</h3><p>{item.text}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="services floor-section floor-three" id="services">
        <div className="services-intro"><p className="label">ЭТАЖ 03 / Полный цикл</p><h2>От первого поста<br/>до запуска.</h2><p>Можно зайти с отдельной задачей или передать нам канал целиком. На каждом этапе понятно, что делаем, за какие цифры смотрим и к какому результату идём.</p></div>
        <div className="service-stack">{services.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="principles floor-section floor-four">
        <p className="label">ЭТАЖ 04 / Как работаем</p>
        <h2>Канал — это<br/>не лента постов.</h2>
        <div className="principle-grid"><article><span>01</span><h3>Сначала автор</h3><p>Достаём настоящую интонацию и экспертизу. Не превращаем человека в безликий «полезный блог».</p></article><article><span>02</span><h3>Потом система</h3><p>У канала появляются рубрики, ритм, редакционный процесс и понятные точки роста.</p></article><article><span>03</span><h3>После — запуск</h3><p>Продажи становятся продолжением контента и отношений с аудиторией, а не внезапной рекламной атакой.</p></article></div>
      </section>

      <section className="contact floor-section floor-exit" id="contact">
        <p className="label">ВЫХОД / 05</p><div className="contact-grid"><h2>Есть канал?<br/><em>Заходите.</em></h2><div><p>Расскажите о себе, своём канале и продукте, который хотите запустить. Если канала ещё нет — это тоже нормальная точка старта.</p><a className="button dark" href="mailto:hello@posledniy.agency">hello@posledniy.agency <span>↗</span></a></div></div>
        <footer><span>Агенство Нас#лия © 2026</span><span>Бутов × Федонко</span><a href="#top">На этаж 00 ↑</a></footer>
      </section>
    </main>
  );
}
