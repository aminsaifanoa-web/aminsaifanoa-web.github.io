# Design system analysis — nakshatrv.com (reference)

Studied live on 2026-11-16: full HTML + stylesheets (`style.css`, `navigation.css`, `mobile.css`)
and interaction scripts (`script.js`, `scene.js`) extracted and read line-by-line.

## Design philosophy

A **tactile personal zine**, not a SaaS portfolio:

- Warm paper base with ink-dark type — feels printed, not rendered.
- **Colour-blocked full-bleed sections**, each with its own personality
  (cream hero → lime ticker band → lavender work section → sage side-quests → paper about → deep-ink contact).
- **Oversized tight-tracked sans type** (Geist, weight 500–800, negative letter-spacing −2…−10 px).
- **Georgia italic annotations** rotated like handwriting in the margins ("a few ideas floating around ⤴︎").
- A **micro-label system**: 7–11 px uppercase letterspaced labels for meta information.
- **Tactile cards**: 1.5 px ink borders, solid offset shadows (`8px 12px 0`), slight rotation,
  stickers with clip-path torn edges, circular prize stamps.
- Playful but disciplined motion: floats, a 70 s marquee, a 60 s star spin, reveal-on-scroll,
  hover lifts — all behind `prefers-reduced-motion` plus a manual pause toggle.

## Layout patterns (reusable)

| Pattern | Implementation |
|---|---|
| Content gutter | `width: min(1100–1200px, calc(100% - 100px)); margin: auto` (100 → 60 → 32 px at breakpoints) |
| Header | 95 px tall; wordmark left, pill-nav right; `scroll-padding-top` matches header height |
| Hero | `height: min(820px, 100svh - 95px)`; centred stack; absolute margin notes; micro-label foot row; floating object layer behind (`pointer-events: none`) |
| Ticker | Full-bleed band rotated −1.5°, duplicated track, `marquee 70s linear infinite`, wrapped in an overflow-hidden shell |
| **Sticky card stack** | Cards `position: sticky; top: calc(28px + var(--i)*17px)` — the signature scroll effect; scroll handler adds per-card `scale`/`rotate` via rAF |
| Project card | border 1.5 px ink, radius 25 px, min-height 580 px, solid offset shadow; internals: meta row → `grid 1fr 1.25fr` (copy \| visual stage) → hairline meta footer |
| About | 3-col grid `.7fr 1.3fr .5fr` (sticker, copy, doodles) |
| Contact | Deep-ink block; huge headline with inline circle-arrow link; links row; copy-email with live status |
| Section decorations | Giant spinning ✳ glyph, orbit rings, vertical background word, doodles — all absolutely positioned, `aria-hidden`, low-contrast |

## Type scale (reference values)

- Wordmark 39 px / 800 / −2.7 px
- H1 `clamp(90px, 10.5vw, 154px)` / 650 / −10 px / lh 0.92
- H2 `clamp(50px, 5.5vw, 76px)` / 550 / −4 px
- Card H3 57 px / 550 / −3 px
- Hook line 19 px / 500; body 13–16 px / 400 / lh 1.6–1.8 in muted ink
- Eyebrow 9 px / 600 / +1.5 px; micro-labels 7–8 px / +0.5–1 px

## Interactions

- Buttons lift `translateY(-3/−4px)`; circle links rotate 45°; rotated cards straighten on hover.
- Reveal-on-scroll: `IntersectionObserver` → opacity 0.25→1, translateY 28px→0.
- Copy-email button with 4 s status feedback.
- "Mix things up" shuffle re-seeds the floating objects.
- Focus rings: 3 px accent outline, 5 px offset; lime `::selection`; skip-link.

## Responsive behaviour

- **1100 px**: tighter gutters, type steps down.
- **760 px**: header reflows to two rows; sticky stack becomes normal flow;
  card grid stacks (order: title → visual → hook → body → chips → actions);
  decorations hidden; tap targets ≥ 44 px; Georgia captions hidden.
- **380 px**: further shrink; 360 px card padding.
- `prefers-reduced-motion`: all animation/transition off, smooth scroll off.

## What I take vs. what I change for Amin's site

**Take (philosophy + patterns):** paper/ink base, colour-blocked sections, oversized tight type,
Georgia margin notes, micro-label system, tilted ticker of real credentials, sticky venture stack,
tactile borders + offset shadows, stickers/stamps, reveal-on-scroll, honest statuses,
exemplary a11y and reduced-motion handling.

