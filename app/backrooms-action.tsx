"use client";

let activeAudio: HTMLAudioElement | null = null;
let stopTimer: number | null = null;

function stopCurrentSequence() {
  if (stopTimer !== null) window.clearTimeout(stopTimer);
  stopTimer = null;
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }
  activeAudio = null;
}

function playSequence() {
  stopCurrentSequence();

  const meme = new Audio("/meme-phrase.mp4");
  const song = new Audio("/agency-intro.mp3");
  meme.preload = "auto";
  song.preload = "auto";
  activeAudio = meme;

  const playSongIntro = () => {
    activeAudio = song;
    song.currentTime = 0;
    void song.play().then(() => {
      stopTimer = window.setTimeout(() => {
        song.pause();
        song.currentTime = 0;
        activeAudio = null;
        stopTimer = null;
      }, 5000);
    }).catch(() => undefined);
  };

  meme.addEventListener("ended", playSongIntro, { once: true });
  void meme.play().catch(playSongIntro);
}

export function BackroomsAction() {
  const enterServices = () => {
    playSequence();
    window.setTimeout(() => {
      document.querySelector("#floor-02")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 190);
  };

  return <button className="what-we-do" type="button" onClick={enterServices} aria-label="Узнать, чем занимается агентство">
    <span>Чем мы занимаемся?</span><i aria-hidden="true">ОТКРЫТЬ ДВЕРЬ&nbsp; →</i>
  </button>;
}
