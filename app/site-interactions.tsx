"use client";

import { useEffect } from "react";

export function SiteInteractions() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>([
      ".story-scene header",
      ".scene-notes article",
      ".scene-conclusion",
      ".transformation header > *",
      ".shift-table article",
      ".change-result",
      ".work-story-copy > *",
      ".work-story li",
      ".system-map",
      ".proof-strip article",
      ".formats-story header > *",
      ".format-lines article",
      ".brief-heading > *",
      ".project-brief > *",
    ].join(",")));

    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: "0px 0px -7%" });
    revealTargets.forEach((element) => observer.observe(element));

    const selectable = Array.from(document.querySelectorAll<HTMLElement>(".shift-table article, .work-story li, .format-lines article"));
    const select = (element: HTMLElement) => {
      element.parentElement?.querySelectorAll(".is-selected").forEach((item) => item.classList.remove("is-selected"));
      element.classList.add("is-selected");
    };
    const cleanups = selectable.map((element) => {
      element.tabIndex = 0;
      const click = () => select(element);
      const key = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(element); }
      };
      element.addEventListener("click", click);
      element.addEventListener("keydown", key);
      return () => { element.removeEventListener("click", click); element.removeEventListener("keydown", key); };
    });

    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maximum = document.documentElement.scrollHeight - window.innerHeight;
        progress?.style.setProperty("--progress", String(maximum > 0 ? window.scrollY / maximum : 0));
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"/>;
}
