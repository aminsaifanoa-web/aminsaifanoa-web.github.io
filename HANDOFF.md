# amin-site handoff

## Current state

The Next.js 15 + TypeScript personal site for Amin Ali Saifan is deployed to GitHub Pages at https://aminsaifanoa-web.github.io/.

- `main` contains the static export and `.nojekyll`.
- `source` contains the complete Next.js source.
- `next.config.ts` uses `output: "export"` and `trailingSlash: true`; `npm run build` writes the site to `out/`.

## Site structure

- Direct typographic hero over a quiet geometric grid; no matrix rain, text decode, or scanline overlay.
- Combined About and Pitch section, including the 45% to 100% screen-time thesis.
- One Projects and Experience grid with Illustra, APRIL, smart glasses, robotics and sensor fusion, personal cards, two Research cards, and the accolades list.
- APRIL is carbon finance research. Project notes describe its four-plot pilot and six-month-to-18-day timeline; the accolades include a $5,000 grant for carbon finance research.
- Podcast title: “Pursuit of 100.”
- Consistent Arial/Helvetica typography, restrained spacing, reduced-motion support, screen-reader text, and visible keyboard focus.

## Profile data still awaiting Amin

- `PROFILE.email` remains empty.
- `PROFILE.podcast.url` remains empty. The podcast card's Listen link remains a placeholder until a real URL is provided.

## Rebuild and deploy

Run `npm ci` and `npm run build`. To publish a new version, copy `out/*` and `.nojekyll` to the root of `main` in `aminsaifanoa-web/aminsaifanoa-web.github.io`, commit, and push. Keep the complete app source on `source`.