**Change (identity):** palette drawn from Amin's own product (Illustra ink-navy `#172638`,
blue `#1457DF` accent) instead of the reference's violet; manila/sage/wash section tints;
slightly tighter radii (22 px) to read more editorial; content is entirely Amin's;
no fake screenshots — every visual stage is a hand-drawn CSS/SVG illustration;
no theme-choice dialog (single considered light theme, faster first paint).

---

# Revision round 2 — the “matrix print” system (2026-11-17)

User direction: kill the mixed illustration styles (ASCII diagram vs cartoon shapes),
use **one** clean technical-print style; swap the Asymmetric Arbitrage card for the
real Saifan–Laffineur yield curve; replace the research reading list with the
“45 % → 100 %” screen-time pitch; add the podcast (no link yet).

## One illustration style: matrix print plates

Every venture card now draws the same object — a **technical print plate**:

- **Paper**: blueprint grid (22 px, blue at 5 % alpha) over warm paper `#fbf9f0`,
  1 px ink border, 10 px radius, offset shadow `6px 8px 0`.
- **Toolbar**: monospace 8 px uppercase label left (`STUDY DESK — NOTES GRAPH`),
  blinking LED + plate index right (`V / 03`). LED pulses 2.4 s in the card accent.
- **Crop marks**: four 9 px L-marks in the corners, like a print proof.
- **Body**: pure SVG line-work, two ink weights + faint, one accent colour per card
  (`--plate-accent`: illustra/yield `#1457df`, april `#35603c`, robotics `#5b48b0`,
  glasses `#b2533a`). Classes are shared: `.ln/.ln-soft/.ln-faint/.ln-acc`, `.bx/.bx-soft/
  .bx-ink/.bx-lime/.bx-hatch/.bx-callout`, `.dot-acc`, `.svg-label*/.svg-tiny*`.
- **Foot**: dashed rule, mono meta left, Georgia italic phrase right (`one manifold`).
- **Caption** below the plate, Georgia italic, sometimes a real link (illustraedu.com).
- **Stamps** (round, dashed inner ring, accent ✓) kept only on the two cards that
  earned them: illustra “IDEA → SHIPPED”, april “FIELD VERIFIED”.
- Plates sit slightly rotated (−1.4°/+1.6°/−0.6°) and straighten + lift on hover;
  mobile flattens rotation and shadow.

### The five plates

| Card | Drawing | Signature element |
|---|---|---|
| 01 Illustra | Notes page (ruled lines, AI ✓ + CARDS chips) feeding a knowledge-graph of NOTES/MATERIALS/FLASHCARDS around an ink AI node | dashed “adapts” arrow looping back to the page |
| 02 APRIL | Hatched bar chart of four carbon plots + VERIFIED/IN FIELD legend | callout `6 mo → 18 d` (real pilot claim) |
| 03 SLYM | **Computed wireframe yield surface**: perspective projection `P(x,y)` with `z = 0.16 + 0.74·(1−e^(−2.2y))·(0.3+0.7x^0.85)`, 9×9 mesh + 4 highlighted time slices + floor grid + drop lines | `R(x, y, t)` chip, “SLYM · 2025” |
| 04 Robotics | Four sensor nodes (LIDAR/VISION/IMU/AUDIO) converging into an ink FUSION block | output panel “THE ROOM, AS ONE IMAGE” |
| 05 Glasses | Wireframe smart glasses: left lens shows note lines + lime chip, right lens a HUD reticle | `+ ANNOTATION` callout |

The SLYM surface is drawn by a small pure function (`yieldProjection()` in
`components/venture-stages.tsx`) — deterministic, no randomness, tests-free by design
but numbers are stable between builds.

## Section swaps

- **Research → The pitch** (`components/Pitch.tsx`, `#pitch`, nav “The pitch”).
  Headline: “You spend about *45 %* of your life on a screen. I want to get it to *100.*”
  Ruled-paper background (the old research block’s), three points (WHERE / WHEN / HOW),
  and a “Meanwhile, on paper” strip that reuses `.pub-row` for the two real artefacts
  (Utility Economics book; Credit Risk repo). The essay drawer is gone (`.essay-*` styles
  deleted, `.mono-tag` added for small coming-soon tags).
- **Podcast**: `profile.podcast = { name: "In Pursuit of the Matrix", url: "" }`.
  Beyond card shows the show name + honest “— link coming” mono-tag; the day a URL is
  pasted, a “Listen ↗” link renders in Beyond and Contact automatically. No invented URL.

## Responsive + motion (unchanged in spirit, verified)

