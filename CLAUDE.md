# CLAUDE.md — INOS Pitch Deck

Read this before touching any file.

---

## What this is
A standalone HTML/JSX pitch deck for INOS Foundation bridge round (May 2026).
No build step. No bundler. Opens directly in browser.
React + Babel loaded from CDN. deck-stage.js is a custom web component.

## File structure
```
pitch/
  index.html       — shell: slide sections + speaker notes + CDN scripts
  print.html       — print/PDF version
  deck-stage.js    — custom <deck-stage> web component (navigation, keyboard, hidden attr)
  primitives.jsx   — shared React components: Chrome, ChromeBottom, Botanical, CountUp, useSlideActive
  slides-act1.jsx  — Slides 1-3 (Act I: The Void)
  slides-act2.jsx  — Slides 4-7 (Act II: The Infrastructure)
  slides-act3.jsx  — Slides 8-13 (Act III: The Moment)
  styles.css       — all design tokens and layout
netlify.toml       — deploy config
```

## How slides work
- Each slide is a React function component (Slide01, Slide02, etc.)
- Components are attached to window (window.Slide01 = Slide01)
- deck-stage.js mounts each component into its matching <section> in index.html
- Navigation: arrow keys, spacebar, click. Sections get hidden attr when not active.
- useSlideActive hook detects when a section becomes visible (removes hidden) to trigger animations

## Design tokens (in styles.css — never introduce new colors)
--bg: #0b0b0d
--surface: rgba(255,255,255,0.04)
--border: rgba(255,255,255,0.08)
--teal: #2a9d8f  --teal-light: #52b5a8  --teal-bright: #6dd4c8
--gold: #e9c46a  --coral: #e76f51  --lavender: #b48ac4
--text: #d4e8e4  --text-dim: #7a9e98  --text-muted: #4a6e68  --text-faint: #3a5e58
Font stack: Fraunces (headings/serif class), DM Mono (mono class), Inter (body)

## CSS utility classes (use these, don't add inline styles for common patterns)
.slide — full viewport slide container
.slide-inner — padded content area with flex column
.glass — glass card
.glass-teal — teal-accented glass card
.display — large hero text (Fraunces)
.section-title — slide heading (Fraunces)
.serif — Fraunces text
.mono — DM Mono text
.label — uppercase tracking label
.eyebrow — small section label above heading
.body-large — large body text
.bg-aurora — animated background gradient
.bg-grid — dot grid overlay
.chrome-top / .chrome-bottom — slide header/footer bars

## Content rules — NEVER violate
- Never mention EIC Pathfinder, EIC grant, or any specific grant program name
- Say "European public co-funding submission" or "public co-funding" instead
- Never mention specific grant amounts (€4M etc)
- Daphne is "Daphne" only — never her last name
- The ask is €250K bridge round
- All quotes are verbatim — never alter them
- The 13 slides follow the NADA → INOS → HEMPIN/DEWII narrative arc

## Current deck state (May 2026)
- Deck now has 13 slides total
- Slide 09 = "The Builder" (Paul Iglesia's field work and network)
- Navigation hint added to Slide 01 (arrow keys + fullscreen)

## What Claude Code should do
When asked to work on a slide:
1. Read the existing slide component in the relevant slides-act*.jsx
2. Make targeted edits — never rewrite a working slide from scratch
3. Test that primitives (Chrome, Botanical, CountUp etc) are used correctly
4. Never modify deck-stage.js or primitives.jsx unless explicitly asked
5. Never change the number of slides or their section IDs in index.html

## Current known issues to fix
- Some slides may have placeholder content — check visually
- S6 (Regional Bureau) world map SVG may need refinement
- Print version (print.html) may lag behind index.html changes — keep in sync
