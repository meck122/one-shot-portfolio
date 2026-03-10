# UI Redesign Brainstorm

**Date:** 2026-03-09
**Status:** Ready for implementation

## What We're Building

Full visual redesign of the portfolio site, transforming from a plain minimal layout to a polished, modern dark theme with:

- **Bento grid layout** — Content organized in a grid of different-sized cards/tiles throughout the page (inspired by shanmemon.com)
- **Gradient accents / glows** — Subtle gradient backgrounds, glowing borders, and color transitions replacing flat solid colors
- **Projects section** — New section featuring jDuel with a screenshot, description, and link
- **Dark + slick theme** — Keep the near-black background but elevate with gradients and surface depth

## Reference

- **shanmemon.com** — Bento grid aesthetic, gradient glows, project cards with screenshots
- Keep dark theme (not switching to light)
- Skip "Get in Touch" / "Let's Connect" style CTAs

## Key Decisions

1. **Full page redesign** — All sections get the bento/gradient treatment (hero, about, experience, skills, education, contact, new projects)
2. **Bento grid** — Sections use CSS grid with varying card sizes for visual rhythm
3. **Gradient accents** — Subtle blue/teal gradients on card borders, section highlights, and hover states
4. **Projects section** — Feature jDuel only (for now): screenshot, description, tech stack, live link (jduel.xyz), GitHub link
5. **Screenshot** — Capture/include a screenshot of jDuel for the project card

## jDuel Project Data

- **Name:** jDuel
- **Description:** Real-time multiplayer trivia game with NLP-powered answer verification
- **Tech:** React 19, TypeScript, FastAPI, WebSocket, spaCy, Material-UI
- **Live:** https://jduel.xyz
- **GitHub:** https://github.com/meck122/jDuel
- **Key features:** 2-8 players, AI answer verification, time-based scoring, room codes, deep linking

## Sections (Redesigned)

1. **Hero** — Bento-style layout with name, title, tagline, social links. Gradient glow accent.
2. **About** — Card with gradient border, professional summary.
3. **Experience** — Bento cards per role (not a plain timeline). Each card has company, title, dates, bullets.
4. **Projects** — jDuel featured card with screenshot, description, tech tags, links.
5. **Skills** — Bento grid of skill category cards with subtle glow.
6. **Education** — Single card with gradient accent.
7. **Contact** — Simple links, no form, no "Let's Connect" CTA.

## Open Questions

- None — ready to implement.