- ≤760 px: sticky pile → normal flow (`position: relative; top: 0 !important`),
  plates unrotate (`transform: none !important`), shadow flattens to `0 5px 0`,
  card internals reorder (title → plate → hook → body → chips → actions),
  pitch/beyond collapse to one column, stamps shrink.
- `prefers-reduced-motion`: everything off, reveal pinned visible.

## QA record (this round)

- `next build` clean (104 kB first load, static).
- DOM audit: nav labels, 5 plates (toolbars/captions/LEDs/stamps), yield card copy
  (`On SSRN`, `Read the paper ↗`, SSRN 5510499 link), pitch headline + 3 points + 2 papers,
  podcast tag with no link, contact nav without podcast link (URL empty), zero console errors,
  no `NaN` in the yield SVG (30 paths).
- Mobile verified at 390 px via same-origin iframe render: `mq760` true, header static,
  `--header-h` 80 px, cards `position: relative`, plates unrotated, single-column
  pitch/beyond. (Screenshot pass pending the browser window being visible.)


## Matrix skin (round 3, this round)

Full reskin, same content and layout: phosphor green on green-black, terminal
aesthetics. Palette: paper #020705, ink/text #d7ffe2, muted #8fc9a3, accent
#00ff41, deep #010603 (contact bg / solid buttons), red-pill #ff4444 (hero pill
shape + glasses card accent). Type: global mono stack (--font-mono: Cascadia
Mono / Menlo / Consolas); Georgia italic kept for margin notes and captions.

Added in globals.css:
- body::after CRT layer: scanlines + vignette, fixed, pointer-events none.
- Phosphor text bloom on big headings, blinking caret on the hero tag line.
- Terminal scrollbars (scrollbar-color + webkit).
- .rain-canvas: digital rain in the hero (components/MatrixRain.tsx) - katakana
  + hex glyphs, DPR-aware, ~20fps, pauses when the tab is hidden or the hero is
  scrolled away, renders nothing under prefers-reduced-motion. Mounted inside
  .hero-canvas (components/HeroShapes.tsx) so it paints below the shapes.

