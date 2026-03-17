---
title: "feat: Full-Page Snap Scroll Sections"
type: feat
date: 2026-03-16
status: revised after review
---

# Full-Page Snap Scroll Sections (Simplified)

## Overview

Redesign the portfolio from continuous scrolling to full-page snap-scroll. Each section occupies the entire viewport and snaps into place, with per-section background images. No accent color system, no custom hooks, no component splits.

## Problem Statement

1. **Image overlay** -- All 7 backgrounds stacked in one fixed container blend into a muddy mess
2. **Growing gaps** -- Empty gradient mesh shows between sections (worse further down)
3. **No section identity** -- Continuous scrolling with no visual "moment" between sections

## Proposed Solution

Add CSS `scroll-snap-type: y mandatory` on `html`. Wrap each section in a snap-section container with its own background `<img>`. Delete `scroll-background.tsx` and gradient mesh CSS entirely. Keep single global accent color.

### Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Scroll container | `html` element | Anchor links, `window.scrollY`, `position: fixed`, IntersectionObserver all work natively |
| Snap behavior | `mandatory` desktop, `proximity` mobile | Mandatory is best on desktop; proximity avoids trapping on mobile |
| Mobile viewport | `100dvh` | Avoids iOS address bar `100vh` bug |
| Content overflow | Internal `overflow-y: auto` on snap sections | Prevents clipping while maintaining snap |
| Experience | Same component, rendered twice with job slices | No new components or page indicators |
| Background images | Static `<img>` with fixed opacity per section | No JS needed; snap means you never see two sections at once |
| Accent colors | Single global blue (#3b82f6) | Consistency is a feature; backgrounds already differentiate sections |
| Parallax | Remove entirely | Conflicts with snap scroll |
| Fade-in | Modify existing FadeInSection (3-line diff) | Remove `unobserve`, add exit reset |
| Nav | Keep `href` for deep linking, add `scrollIntoView` enhancement + scroll-spy | Preserves accessibility and URL hash behavior |

## Technical Approach

### Phase 1: Snap Scroll + Backgrounds + Section Adjustments

**Files:** `globals.css`, `page.tsx`, `scroll-background.tsx` (delete), all section components

1. **CSS changes in `globals.css`:**
   - Add snap scroll on `html` with `proximity` on mobile
   - Add `.snap-section`, `.snap-bg`, `.snap-vignette`, `.snap-content` classes
   - Remove `.gradient-mesh` and `@keyframes meshDrift` (~28 lines)
   - Add `@media (prefers-reduced-motion: reduce)` block

2. **Delete `scroll-background.tsx`** -- replaced by static per-section `<img>` elements

3. **Restructure `page.tsx`:**
   - Remove `ScrollBackground` import
   - Wrap each section in inline snap-section markup with background image
   - Experience rendered twice with `jobs.slice(0,2)` and `jobs.slice(2)`
   - Keep `FadeInSection` wrappers

   ```tsx
   <section className="snap-section" id="about">
     <img src="/images/about-bg.jpg" className="snap-bg" alt="" loading="lazy" />
     <div className="snap-vignette" />
     <div className="snap-content mx-auto max-w-6xl px-4 sm:px-6">
       <FadeInSection><About /></FadeInSection>
     </div>
   </section>
   ```

4. **Update section components:**
   - Remove `id` attributes (moved to snap-section wrapper)
   - Remove `py-20` (vertical centering handled by snap-section flexbox)
   - Remove `section-glow` class (snap provides clear section boundaries)
   - Experience: accept optional `jobs` prop for slicing

5. **Hero:** Already `min-h-screen`; wrap in snap-section, keep particles and scroll indicator

### Phase 2: Nav Scroll-Spy

**Files:** `nav.tsx`

1. Add IntersectionObserver (threshold: 0.5) watching each snap-section to detect active section
2. Highlight active nav link with bold/underline/accent indicator
3. Keep `<a href="#id">` for accessibility; add `onClick` with `e.preventDefault()` + `scrollIntoView({ behavior: 'smooth' })` + `history.pushState`
4. Keep existing glassmorphism scroll-aware background

### Phase 3: Polish

**Files:** `fade-in-section.tsx`, `globals.css`

1. **FadeInSection:** Remove `observer.unobserve(el)` call. Add `else { setVisible(false) }` so sections re-animate on each entry. (3-line diff)
2. **Reduced motion:** Already added in Phase 1 CSS
3. **Test:** Verify snap behavior, nav links, fade-ins, mobile experience

## Acceptance Criteria

- [x] Each section occupies full viewport height and snaps into place
- [x] Per-section background images (no overlay/blending)
- [x] No visible gaps between sections
- [x] Experience content split across 2 snap pages via job slicing
- [x] Nav links scroll to correct section and highlight active section
- [x] Content accessible on mobile (internal scroll for overflow)
- [x] `prefers-reduced-motion` disables snap and animations
- [x] Site builds and deploys to Vercel

## Files to Modify

| File | Change |
|------|--------|
| `src/app/globals.css` | Add snap CSS, remove gradient-mesh, add reduced motion |
| `src/app/page.tsx` | Snap-section wrappers, remove ScrollBackground |
| `src/components/scroll-background.tsx` | **DELETE** |
| `src/components/fade-in-section.tsx` | 3-line diff: remove unobserve, add exit reset |
| `src/components/hero.tsx` | Remove `id`, adjust for snap wrapper |
| `src/components/about.tsx` | Remove `id`, `py-20`, `section-glow` |
| `src/components/experience.tsx` | Accept `jobs` prop for slicing |
| `src/components/projects.tsx` | Remove `id`, `py-20`, `section-glow` |
| `src/components/skills.tsx` | Remove `id`, `py-20`, `section-glow` |
| `src/components/education.tsx` | Remove `id`, `py-20`, `section-glow` |
| `src/components/contact.tsx` | Remove `id`, `py-20`, `section-glow` |
| `src/components/nav.tsx` | Add scroll-spy, scrollIntoView enhancement |
