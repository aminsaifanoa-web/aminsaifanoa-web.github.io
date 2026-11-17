# amin-site handoff

## Current state

The Next.js 15 + TypeScript personal site for Amin Ali Saifan is deployed to GitHub Pages at https://aminsaifanoa-web.github.io/.

- `main` contains the static export and `.nojekyll`.
- `source` contains the complete Next.js source.
- `next.config.ts` uses `output: "export"` and `trailingSlash: true`; `npm run build` writes the site to `out/`.

## Site structure

- Direct typographic hero over a quiet geometric grid; no matrix rain, text decode, or scanline overlay.
- Combined About and Pitch section with two paragraphs: a personal introduction and a forward-looking thesis on moving computation from a pocket screen into the field of vision.
- One Projects and Experience grid with Illustra, APRIL, Outsourced Thinking, Humanized Computing, an Interests card, two Research cards, and the accolades list.
- APRIL is carbon finance research. Project notes describe its four-plot pilot and six-month-to-18-day timeline; the accolades include a $5,000 grant for carbon finance research.
- Podcast title: “Pursuit of 100.”
- Consistent Arial/Helvetica typography, restrained spacing, reduced-motion support, screen-reader text, and visible keyboard focus.

## Profile data still awaiting Amin

- `PROFILE.email` is `realaminsaifan@gmail.com`.
- `PROFILE.podcast.url` remains empty. The podcast card's Listen link remains a placeholder until a real URL is provided.

## Rebuild and deploy

Run `npm ci` and `npm run build`. To publish a new version, copy `out/*` and `.nojekyll` to the root of `main` in `aminsaifanoa-web/aminsaifanoa-web.github.io`, commit, and push. Keep the complete app source on `source`.

## Latest update

- Interests lists skydiving, paragliding, parasailing, stand-up comedy, and flight simulations.
- The About section contains a concise personal blurb and the screen-to-vision thesis. The former 45% to 100% screen-time phrasing is removed.

## Latest content update

- Renamed smart glasses to Outsourced Thinking and described its smart-glasses infrastructure for facial analysis, augmented reality, and personal security.
- Replaced Robotics & sensor fusion with Humanized Computing: human-guided drone swarms through a gamified interface, with human input complementing constrained or costly onboard compute.
- Reframed Pursuit of 100 around roadblocks to humanity's evolution.
- Added Ask me about it mailto actions to Outsourced Thinking and Introduction to Utility Economics; set the contact address to realaminsaifan@gmail.com.
- Recast the screen-to-vision thesis as a positive, human-centered opportunity.
