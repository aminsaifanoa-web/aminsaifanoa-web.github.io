"use client";

import { useEffect, useRef } from "react";

const TARGET_SELECTORS = [".about .about-card", ".project-file", ".contact .contact-bottom"];
const NODE_COUNT = 11;
const SAMPLE_STEP = 4;

export default function WireWeb() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const railRef = useRef<SVGPathElement | null>(null);
  const litRef = useRef<SVGPathElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const main = document.querySelector("main");
    const svg = svgRef.current;
    const rail = railRef.current;
    const lit = litRef.current;
    const dot = dotRef.current;
    if (!main || !svg || !rail || !lit || !dot) return;

    let totalLen = 0;
    let sampleY: number[] = [];
    let nodeLens: number[] = [];
    let mainTop = 0;
    let raf = 0;

    const update = () => {
      if (!totalLen || !sampleY.length) return;
      const targetY = window.scrollY + window.innerHeight * 0.55;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const atBottom = window.scrollY >= maxScroll - 2;
      let lo = 0, hi = sampleY.length - 1, idx = 0;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (sampleY[mid] <= targetY) { idx = mid; lo = mid + 1; } else hi = mid - 1;
      }
      const litLen = atBottom ? totalLen : Math.min(idx * SAMPLE_STEP, totalLen);
      lit.style.strokeDashoffset = `${totalLen - litLen}`;
      const point = rail.getPointAtLength(litLen);
      dot.style.transform = `translate3d(${point.x - 4.5}px, ${point.y - 4.5}px, 0)`;
      nodeRefs.current.forEach((node, i) => node?.classList.toggle("lit", nodeLens[i] <= litLen + 2));
    };

    const build = () => {
      const mainRect = main.getBoundingClientRect();
      mainTop = mainRect.top + window.scrollY;
      svg.setAttribute("width", String(Math.round(mainRect.width)));
      svg.setAttribute("height", String(Math.round(mainRect.height)));
      svg.setAttribute("viewBox", `0 0 ${Math.round(mainRect.width)} ${Math.round(mainRect.height)}`);
      const grid = document.querySelector(".experience-grid");
      const gutter = grid ? grid.getBoundingClientRect().left : 100;
      const sx = Math.min(64, Math.max(24, Math.round(gutter * 0.44)));
      const hero = document.querySelector(".hero");
      const startY = hero ? hero.getBoundingClientRect().bottom + window.scrollY - 60 : 200;
      const targets = TARGET_SELECTORS.flatMap((selector) => Array.from(document.querySelectorAll(selector)));
      const points = targets.map((element) => {
        const rect = element.getBoundingClientRect();
        return { x: rect.left - 3, y: rect.top + window.scrollY + rect.height / 2 };
      });
      if (!points.length) return;
      let path = `M ${sx} ${Math.round(startY)}`;
      points.forEach((point, index) => {
        const y = Math.round(point.y), x = Math.round(point.x);
        path += ` L ${sx} ${y} L ${x} ${y}`;
        if (index < points.length - 1) path += ` L ${sx} ${y}`;
      });
      rail.setAttribute("d", path);
      lit.setAttribute("d", path);
      totalLen = rail.getTotalLength();
      lit.style.strokeDasharray = `${totalLen}`;
      lit.style.strokeDashoffset = `${totalLen}`;
      sampleY = [];
      for (let length = 0; length <= totalLen; length += SAMPLE_STEP) sampleY.push(rail.getPointAtLength(length).y + mainTop);
      nodeLens = points.map((point) => {
        let best = 0, bestDist = Infinity;
        for (let length = 0; length <= totalLen; length += SAMPLE_STEP) {
          const current = rail.getPointAtLength(length);
          const dy = current.y + mainTop - point.y;
          if (Math.abs(dy) > 6) continue;
          const dist = Math.abs(current.x - point.x) + Math.abs(dy) * 0.3;
          if (dist < bestDist) { bestDist = dist; best = length; }
        }
        return best;
      });
      nodeRefs.current.forEach((node, index) => {
        const point = points[index];
        if (node && point) node.setAttribute("transform", `translate(${Math.round(point.x)}, ${Math.round(point.y - mainTop)})`);
      });
      dot.style.opacity = "1";
      update();
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; update(); });
    };
    let resizeTimer = 0;
    const onResize = () => { window.clearTimeout(resizeTimer); resizeTimer = window.setTimeout(build, 150); };
    build();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.fonts?.ready?.then(build);
    const settle = window.setTimeout(build, 600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      window.clearTimeout(settle);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="wire-web" aria-hidden="true">
      <svg ref={svgRef}>
        <path ref={railRef} className="wire-rail" />
        <path ref={litRef} className="wire-lit" />
        {Array.from({ length: NODE_COUNT }, (_, index) => <g key={index} ref={(node) => { nodeRefs.current[index] = node; }} className="wire-node"><rect x="-5" y="-5" width="10" height="10" transform="rotate(45)" /></g>)}
      </svg>
      <div ref={dotRef} className="wire-dot" />
    </div>
  );
}
