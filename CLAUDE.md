# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js with Turbopack)
- `npm run build` — Production build (also runs TypeScript checking)
- `npm run lint` — ESLint with Next.js config
- No test framework is configured

## Architecture

Single-page portfolio site using **Next.js 16 App Router**, **TypeScript**, and **Tailwind CSS v4**. Deployed on Vercel.

**Live:** https://one-shot-portfolio.vercel.app

### Snap-scroll layout

The page uses CSS `scroll-snap-type: y mandatory` (proximity on mobile). Each section is a full-viewport snap target defined in `page.tsx` with this structure:

```
<section class="snap-section" id="{section-id}">
  <img class="snap-bg" />        <!-- background image at 0.2 opacity -->
  <div class="snap-vignette" />   <!-- radial gradient overlay -->
  <div class="snap-content">      <!-- centered content -->
    <FadeInSection>               <!-- IntersectionObserver fade-in -->
      <SectionComponent />
    </FadeInSection>
  </div>
</section>
```

Background images live in `public/images/{section}-bg.jpg`. The `.snap-bg`, `.snap-vignette`, and `.snap-content` classes are defined in `globals.css`, not as Tailwind utilities.

### Experience section splitting

Experience is split across 3 snap sections to prevent viewport overflow. The `allJobs` array is exported from `experience.tsx` and sliced in `page.tsx`: ZoomInfo (page 1), Cisco (page 2), Amazon + Zoom (page 3). The nav component treats all three as one "Experience" link.

### Nav scroll-spy

`nav.tsx` uses IntersectionObserver to track which section is visible. The `sectionIds` array must include all snap section IDs (including `experience-2`, `experience-3`). The `isActive` function groups all experience sections under the single "Experience" nav link.

### Design system

Colors and tokens are defined as CSS custom properties via Tailwind v4's `@theme` directive in `globals.css`. Key classes: `.bento-card` (glassmorphism card), `.gradient-text` (animated gradient), `.particles` (hero floating dots). The theme is dark-only (no light mode).

### Verification

When making visual changes, use Playwright MCP to take screenshots of `localhost:3000` and verify that each snap section looks correct, content doesn't overflow the viewport, and backgrounds render properly at low opacity.