Recolor rules: dark slabs (contact, badges, buttons) use --deep with green or
pale text; bright green fills (ticker, round-button, green SVG chips) always
carry --deep text (14.9:1). Navy rgba alphas became pale-green alphas for
strokes/hairlines; offset slab shadows went black. All old literals
(#172638/#1457df/#f6f4ee/#f2eee2/#fbf9f0/rgba(23,38,56/rgba(20,87,223) verified
gone. app/icon.svg recolored (dark tile, green star); layout.tsx themeColor
#020705.

QA: next build clean (105 kB first load). Contrast audit 27 pairs, min 5.53:1
(AA pass): body text ~10.5:1, accent on dark 14.86:1, dark-on-green 14.95:1.
DOM audit: nav labels, all links/hrefs, podcast LINK COMING tag unchanged.
Mobile 390px iframe: mq760 true, static header, cards relative, plates
unrotated, single-column pitch/beyond, mono + scanlines + rain present.
Desktop screenshots taken (window visible): hero with rain + red pill, about
terminal card, Illustra card (blueprint plate + stamp), glasses card (red
accent), pitch headline + papers, beyond quest cards, contact deep block.
Story details toggle opens/closes with readable body. No hydration errors.


## Round 4 - terminal opening + wire tunnel (this round)

Asked for: kill the floating shapes ("too bubbly"), open on a more unique
matrix opening, connect the rest of the site with an abstract wire tunnel -
a glowing light travels down an abstract web and turns 90 degrees into each
project.

Removed:
- components/HeroShapes.tsx deleted (FloatingShapes + ShuffleButton); every
  .shape-* / .shuffle rule and @keyframes float removed from globals.css
  (one orphaned "}" at old line 709 caught by the build and fixed).

Hero (components/Hero.tsx):
- MatrixRain stays in .hero-canvas as the base layer.
- components/DecryptText.tsx: terminal decode - characters glitch through
  katakana/hex glyphs then lock left to right. Runs on PROFILE.headline and
  both name lines (staggered 0/250/500ms). SSR-safe (renders the real text
  first, glitches after hydration), real text duplicated in .sr-only for
  screen readers, static under prefers-reduced-motion.
- One-shot CRT power-on sweep (.hero::after, crt-sweep 1.5s, plays once).

The wire (components/WireWeb.tsx, mounted as first child of <main>):
- A dim dotted circuit rail (rgba(0,255,65,.17)) runs down the left gutter
  spine and elbows out at exactly 90 degrees into 9 targets, in page order:
  .about-card, the five .card-* venture cards, .pitch-inner, .beyond-grid,
  .contact .contact-bottom.
- Scroll-driven only (no autonomous animation): a bright .wire-lit stroke
  energises the rail behind a glowing .wire-dot that travels the path, and
  each diamond .wire-node lights as the light passes it. Reduced-motion
  users get the same behaviour because it is scroll-driven, not timed.
- Geometry is rebuilt on resize, fonts.ready and a 600ms settle timer;
  progress maps scrollY to path length through a sampled lookup (binary
  search); path is all-orthogonal by construction (26 L segments, verified).
- Hidden below 900px. Node styling is CSS-only (.wire-node / .wire-node.lit).
- Bottom-of-page clamp: at max scroll the wire completes regardless of the
  55%-viewport progress line, so the last node (contact) always lights.
- Single CSS knobs: rail alpha (--wire colour in .wire-rail stroke), dot glow
  (.wire-dot box-shadow), node size (rect x/y -5 + rotate(45)).

QA: next build clean (106 kB first load). Verified live: 0 shapes, 0 shuffle,
9 nodes, all-orthogonal rail (~7.9k px), light travels 888->7440 over the
page with nodes lighting 0->9 sequentially, completes at page bottom. DOM
audit unchanged: title, h1, nav labels, all 22 links, podcast LINK COMING
tag, section order. hero-note / about-doodles Georgia italics intact.
Screenshots: hero (rain + caret, no shapes), ventures (rail + lit elbow into
the yield card), pitch (dot mid-rail under the scanline headline), contact
(all nodes lit, dot at the terminus by the footer).

Known test quirk (documenting): in a hidden/background embedded-browser tab,
html { scroll-behavior: smooth } wedges programmatic scrolling and freezes
scroll events; set scrollBehavior=auto and focus the tab before asserting.


## Round 5 - dossier + CIA look (this round)

Asked for: CIA-dossier meets matrix style — sharp, zero rounded edges, zoomed out,
less/no roundings; merge About me + Pitch; core message 45% on screen -> 100,
always wired in; challenge is letting people actually do it; ventures in order:
Illustra, Smart Glasses (self-safety face-recognition danger ping), Robotics &
sensor fusion; drop APRIL & Yield; remove Beyond -> new Dossier collection
(My life curve, Skydiving, Podcast with dummy button, Utility economics); drop
credit stress testing; name podcast + dummy button link.

Removed:
- components/About.tsx, Pitch.tsx, Beyond.tsx deleted (replaced by AboutAndPitch.tsx + DossierCollection.tsx).
- lib/ventures.ts slimmed to 3: Illustra, Smart Glasses (self-safety tag),
  Robotics & sensor fusion (dropped April / Yield).
- WireWeb targets updated: .about-card, .card-illustra, .card-glasses,
  .card-robotics, .dossier-collection, .contact .contact-bottom (6 nodes).

Components:
- components/AboutAndPitch.tsx: merged About + Pitch. Left: UCL card + bio.
  Right: "THE BIGGEST PROBLEM I SEE" thesis box — 45% on screen -> 100,
  always wired in, challenge is letting people actually do it. Dossier-style
  header "PERSONAL FILE — CONFIDENTIAL".
- components/DossierCollection.tsx: 4 dossier cards — My life curve,
  Skydiving, In Pursuit of the Matrix (podcast, dummy LISTEN button -> #),
  Utility economics (SLYM, READ THE PAPER link).
- components/venture-stages.tsx: stages for Illustra / Glasses / Robotics only.
- page.tsx / SiteHeader.tsx: nav = About / Ventures / Dossiers / Say hello.

CSS (globals.css):
- --radius-card: 0px; all buttons/chips/pills/badge/cards zero border-radius.
- .about-card sharp rectangle, no rotation; .ucl-badge sharp, no rotation.
- .about-body: two-column grid (bio left, thesis box right).
- .thesis-box: bordered box, 45% in green, 100 in green.
- .dossiers: .dossier-collection 2-col grid, sharp cards with green tag
  borders, .dossier-link.dummy styled as inactive dashed link.
- .plate sharp (radius 0), no rotation, hover translateY only.
- Venture cards bigger (min-height 620px, more padding).
- Header nav pills stay pill-shaped (kept, minor).

QA: next build clean (106 kB first load). Verified: hero terminal rain +
decode intact, About+Pitch merged with thesis box, 3 ventures in order,
4 dossiers with dummy LISTEN button, 6 wire nodes, zero border-radius across
controls, content unchanged (nav labels, 22 links intact, podcast name "In
Pursuit of the Matrix").
# Round 7 — projects and experience / GitHub Pages

- Removed the ticker and its animation styles.
- Replaced separate Ventures and Dossier sections with a single Projects and Experience grid. Venture stories stay expandable, dossier notes and links remain with their cards, and the supplied accolades appear in the same section.
- Removed the hero margin notes and the About, venture, and footer doodles. Kept the content and typography accessible, with visible focus states and reduced-motion behavior.
- Updated navigation and the hero action to `#projects`; rebuilt the wire targets across the about card, all eight project/experience cards, and contact.
- Enabled Next.js static export with trailing slashes for the profile GitHub Pages domain. The export is written to `out/`.

# Revision round 8 — research, APRIL, and typography

- Renamed the podcast to “Pursuit of 100” and removed the My life curve card.
- Replaced the Utility Economics dossier with two Research cards: the Saifan–Laffineur Yield Model (SLYM) and Introduction to Utility Economics, described as Amin’s own work on quantifying utility.
- Added APRIL to the project grid. The supplied project notes describe it as carbon finance research involving four carbon plots and a field-verified six-month-to-18-day timeline. Added the user-provided $5,000 research grant to the accolades list and APRIL story.
- Replaced the lower-case “amin” brand with Amin Ali Saifan and consolidated the interface typography on Arial/Helvetica sans-serif. Removed the separate Geist and Georgia display treatments; the digital-rain glyph canvas keeps its monospace rendering for alignment.
- Simplified the About and hero copy to keep the tone direct.

# Revision round 9 — simplified visual system

- Removed MatrixRain, the decode animation, CRT sweep, scanline overlay, and phosphor text shadows. The hero now uses a subtle geometric grid and crosshair.
- Replaced the ornamental lowercase header mark with a plain title-case name; made the contact arrow an inline link and removed the wire's contact-node target.
- Reduced hero, section heading, card, and contact scale and trimmed excess section spacing. Rebuilt the mobile layout rules for the simpler grid.
- Kept the UI on a single Arial/Helvetica sans-serif stack. The decorative wire remains behind project content, with no node beside the contact links.

## Revision round 10 — About and interests

- Replaced the Skydiving dossier with an Interests card listing skydiving, paragliding, parasailing, stand-up comedy, and flight simulations.
- Refined About into a concise personal blurb and a forward-looking statement on moving computation from a pocket screen into the field of vision.
- Removed the old 45% to 100% screen-time framing and styled About as a quiet two-column layout that stacks cleanly on mobile.

## Revision round 11 — landing copy

- Replaced the hero's skydiver/podcaster tagline and casual invitation with copy aligned to About: Illustra, economics, mathematics, data science, technology, and decision-making.
- Updated the page title to use the site's founder and researcher framing.


## Revision round 12 — project concepts and contact

- Renamed Smart glasses to Outsourced Thinking and updated the concept to facial analysis and augmented reality for personal security.
- Replaced Robotics & sensor fusion with Humanized Computing, focused on people guiding drone swarms through a gamified interface where onboard compute is limited or costly.
- Repositioned Pursuit of 100 around the roadblocks that hold humanity back from evolving.
- Added email inquiry links for Outsourced Thinking and Introduction to Utility Economics, using the supplied contact address.
- Reframed the About thesis as an affirmative opportunity: computing in the field of vision can extend human attention, memory, and action.


## Revision round 13 — cockpit cyan palette

- Replaced the phosphor green accent with a restrained cockpit cyan / blue-green palette across the interface, wire, controls, scrollbar, and icon.
- Shifted the dark background tones toward blue-black and kept pale cyan text for contrast.


## Revision round 14 — broaden Humanized Computing

- Reframed Humanized Computing around people contributing perception, judgment, and decision-making as compute infrastructure when machine compute is limited or costly.
- Kept gamified drone-swarm guidance as one example and updated the card hook and chips to reflect the broader idea.


## Revision round 15 — 45% to 100% thesis

- Set the largest thesis line to “From 45% to 100%.” and aligned the supporting paragraph with the user's wearable-computing argument: displays in the field of vision, low-value tasks outsourced to technology, more seamless digital interaction, and expanded human capability.

## Revision round 16 — inquiry links, name, and vertical wire

- Added dual-recipient “Ask me about it” links to all project and experience cards except Illustra. Existing project links remain available.
- Changed displayed name to Amin Saifan.
- Removed the wire's horizontal branches. The vertical cyan rail now passes through the page, with its nodes and the current project card lighting as the reader scrolls.
