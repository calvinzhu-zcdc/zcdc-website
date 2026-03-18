---
paths:
  - "src/**/*.{ts,tsx}"
  - "src/app/globals.css"
---

# Design System: Quiet Luxury

## Typography

- **Geist (Sans)** for body/UI, **Playfair Display (Serif)** for headlines
- Hero headlines: `font-serif text-5xl md:text-6xl font-light tracking-tighter` with italic emphasis
- Section headings: `font-serif text-4xl md:text-5xl font-light tracking-tight`
- Body: `font-sans text-lg leading-relaxed`
- Use `font-light` not `font-bold` for serif headings

## Colors

- Use semantic tokens ONLY: `text-foreground`, `bg-background`, `text-muted-foreground`, `text-accent`, `bg-primary`, `text-primary-foreground`
- NEVER use hardcoded colors (`text-blue-600`, `bg-gray-50`, etc.)
- Palette: Prussian Navy (primary/foreground) + Champagne (background/muted)
- Icons: `text-accent`

## Spacing (Macro-Whitespace)

- Section padding: `py-32` (not `py-20`)
- Grid gaps: `gap-12` to `gap-16` (not `gap-8`)
- Heading margins: `mb-20` (not `mb-12`)
- Container: always `px-6`

## Visual Elements

- Editorial photography over generic stock; all in `/public/images/`
- Hover: `hover:scale-105` (hero), `hover:scale-[1.02]` + `hover:shadow-2xl` (content)
- Transitions: `transition-all duration-700`
- Shadows: hero `shadow-xl`, cards `shadow-2xl`
- NO rounded corners — `rounded-none` for modern squared-off feel
- Buttons: `bg-primary text-primary-foreground rounded-none tracking-wide`, hover `hover:bg-primary/90`
- No grayscale filters on images — always full color
