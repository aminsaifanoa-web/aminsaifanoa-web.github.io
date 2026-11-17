# amin-site

Personal site for Amin Saifan, built with Next.js 15, TypeScript, and React.
The site uses a phosphor-green-on-black dossier design and exports as static files for GitHub Pages.

## Develop

```bash
npm ci
npm run dev
npm run build
```

`npm run build` generates the GitHub Pages site in `out/`.

## Content

- `lib/profile.ts` holds the profile details and links. The podcast URL remains blank until Amin supplies it.
- `lib/ventures.ts` holds the three venture cards and their expandable stories.
- `lib/dossiers.ts` holds the personal project notes and links.

## GitHub Pages deployment

The Pages repository is `aminsaifanoa-web/aminsaifanoa-web.github.io`. Export the site with `npm run build`, copy the contents of `out/` plus a `.nojekyll` file to the root of that repository's `main` branch, then push. Keep the complete Next.js source on the `source` branch.

The custom domain repository name means the site is served from the domain root, so no Next.js `basePath` is needed.
