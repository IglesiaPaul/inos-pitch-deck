# INOS Pitch Deck — May 2026

Bridge round pitch for INOS Foundation France.

## Run locally
No build step. Serve with any static server:
```bash
cd pitch && python3 -m http.server 3000
# open http://localhost:3000
```
Do not open index.html by double-clicking — file:// protocol blocks JSX loading.

## Deploy to GitHub Pages
1. Push repo to GitHub (private recommended)
2. Go to Settings → Pages
3. Source: Deploy from branch → main → / (root)
4. Save. URL will be: https://[username].github.io/[repo-name]/pitch/

## Password protection
GitHub Pages has no built-in password protection on free plans.
Options:
- Keep the repo private + share the direct URL only (security by obscurity)
- Add a simple JS password gate (see below — Claude Code can add this)
- Upgrade to GitHub Pro for private Pages with auth

## Navigate the deck
- Arrow keys or spacebar to advance
- Shift+Arrow to go back
- F for fullscreen

## Print / PDF
Open pitch/print.html → browser print → Save as PDF → A4 landscape, no margins.

## Claude Code
Open repo in Claude Code. CLAUDE.md has all context.
Example prompts:
- "Fix Slide 6 world map — replace SVG with card grid"
- "Slide 9 — animate columns in sequentially on activation"
