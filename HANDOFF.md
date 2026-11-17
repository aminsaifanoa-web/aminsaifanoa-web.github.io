# amin-site handoff

## Current state

The Next.js 15 + TypeScript personal site for Amin Ali Saifan is deployed to GitHub Pages at https://aminsaifanoa-web.github.io/.

- `main` contains the static export and `.nojekyll`.
- `source` contains the complete Next.js source.
- `next.config.ts` uses `output: "export"` and `trailingSlash: true`; `npm run build` writes the site to `out/`.

## Site structure

- Matrix hero with digital rain, text decode, scanlines, and one-shot CRT sweep.
- Combined About and Pitch section, including the 45% to 100% screen-time thesis.
- One Projects and Experience grid with three ventures, four personal dossier cards, and the supplied accolades.
- Scroll-driven wire targets the About card, each of the eight file cards, and contact.
- Sharp corners, reduced-motion support, screen-reader text, visible keyboard focus, and factual profile details.

## Profile data still awaiting Amin

- `PROFILE.email` remains empty.
- `PROFILE.podcast.url` remains empty. The podcast card's Listen link remains a placeholder until a real URL is provided.

## Rebuild and deploy

Run `npm ci` and `npm run build`. To publish a new version, copy `out/*` and `.nojekyll` to the root of `main` in `aminsaifanoa-web/aminsaifanoa-web.github.io`, commit, and push. Keep the complete app source on `source`.
