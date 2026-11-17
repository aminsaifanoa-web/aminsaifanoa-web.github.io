"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789<>/\\[]{}#$*+=-%&@";

interface Props {
  text: string;
  className?: string;
  /** ms between character locks */
  stagger?: number;
  /** ms before the scramble starts */
  delay?: number;
}

/** Terminal decode: characters glitch through katakana/hex, then lock in
 *  left to right. Static under prefers-reduced-motion. SSR-safe — renders
 *  the real text first, glitches client-side after hydration. */
export default function DecryptText({ text, className, stagger = 30, delay = 0 }: Props) {
  const [out, setOut] = useState(text);
  const rafRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = [...text];
    const locks = chars.map((_, i) => delay + i * stagger + Math.random() * stagger);
    const total = Math.max(...locks) + 200;
    let start = 0;

    const tick = (t: number) => {
      if (!start) start = t;
      const el = t - start;
      if (el < delay) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      let s = "";
      for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (c === " " || el >= locks[i]) s += c;
        else s += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setOut(s);
      if (el < total) rafRef.current = requestAnimationFrame(tick);
    };

    const kick = window.setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, 30);

    return () => {
      window.clearTimeout(kick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [text, stagger, delay]);

  return (
    <span className={className}>
      <span aria-hidden="true">{out}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
