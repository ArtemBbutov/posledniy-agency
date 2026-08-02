const directions = [
  { n: "01", title: "Авторские проекты", text: "Находим сильную основу, упаковываем голос автора и превращаем его в проект, который можно развивать сезонами.", tag: "личность → медиа" },
  { n: "02", title: "Шоу и спецпроекты", text: "Придумываем механику, драматургию и визуальный мир. Собираем производство и ведём до премьеры.", tag: "идея → формат" },
  { n: "03", title: "Контент для брендов", text: "Делаем не рекламную вставку, а историю, которую аудитория действительно захочет досмотреть и переслать.", tag: "бренд → внимание" },
  { n: "04", title: "Перезапуск медиа", text: "Разбираем, что уже есть, находим новый угол и собираем понятную систему контента без бесконечной гонки публикаций.", tag: "хаос → система" },
];

const services = [
  ["Стратегия", "Позиционирование, аудитория, идея и план развития"],
  ["Креатив", "Концепция, название, механика и визуальный язык"],
  ["Продакшн", "Команда, смета, съёмка, монтаж и контроль качества"],
  ["Запуск", "Упаковка, дистрибуция, партнёрства и сопровождение"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="nav">
        <a className="wordmark" href="#top"><b>АН</b><span>продюсерское<br/>агентство</span></a>
        <nav aria-label="Основная навигация"><a href="#directions">Направления</a><a href="#services">Услуги</a><a href="#team">Команда</a></nav>
        <a className="nav-contact" href="#contact">Обсудить проект <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-title">
          <p className="eyebrow">Артём Бутов × Артём Федонко / 2026</p>
          <h1><span>Агентство</span><em>насилия</em></h1>
          <div className="hero-bottom">
            <p>Продюсируем людей, идеи и форматы, которым тесно в готовых шаблонах.</p>
            <a className="button light" href="#contact">Принести идею <span>↗</span></a>
          </div>
        </div>
        <div className="room-card" aria-label="Фирменный образ агентства — комната идей">
          <div className="room-top"><span>КОМНАТА / 00</span><span>ИДЕЯ ПОД ДАВЛЕНИЕМ</span></div>
          <div className="wall left-wall"><i className="scribble s1">★</i><i className="scribble s2">идея →</i><i className="scribble s3">☺</i><i className="scribble s4">×</i></div>
          <div className="wall right-wall"><div className="door"><span>ВХОД<br/>В ПРОЕКТ</span><i/></div><i className="scribble s5">не декор.<br/>система.</i></div>
          <div className="floor"><div className="chair"><i/><i/><i/><i/></div></div>
          <p className="room-quote">Хорошая идея должна<br/>выдержать давление.</p>
        </div>
      </section>

      <section className="intro">
        <p className="label">01 / Кто мы</p>
        <div className="intro-copy"><h2>Не подрядчик<br/>на один ролик.</h2><p>Мы входим в проект как партнёры: задаём неудобные вопросы, собираем нужных людей и держим замысел целиком — от первой строчки до реакции аудитории.</p></div>
        <div className="ticker" aria-label="Виды работ"><span>ИДЕЯ</span><i>✳</i><span>СТРАТЕГИЯ</span><i>✳</i><span>ПРОИЗВОДСТВО</span><i>✳</i><span>ЗАПУСК</span></div>
      </section>

      <section className="directions" id="directions">
        <div className="section-heading"><p className="label">02 / Что запускаем</p><h2>Форматы,<br/><em>которые живут.</em></h2><p>Не продаём заранее собранный пакет. Выбираем форму под задачу, человека и аудиторию.</p></div>
        <div className="direction-grid">
          {directions.map((item) => <article key={item.n}><div className="card-top"><span>{item.n}</span><i>{item.tag}</i></div><h3>{item.title}</h3><p>{item.text}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro"><p className="label">03 / Полный цикл</p><h2>Собираем<br/>проект целиком.</h2><p>Можно зайти с одной задачей или пройти вместе весь путь. На каждом этапе понятно, что происходит, кто отвечает и какой результат должен появиться.</p></div>
        <div className="service-stack">{services.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="principles">
        <p className="label">04 / Как работаем</p>
        <h2>Без магии.<br/>С вниманием.</h2>
        <div className="principle-grid"><article><span>01</span><h3>Сначала смысл</h3><p>Не начинаем с камеры, логотипа или тренда. Сначала понимаем, зачем проект должен существовать.</p></article><article><span>02</span><h3>Одна команда</h3><p>Не перекидываем задачу между случайными подрядчиками. Собираем состав под конкретную идею.</p></article><article><span>03</span><h3>До результата</h3><p>Не исчезаем после съёмки. Упаковываем запуск, смотрим реакцию и решаем, что делать дальше.</p></article></div>
      </section>

      <section className="team" id="team">
        <div className="team-head"><p className="label">05 / Команда</p><h2>Два Артёма.<br/>Одна ответственность.</h2></div>
        <div className="team-grid">
          <article><div className="person-mark"><span>АБ</span><i>идея / стратегия</i></div><div><p>Сооснователь, продюсер</p><h3>Артём<br/>Бутов</h3><p>Отвечает за направление, концепцию и то, чтобы проект было невозможно спутать с другим.</p></div></article>
          <article><div className="person-mark alt"><span>АФ</span><i>люди / производство</i></div><div><p>Сооснователь, продюсер</p><h3>Артём<br/>Федонко</h3><p>Отвечает за команду, производство и то, чтобы сильная идея стала реальным результатом.</p></div></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="label">06 / Контакт</p><div className="contact-grid"><h2>Есть идея?<br/><em>Давите.</em></h2><div><p>Расскажите, что хотите запустить, изменить или наконец довести до конца. Можно без идеального брифа — начнём с разговора.</p><a className="button dark" href="mailto:hello@posledniy.agency">hello@posledniy.agency <span>↗</span></a></div></div>
        <footer><span>Агентство насилия © 2026</span><span>Бутов × Федонко</span><a href="#top">Наверх ↑</a></footer>
      </section>
    </main>
  );
}
