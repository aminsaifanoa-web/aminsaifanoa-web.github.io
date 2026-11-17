"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement, all in one place:
 *  1. reveal-on-scroll (IntersectionObserver, gated behind a JS-added class)
 *  2. the sticky venture stack: cards ease back / tilt slightly as the next
 *     card slides over them (the reference site's signature scroll effect)
 * Both honour prefers-reduced-motion.
 */
export default function SiteEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // ---- 1. reveal on scroll -------------------------------------------
    const targets = document.querySelectorAll("[data-reveal]");
    let revealObserver: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && !reduced.matches) {
      document.documentElement.classList.add("js-reveal");
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );
      targets.forEach((t) => revealObserver?.observe(t));
    }

    // ---- 2. sticky stack easing ----------------------------------------
    const cards = [...document.querySelectorAll<HTMLElement>(".venture-card")];
    let ticking = false;

    const update = () => {
      ticking = false;
      if (window.innerWidth <= 760 || reduced.matches) {
        cards.forEach((card) => (card.style.transform = ""));
        return;
      }
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const raw =
            (window.innerHeight - next.getBoundingClientRect().top) /
            window.innerHeight,
          progress = Math.min(1, Math.max(0, raw)),
          dir = i % 2 ? 1 : -1;
        card.style.transform = `scale(${1 - progress * 0.033}) rotate(${dir * progress * 0.6}deg)`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      revealObserver?.disconnect();
      document.documentElement.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
