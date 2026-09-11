const questions = [
  ["Что можно передать вам?", "Контент, сайт и запуск продукта в Telegram. Берём канал целиком или подключаемся к отдельному запуску."],
  ["Что потребуется от меня?", "Ваша экспертиза и обратная связь. Мы превращаем их в посты, упаковку и продажи — с сохранением вашего голоса."],
  ["Сколько стоит работа?", "Продюсирование — от 120 000 ₽ в месяц. Отдельный запуск оценим после знакомства с задачей."],
  ["С чего начнём?", "С бесплатного разбора: посмотрим канал или идею, найдём точки роста и предложим три следующих шага."],
];

export function AgencyFaq() {
  return <section className="agency-faq" id="faq" aria-labelledby="faq-title">
    <header><p className="br-label">06 / ПЕРЕД СТАРТОМ</p><h2 id="faq-title">До первого<br/>созвона.</h2><a href="#exit">Разобрать мой канал ↗</a></header>
    <div className="faq-entries">{questions.map(([question, answer], index) => <details key={question} className="faq-entry">
      <summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><h3>{question}</h3><span className="faq-toggle" aria-hidden="true"/></summary>
      <div className="faq-answer"><p>{answer}</p></div>
    </details>)}</div>
  </section>;
}
