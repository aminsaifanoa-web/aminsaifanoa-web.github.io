"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || reduced.matches) return;

    document.documentElement.classList.add("js-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
