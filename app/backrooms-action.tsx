"use client";

export function BackroomsAction() {
  const enterServices = () => {
    document.querySelector("#floor-02")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <button className="what-we-do" type="button" onClick={enterServices} aria-label="Узнать, чем занимается агентство">
    <span>Чем мы занимаемся?</span><i aria-hidden="true">ОТКРЫТЬ ДВЕРЬ&nbsp; →</i>
  </button>;
}
