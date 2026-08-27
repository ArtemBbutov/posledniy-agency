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
    const nav = document.querySelector<HTMLElement>(".br-nav nav");
    const navLiquid = nav?.querySelector<HTMLElement>(".nav-liquid");
    const navLinks = Array.from(nav?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]') ?? []);
    let activeNavLink = navLinks[0];
    let navIsPointed = false;
    let liquidTimer = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const moveLiquid = (link?: HTMLAnchorElement) => {
      if (!navLiquid || !link) return;
      navLiquid.style.transform = `translate3d(${link.offsetLeft - 5}px,0,0)`;
      navLiquid.style.opacity = "1";
      navLinks.forEach((item) => item.toggleAttribute("aria-current", item === link));
      if (!reduceMotion) {
        window.clearTimeout(liquidTimer);
        navLiquid.classList.add("is-moving");
        liquidTimer = window.setTimeout(() => navLiquid.classList.remove("is-moving"), 180);
      }
    };
    const updateActiveNav = () => {
      const threshold = window.innerHeight * .42;
      const visible = navLinks.filter((link) => {
        const target = document.querySelector<HTMLElement>(link.hash);
        return target && target.getBoundingClientRect().top <= threshold;
      });
      activeNavLink = visible.at(-1) ?? navLinks[0];
      if (!navIsPointed) moveLiquid(activeNavLink);
    };
    const navCleanups = navLinks.map((link) => {
      const enter = () => { navIsPointed = true; moveLiquid(link); };
      const leave = () => { navIsPointed = false; moveLiquid(activeNavLink); };
      const click = (event: MouseEvent) => {
        const target = document.querySelector<HTMLElement>(link.hash);
        if (!target) return;
        event.preventDefault();
        activeNavLink = link;
        moveLiquid(link);
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", link.hash);
      };
      link.addEventListener("pointerenter", enter);
      link.addEventListener("focus", enter);
      link.addEventListener("pointerleave", leave);
      link.addEventListener("blur", leave);
      link.addEventListener("click", click);
      return () => {
        link.removeEventListener("pointerenter", enter);
        link.removeEventListener("focus", enter);
        link.removeEventListener("pointerleave", leave);
        link.removeEventListener("blur", leave);
        link.removeEventListener("click", click);
      };
    });
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maximum = document.documentElement.scrollHeight - window.innerHeight;
        progress?.style.setProperty("--progress", String(maximum > 0 ? window.scrollY / maximum : 0));
      });
    };
    updateProgress();
    updateActiveNav();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("resize", updateActiveNav);

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      navCleanups.forEach((cleanup) => cleanup());
      window.clearTimeout(liquidTimer);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", updateActiveNav);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("resize", updateActiveNav);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"/>;
}
