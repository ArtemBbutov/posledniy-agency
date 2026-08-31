"use client";

import { useEffect } from "react";

export function SiteInteractions() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion-ready");

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>([
      ".story-scene header",
      ".scene-notes article",
      ".scene-conclusion",
      ".cases-heading",
      ".case-card",
      ".transformation header > *",
      ".shift-table article",
      ".change-result",
      ".work-story-copy > *",
      ".work-story li",
      ".system-map",
      ".formats-story header > *",
      ".brief-heading > *",
      ".project-brief > *",
      ".brief-level > footer",
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

    const appearanceTargets = Array.from(document.querySelectorAll<HTMLElement>(
      ".format-lines article",
    ));
    appearanceTargets.forEach((element, index) => {
      element.classList.add("appearance-item");
      element.style.setProperty("--appearance-delay", `${Math.min(index % 3, 2) * 70}ms`);
    });
    const appearanceTimers: number[] = [];
    const appearanceObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = Number.parseInt(element.style.getPropertyValue("--appearance-delay"), 10) || 0;
          element.classList.add("is-visible");
          appearanceTimers.push(window.setTimeout(() => element.classList.remove("appearance-item"), delay + 560));
          appearanceObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8%" });
    appearanceTargets.forEach((element) => appearanceObserver.observe(element));

    const selectable = Array.from(document.querySelectorAll<HTMLElement>(".shift-table article, .work-story li"));
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
    const ambient = document.querySelector<HTMLElement>(".site-ambient");
    let ambientEventTimer = 0;
    let ambientResetTimer = 0;
    const scheduleAmbientEvent = () => {
      if (reduceMotion || !ambient) return;
      ambientEventTimer = window.setTimeout(() => {
        if (!document.hidden) {
          const eventClass = Math.random() < .78 ? "is-light-failure" : "is-light-surge";
          ambient.classList.remove("is-light-failure", "is-light-surge");
          void ambient.offsetWidth;
          ambient.classList.add(eventClass);
          ambientResetTimer = window.setTimeout(() => {
            ambient.classList.remove(eventClass);
          }, eventClass === "is-light-failure" ? 520 : 680);
        }
        scheduleAmbientEvent();
      }, 5200 + Math.random() * 9200);
    };
    scheduleAmbientEvent();
    const nav = document.querySelector<HTMLElement>(".br-nav nav");
    const navHeader = nav?.closest<HTMLElement>(".br-nav");
    const navLiquid = nav?.querySelector<HTMLElement>(".nav-liquid");
    const navLiquidCore = nav?.querySelector<HTMLElement>(".nav-liquid-core");
    const navLinks = Array.from(nav?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]') ?? []);
    let activeNavLink = navLinks[0];
    let navIsPointed = false;
    let displayedNavLink: HTMLAnchorElement | undefined;
    let liquidFrame = 0;
    let liquidX = 0;
    let liquidTargetX = 0;
    let liquidVelocity = 0;
    let liquidLastTime = 0;
    let liquidPositioned = false;
    let navScrollLock: HTMLAnchorElement | undefined;
    let navScrollUnlockTimer = 0;
    const renderLiquid = () => {
      if (!navLiquid) return;
      navLiquid.style.transform = `translate3d(${liquidX}px,0,0)`;
      const stretch = 1 + Math.min(Math.abs(liquidVelocity) / 900, .16);
      navLiquidCore?.style.setProperty("transform", `scale3d(${stretch},${1 - (stretch - 1) * .28},1)`);
    };
    const stepLiquid = (time: number) => {
      if (!liquidLastTime) liquidLastTime = time;
      const delta = Math.min((time - liquidLastTime) / 1000, .032);
      liquidLastTime = time;
      const acceleration = (liquidTargetX - liquidX) * 100 - liquidVelocity * 10;
      liquidVelocity += acceleration * delta;
      liquidX += liquidVelocity * delta;
      renderLiquid();
      if (Math.abs(liquidTargetX - liquidX) < .08 && Math.abs(liquidVelocity) < .08) {
        liquidX = liquidTargetX;
        liquidVelocity = 0;
        liquidLastTime = 0;
        liquidFrame = 0;
        renderLiquid();
        return;
      }
      liquidFrame = requestAnimationFrame(stepLiquid);
    };
    const startLiquidSpring = () => {
      if (!liquidFrame) {
        liquidLastTime = 0;
        liquidFrame = requestAnimationFrame(stepLiquid);
      }
    };
    const moveLiquid = (link?: HTMLAnchorElement) => {
      if (!navLiquid || !link) return;
      if (displayedNavLink === link) return;
      displayedNavLink = link;
      liquidTargetX = link.offsetLeft - 5;
      navLiquid.style.opacity = "1";
      navLinks.forEach((item) => item.toggleAttribute("aria-current", item === link));
      if (!liquidPositioned || reduceMotion) {
        liquidX = liquidTargetX;
        liquidVelocity = 0;
        liquidPositioned = true;
        renderLiquid();
      } else startLiquidSpring();
    };
    const updateActiveNav = () => {
      if (navScrollLock) {
        activeNavLink = navScrollLock;
        navHeader?.classList.toggle("is-scrolled", window.scrollY > 72);
        moveLiquid(navScrollLock);
        return;
      }
      const threshold = window.innerHeight * .42;
      const visible = navLinks.filter((link) => {
        const target = document.querySelector<HTMLElement>(link.hash);
        return target && target.getBoundingClientRect().top <= threshold;
      });
      activeNavLink = visible.at(-1) ?? navLinks[0];
      navHeader?.classList.toggle("is-scrolled", window.scrollY > 72);
      if (!navIsPointed) moveLiquid(activeNavLink);
    };
    const navCleanups = navLinks.map((link) => {
      const enter = () => { navIsPointed = true; moveLiquid(link); };
      const click = (event: MouseEvent) => {
        const target = document.querySelector<HTMLElement>(link.hash);
        if (!target) return;
        event.preventDefault();
        navScrollLock = link;
        activeNavLink = link;
        moveLiquid(link);
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", link.hash);
        window.clearTimeout(navScrollUnlockTimer);
        navScrollUnlockTimer = window.setTimeout(() => {
          navScrollLock = undefined;
          updateActiveNav();
        }, reduceMotion ? 80 : 1400);
      };
      link.addEventListener("pointerenter", enter);
      link.addEventListener("focus", enter);
      link.addEventListener("click", click);
      return () => {
        link.removeEventListener("pointerenter", enter);
        link.removeEventListener("focus", enter);
        link.removeEventListener("click", click);
      };
    });
    const resetPointedNav = () => { navIsPointed = false; moveLiquid(activeNavLink); };
    const resetFocusedNav = (event: FocusEvent) => {
      if (!nav?.contains(event.relatedTarget as Node | null)) resetPointedNav();
    };
    nav?.addEventListener("pointerleave", resetPointedNav);
    nav?.addEventListener("focusout", resetFocusedNav);
    const finishNavScroll = () => {
      if (!navScrollLock) return;
      window.clearTimeout(navScrollUnlockTimer);
      navScrollLock = undefined;
      updateActiveNav();
    };
    window.addEventListener("scrollend", finishNavScroll);
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
      appearanceObserver.disconnect();
      appearanceTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(ambientEventTimer);
      window.clearTimeout(ambientResetTimer);
      cleanups.forEach((cleanup) => cleanup());
      navCleanups.forEach((cleanup) => cleanup());
      nav?.removeEventListener("pointerleave", resetPointedNav);
      nav?.removeEventListener("focusout", resetFocusedNav);
      window.removeEventListener("scrollend", finishNavScroll);
      window.clearTimeout(navScrollUnlockTimer);
      cancelAnimationFrame(liquidFrame);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", updateActiveNav);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("resize", updateActiveNav);
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"/>
      <div className="site-ambient" aria-hidden="true">
        <span className="ambient-light ambient-light-a"/>
        <span className="ambient-light ambient-light-b"/>
        <span className="ambient-sweep"/>
        <span className="ambient-dust"/>
      </div>
    </>
  );
}
