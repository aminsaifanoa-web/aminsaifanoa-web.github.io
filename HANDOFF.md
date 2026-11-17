# Handoff — amin-site (Next.js personal site)

**Project:** `C:\Users\tooth\Downloads\amin-site` — Next.js 15 + TypeScript personal site for Amin Ali Saifan. Design goal: "CIA dossier meets matrix" — phosphor green on black, sharp/zero rounded edges, factual content only.

## Done
- Matrix skin (tokens, scanlines, digital-rain hero `MatrixRain.tsx`, decode effect `DecryptText.tsx`), wire tunnel `WireWeb.tsx` (scroll-driven glowing rail, 90° elbows into sections), one-shot CRT sweep.
- Merged About + Pitch into `AboutAndPitch.tsx` (thesis box: 45% → 100% screen time). Ventures cut to 3 (Illustra, Smart Glasses self-safety face-rec danger ping, Robotics & sensor fusion) in `lib/ventures.ts`. Beyond → `DossierCollection.tsx` (4 cards; podcast named "In Pursuit of the Matrix" with dummy `Listen ↗︎` → `#`). Credit-stress-testing removed.
- Round 6 (latest, built + DOM-audited, NOT pushed): ticker → "CLASSIFIED // PERSONAL FILE" strip; "Hi again" removed; dry unhinged copy pass (facts untouched); all remaining radii → 0 (nav pills, round-button, contact-circle, stamp, scrollbar, chips, status, ucl-badge).
- Build green (`npx next build`, 106 kB first load). `gh` CLI authed as `aminsaifanoa-web` (repo scope).

## Pending (in order)
1. **Remove the ticker banner entirely** (`components/Ticker.tsx` + its render in `app/page.tsx` + `.ticker*` CSS).
2. **Merge Ventures + Dossiers into ONE section "Projects and Experience"**: a grid of file-style cards you can tap to read more (ventures keep `<details>` story + action link; dossiers keep note + link). Delete `Ventures.tsx`, `DossierCollection.tsx`, `venture-stages.tsx` (plates/SVG stages go too); new data in `lib/` (keep `ventures.ts`, add `dossiers.ts` or merge). Update nav (`SiteHeader.tsx`), hero CTA `#ventures` → new id, section CSS.
3. **Add accolades list** into that combined section (facts only: CP Tanner Academic Scholar, Cambridge Startup Competition 3rd, BPHO Computational Physics Gold, SAT 1530, published author/SSRN).
4. **Strip quirky marginia**: hero "case note —/psych eval —" notes (`Hero.tsx` + `.hero-note` CSS), `.about-doodles` ("currently reading"), `.wave` ✳ next to heading, `about-card-mark`, `hand-star`, `tiny-star`, `foot-star`, dossier glyphs (☁︎ (((◉))) ✳ ➸), `.ventures-background` doodles + `@keyframes spin`.
5. Update `WireWeb.tsx` TARGETS to the new cards (it uses `querySelector` per selector — expand multi-match or enumerate).
6. Rebuild, re-audit (see QA), then **deploy**: static export (`output: "export"` in `next.config.ts` → `out/`), copy `out/*` + `.nojekyll` to a clean clone of `github.com/aminsaifanoa-web/aminsaifanoa-web.github.io`, push to `main` (Pages serves root of main); push full source to a `source` branch. Verify `https://aminsaifanoa-web.github.io/` after a few minutes.

## Rules
- No invented facts/stats. `lib/profile.ts`: email stays `""`, podcast.url stays `""` until user pastes one. Keep a11y: reduced-motion paths, sr-only real text, focus rings, contrast.
- Rebuild cycle: kill port 3000 listener → `npx next build` → `npm start` (bg) → hard-navigate tab (`?v=x`) or stale bundle fools you.

## QA quirks (embedded browser)
- Hidden tab wedges smooth scroll: set `document.documentElement.style.scrollBehavior="auto"` + `tabs.focus` before scroll asserts/screenshots.
- Code Mode `execute` has no outer `setTimeout` — wrap waits inside the evaluate script string.
- Wire rebuilds 600 ms after load (settle timer); don't assert geometry earlier.

## Key files
`app/page.tsx`, `app/globals.css` (all styling, ~950 lines), `components/{Hero,AboutAndPitch,Ventures,DossierCollection,Ticker,WireWeb,SiteHeader,Contact,MatrixRain,DecryptText}.tsx`, `lib/{profile,ventures}.ts`, `DESIGN-NOTES.md` (append a round entry when done), `README.md`.
