# Full-Page Snap Sections Redesign

**Date:** 2026-03-16
**Status:** Ready for implementation

## What We're Building

A full-page snap-scroll portfolio where each section occupies the entire viewport and scrolling snaps between them like a slide deck. Each section has its own pinned background image that crossfades during transitions, plus a unique accent color for strong visual identity.

## Why This Approach

The current implementation has three problems:
1. **Image overlay** — All 7 backgrounds sit in one fixed container at `inset-0`. When multiple sections are partially visible, their images blend together at low opacity, creating a muddy look.
2. **Growing gaps** — Between sections, no section has high intersection ratio, so the gradient mesh shows through as empty space. This gets worse further down the page.
3. **No section identity** — Continuous scrolling with no visual "moment" makes it feel like one long static page.

Full-page snap solves all three: each section owns its viewport, backgrounds never overlap, and the snap creates a clear transition moment.

## Key Decisions

### 1. Full-page snap scroll (`scroll-snap-type: y mandatory`)
- Each section is `min-h-screen` with `scroll-snap-align: start`
- Content centered vertically within each section
- Smooth CSS snap behavior

### 2. Content-heavy sections split into multiple pages
- Experience: 2 snap pages (2 jobs each)
- All other sections: 1 snap page each
- Total: ~8 snap pages (Hero, About, Experience×2, Projects, Skills, Education, Contact)

### 3. Per-section accent colors
- Hero: Blue (#3b82f6)
- About: Teal (#06b6d4)
- Experience: Purple (#8b5cf6)
- Projects: Emerald (#10b981)
- Skills: Amber (#f59e0b)
- Education: Rose (#f43f5e)
- Contact: Blue (#3b82f6) — loops back

Applied to: section headings, glow lines, card borders on hover, background tint

### 4. Background system rebuild
- Replace fixed overlay system with per-section pinned backgrounds
- Each section wrapper contains its own background `<img>` with absolute positioning
- Crossfade via CSS transition on opacity when section snaps into view
- Vignette overlay per section (not global)
- No more gradient mesh — cleaner look

### 5. Transition effects between sections
- Background image crossfade (~500ms)
- Content fade-in with slight upward slide
- Accent color shift on CSS custom property

## Open Questions

- Should there be visible navigation dots on the side (like fullPage.js)?
- Should the nav highlight the current section?
- Mobile behavior: snap on mobile too, or fall back to normal scroll?
