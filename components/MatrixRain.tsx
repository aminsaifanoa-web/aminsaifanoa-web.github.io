"use client";

import { useEffect, useRef } from "react";

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEF<>/\\|[]{}$#*+=-";

/** Digital rain — canvas behind the hero copy, beneath the floating shapes.
 *  DPR-aware, ~20fps terminal cadence, pauses when the tab is hidden,
 *  renders nothing under prefers-reduced-motion. */
export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let cols = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    const fontSize = 16;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(rect.width / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * (rect.height / fontSize));
      speeds = Array.from({ length: cols }, () => 0.4 + Math.random() * 0.8);
      ctx.fillStyle = "#020705";
      ctx.fillRect(0, 0, rect.width, rect.height);
    };

    let last = 0;
    const step = (t: number) => {
      raf = requestAnimationFrame(step);
      if (t - last < 50) return; // ~20fps
      last = t;
      const rect = canvas.getBoundingClientRect();
      if (rect.bottom < 0) return; // hero scrolled away — skip the work
      ctx.fillStyle = "rgba(2, 7, 5, 0.12)";
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.font = `${fontSize}px "Cascadia Mono", Consolas, monospace`;
      for (let i = 0; i < cols; i++) {
        const ch = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = Math.random() < 0.06 ? "#d7ffe2" : "rgba(0, 255, 65, 0.62)";
        ctx.fillText(ch, x, y);
        drops[i] += speeds[i];
        if (y > rect.height && Math.random() > 0.975) drops[i] = 0;
      }
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        last = 0;
        raf = requestAnimationFrame(step);
      }
    };

    resize();
    raf = requestAnimationFrame(step);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="rain-canvas" aria-hidden="true" />;
}
