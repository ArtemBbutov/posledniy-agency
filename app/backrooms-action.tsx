"use client";

export function BackroomsAction() {
  const enterServices = () => {
    document.querySelector("#floor-02")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <button className="what-we-do" type="button" onClick={enterServices} aria-label="Посмотреть, какие задачи решает агентство">
    <span>Что мы решаем?</span><i aria-hidden="true">ВЫБРАТЬ ВХОД&nbsp; →</i>
  </button>;
}
