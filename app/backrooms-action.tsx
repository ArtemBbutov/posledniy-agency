"use client";

function playDoorSound() {
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.22, now + 0.025);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 0.72);
  master.connect(context.destination);

  const thud = context.createOscillator();
  const thudGain = context.createGain();
  thud.type = "sine";
  thud.frequency.setValueAtTime(82, now);
  thud.frequency.exponentialRampToValueAtTime(38, now + 0.32);
  thudGain.gain.setValueAtTime(0.9, now);
  thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);
  thud.connect(thudGain).connect(master);
  thud.start(now);
  thud.stop(now + 0.4);

  const length = Math.floor(context.sampleRate * 0.65);
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    const decay = Math.pow(1 - i / length, 2.4);
    data[i] = (Math.random() * 2 - 1) * decay;
  }
  const scrape = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const scrapeGain = context.createGain();
  scrape.buffer = buffer;
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(520, now);
  filter.frequency.exponentialRampToValueAtTime(170, now + 0.62);
  filter.Q.value = 1.1;
  scrapeGain.gain.setValueAtTime(0.12, now);
  scrapeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
  scrape.connect(filter).connect(scrapeGain).connect(master);
  scrape.start(now);
  scrape.stop(now + 0.66);

  window.setTimeout(() => void context.close(), 900);
}

export function BackroomsAction() {
  const enterServices = () => {
    playDoorSound();
    window.setTimeout(() => {
      document.querySelector("#floor-02")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 190);
  };

  return <button className="what-we-do" type="button" onClick={enterServices} aria-label="Узнать, чем занимается агентство">
    <span>Чем мы занимаемся?</span><i aria-hidden="true">ОТКРЫТЬ ДВЕРЬ&nbsp; →</i>
  </button>;
}
