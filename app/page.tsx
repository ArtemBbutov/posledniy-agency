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
        <a className="wordmark" href="#top"><b>АН</b><span>продюсерское<br/>агентство</span></a>
        <nav aria-label="Основная навигация"><a href="#directions">Направления</a><a href="#services">Услуги</a><a href="#contact">Контакты</a></nav>
        <a className="nav-contact" href="#contact">Обсудить проект <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-title">
          <p className="eyebrow">Артём Бутов × Артём Федонко / 2026</p>
          <h1><span>Агентство</span><em>насилия</em></h1>
          <div className="hero-bottom">
            <p>Строим Telegram-каналы, вокруг которых растут аудитория, доверие и запуски.</p>
            <a className="button light" href="#contact">Обсудить канал <span>↗</span></a>
          </div>
        </div>
        <div className="room-card" aria-label="Фирменный образ агентства — комната идей">
          <div className="room-top"><span>КАНАЛ / 00</span><span>АВТОР В ЭФИРЕ</span></div>
          <div className="wall left-wall"><i className="scribble s1">★</i><i className="scribble s2">идея →</i><i className="scribble s3">☺</i><i className="scribble s4">×</i></div>
          <div className="wall right-wall"><div className="door"><span>ВХОД<br/>В КАНАЛ</span><i/></div><i className="scribble s5">не посты.<br/>система.</i></div>
          <div className="floor"><div className="chair"><i/><i/><i/><i/></div></div>
          <p className="room-quote">Канал должен говорить<br/>голосом автора.</p>
        </div>
      </section>

      <section className="intro">
        <p className="label">01 / Кто мы</p>
        <div className="intro-copy"><h2>Не просто<br/>пишем посты.</h2><p>Мы превращаем экспертизу и личность автора в понятное медиа. Канал становится местом, где аудитория знакомится, остаётся, доверяет — и покупает во время запуска.</p></div>
        <div className="ticker" aria-label="Виды работ"><span>ПОЗИЦИОНИРОВАНИЕ</span><i>✳</i><span>КОНТЕНТ</span><i>✳</i><span>РОСТ</span><i>✳</i><span>ЗАПУСК</span></div>
      </section>

      <section className="directions" id="directions">
        <div className="section-heading"><p className="label">02 / С чем работаем</p><h2>Канал как<br/><em>точка роста.</em></h2><p>Подключаемся на нужном этапе: создаём с нуля, перезапускаем или берём всё продюсирование на себя.</p></div>
        <div className="direction-grid">
          {directions.map((item) => <article key={item.n}><div className="card-top"><span>{item.n}</span><i>{item.tag}</i></div><h3>{item.title}</h3><p>{item.text}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro"><p className="label">03 / Полный цикл</p><h2>От первого поста<br/>до запуска.</h2><p>Можно зайти с отдельной задачей или передать нам канал целиком. На каждом этапе понятно, что делаем, за какие цифры смотрим и к какому результату идём.</p></div>
        <div className="service-stack">{services.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="principles">
        <p className="label">04 / Как работаем</p>
        <h2>Канал — это<br/>не лента постов.</h2>
        <div className="principle-grid"><article><span>01</span><h3>Сначала автор</h3><p>Достаём настоящую интонацию и экспертизу. Не превращаем человека в безликий «полезный блог».</p></article><article><span>02</span><h3>Потом система</h3><p>У канала появляются рубрики, ритм, редакционный процесс и понятные точки роста.</p></article><article><span>03</span><h3>После — запуск</h3><p>Продажи становятся продолжением контента и отношений с аудиторией, а не внезапной рекламной атакой.</p></article></div>
      </section>

      <section className="contact" id="contact">
        <p className="label">05 / Контакт</p><div className="contact-grid"><h2>Есть канал?<br/><em>Запускаем.</em></h2><div><p>Расскажите о себе, своём канале и продукте, который хотите запустить. Если канала ещё нет — это тоже нормальная точка старта.</p><a className="button dark" href="mailto:hello@posledniy.agency">hello@posledniy.agency <span>↗</span></a></div></div>
        <footer><span>Агентство насилия © 2026</span><span>Бутов × Федонко</span><a href="#top">Наверх ↑</a></footer>
      </section>
    </main>
  );
}
