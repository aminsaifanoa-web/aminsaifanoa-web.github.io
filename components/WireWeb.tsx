"use client";

import { useEffect, useRef } from "react";

const TARGET_SELECTORS = [".thesis-box", ".project-file", ".accolades-file"];
const NODE_COUNT = 10;
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
    let targetY: number[] = [];
    let mainTop = 0;
    let raf = 0;

    const update = () => {
      if (!totalLen || !sampleY.length) return;
      const readingY = window.scrollY + window.innerHeight * 0.55;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const atBottom = window.scrollY >= maxScroll - 2;
      let lo = 0, hi = sampleY.length - 1, idx = 0;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (sampleY[mid] <= readingY) { idx = mid; lo = mid + 1; } else hi = mid - 1;
      }
      const litLen = atBottom ? totalLen : Math.min(idx * SAMPLE_STEP, totalLen);
      lit.style.strokeDashoffset = `${totalLen - litLen}`;
      const point = rail.getPointAtLength(litLen);
      dot.style.transform = `translate3d(${point.x - 4.5}px, ${point.y - 4.5}px, 0)`;

      let activeIndex = -1;
      targetY.forEach((y, index) => { if (y <= readingY) activeIndex = index; });
      nodeRefs.current.forEach((node, index) => {
        node?.classList.toggle("lit", nodeLens[index] <= litLen + 2);
      });
      TARGET_SELECTORS.flatMap((selector) => Array.from(document.querySelectorAll(selector)))
        .forEach((target, index) => target.classList.toggle("wire-active", index === activeIndex));
    };

    const build = () => {
      const mainRect = main.getBoundingClientRect();
      mainTop = mainRect.top + window.scrollY;
      svg.setAttribute("width", String(Math.round(mainRect.width)));
      svg.setAttribute("height", String(Math.round(mainRect.height)));
      svg.setAttribute("viewBox", `0 0 ${Math.round(mainRect.width)} ${Math.round(mainRect.height)}`);
      const grid = document.querySelector(".experience-grid");
      const gutter = grid ? grid.getBoundingClientRect().left - mainRect.left : 72;
      const sx = Math.min(64, Math.max(24, Math.round(gutter * 0.44)));
      const hero = document.querySelector(".hero");
      const startY = hero ? hero.getBoundingClientRect().bottom + window.scrollY - 60 - mainTop : 200;
      const targets = TARGET_SELECTORS.flatMap((selector) => Array.from(document.querySelectorAll(selector)));
      const points = targets.map((element) => {
        const rect = element.getBoundingClientRect();
        const y = rect.top + window.scrollY + rect.height / 2 - mainTop;
        return { y, pageY: y + mainTop };
      });
      if (!points.length) return;
      const endY = Math.max(startY, points[points.length - 1].y);
      const path = `M ${sx} ${Math.round(startY)} L ${sx} ${Math.round(endY)}`;
      rail.setAttribute("d", path);
      lit.setAttribute("d", path);
      totalLen = rail.getTotalLength();
      lit.style.strokeDasharray = `${totalLen}`;
      lit.style.strokeDashoffset = `${totalLen}`;
      sampleY = [];
      for (let length = 0; length <= totalLen; length += SAMPLE_STEP) {
        sampleY.push(rail.getPointAtLength(length).y + mainTop);
      }
      nodeLens = points.map((point) => {
        let best = 0, bestDist = Infinity;
        for (let length = 0; length <= totalLen; length += SAMPLE_STEP) {
          const current = rail.getPointAtLength(length);
          const dist = Math.abs(current.y - point.y);
          if (dist < bestDist) { bestDist = dist; best = length; }
        }
        return best;
      });
      targetY = points.map((point) => point.pageY);
      nodeRefs.current.forEach((node, index) => {
        const point = points[index];
        if (node && point) node.setAttribute("transform", `translate(${sx}, ${Math.round(point.y)})`);
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