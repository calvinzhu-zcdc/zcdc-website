---
paths:
  - "src/**/*.tsx"
---

# Responsive Design: Mobile-First

## Core Approach

- Design mobile first, enhance with `md:`, `lg:`, `xl:` prefixes
- Stack vertical on mobile (`flex-col`), side-by-side on desktop (`lg:flex-row`)
- Typography scales: `text-4xl md:text-5xl lg:text-6xl`
- Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Touch targets: minimum 44px height
- Buttons: full-width on mobile when appropriate

## Header Rules

- Fixed: `fixed top-0 w-full z-50` — all pages need `pt-20` offset
- Mobile: solid `bg-background` — NEVER transparency/blur on mobile
- Desktop: `md:bg-background/80 md:backdrop-blur-md`
- CRITICAL: always use `md:` prefix for desktop-only glass effects
- Mobile menu: full-screen overlay, solid `bg-background`, serif `text-3xl`, left-aligned
- Nav typography: `uppercase tracking-[0.12em]`, desktop `text-base`
- Logo: NEVER grayscale — always full color
- CTA: phone number with `border-l` separator, not heavy button
