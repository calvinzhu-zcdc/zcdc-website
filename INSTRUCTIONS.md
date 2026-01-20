# ZCDC CPA Website Build Instructions

This document outlines the steps to build a modern marketing website for ZCDC CPA using Next.js, TypeScript, and shadcn/ui.

## Project Setup

1. Create Next.js App: A new Next.js application has been initialized with TypeScript and Tailwind CSS.
2. Initialize shadcn/ui: We use the shadcn/ui CLI to initialize the project with the necessary components and styles.
3. Project Structure: Create folders for components, and move assets to the public directory.

## Design System

### Typography

We use Next.js built-in font optimization (`next/font/google`) to self-host Google Fonts:

**Font Pairing:**

- **Geist (Sans)**: Primary font for body text, navigation, buttons, and UI components
- **Playfair Display (Serif)**: Used for hero headlines and major section headings to create a premium, custom-designed feel

**Implementation:**

- Fonts are initialized in `src/app/layout.tsx` with CSS variables (`--font-sans`, `--font-serif`)
- Registered in `src/app/globals.css` within the `@theme inline` block
- Applied via Tailwind utilities: `font-sans` (default) and `font-serif` (headlines)

**Typography Conventions:**

- Hero headlines: `font-serif text-5xl md:text-6xl font-light tracking-tighter` with italic emphasis words
- Section headings: `font-serif text-4xl md:text-5xl font-light tracking-tight`
- Body text: `font-sans text-lg leading-relaxed`
- Use `font-light` instead of `font-bold` for serif headings to maintain elegance

### Color Palette: Prussian Navy & Champagne

A "quiet luxury" palette designed to convey established professionalism rather than startup energy.

**Core Colors (defined in `src/app/globals.css`):**

- `--background`: Warm champagne/off-white (`oklch(0.98 0.005 60)`)
- `--foreground`: Deep Prussian Navy (`oklch(0.2 0.04 250)`)
- `--card`: Pure white for card surfaces
- `--muted`: Soft champagne/beige for secondary backgrounds
- `--accent`: Subtle tan/gold for highlights and icons
- `--primary`: Prussian Navy for CTAs and important elements
- `--border`: Soft champagne border for refined separation

**Usage:**

- Use semantic color tokens (`text-foreground`, `bg-background`, `text-muted-foreground`)
- Avoid hardcoded colors like `text-blue-600` or `bg-gray-50`
- Icons use `text-accent` for subtle highlighting

### Layout & Spacing: Macro-Whitespace

**Breaking the Template Look:**

- Section padding: `py-32` instead of `py-20` for generous breathing room
- Grid gaps: `gap-12` to `gap-16` instead of `gap-8`
- Heading margins: `mb-20` instead of `mb-12`
- Container: Always use `px-6` for horizontal padding

**Asymmetrical Layouts:**

- Hero sections use side-by-side layouts (`flex flex-col lg:flex-row`) instead of centered overlays
- Text blocks: `lg:w-1/2` with offset positioning
- Images: `lg:w-1/2` or `lg:w-3/5` for visual interest
- Avoid perfect 50/50 splits—create visual hierarchy

### Visual Elements

**Images:**

- Use editorial-style photography (calculator, desk setups) over generic "people in suits"
- All images in `/public/images/` referenced with Next.js `<Image>` component
- Aspect ratios: `aspect-[4/5]` for hero images, `aspect-[4/3]` for secondary content

**Image Hover Effects:**

- Subtle scale on hover: `hover:scale-105` (5% zoom)
- For static content images: `hover:scale-[1.02]` (2% zoom) with `hover:shadow-2xl`
- Smooth transition: `transition-all duration-700`
- No grayscale filters—show images in full color immediately

**Shadows & Depth:**

- Hero images: `shadow-xl`
- Cards: `shadow-2xl` for premium depth
- Remove rounded corners (`rounded-none` or no rounding) for modern, squared-off feel

**Buttons:**

- Primary: `bg-primary text-primary-foreground rounded-none tracking-wide`
- No rounded corners for sophisticated, architectural feel
- Hover: `hover:bg-primary/90` for subtle feedback

### Component Patterns

**Hero Sections:**

```tsx
<section className='relative overflow-hidden pt-24 pb-32 bg-background'>
  <div className='container mx-auto px-6'>
    <div className='flex flex-col lg:flex-row items-center gap-16'>
      {/* Text Block - lg:w-1/2 */}
      {/* Image Block - lg:w-1/2 with aspect-[4/3] */}
    </div>
  </div>
</section>
```

**Section Headings:**

```tsx
<h2 className='font-serif text-4xl md:text-5xl font-light text-center mb-20 text-foreground tracking-tight'>
```

**Cards:**

```tsx
<Card className='shadow-2xl border-border'>
  <CardHeader>
    <CardTitle className='font-serif text-4xl font-light tracking-tight text-foreground'>
```

**Interactive Images:**

```tsx
<div className='aspect-[4/3] bg-muted overflow-hidden shadow-xl'>
  <Image
    src='/images/hero/...'
    className='w-full h-full object-cover transition-all duration-700 hover:scale-105'
  />
</div>
```

### Special Components

**Testimonials Carousel:**

- Auto-advances every 8 seconds (`setInterval` with 8000ms)
- Uses CSS transforms for smooth sliding (`translateX`)
- Dot navigation for manual selection
- Located in `src/app/_components/Testimonials.tsx`

## Component Development

1. Header: A navigation bar with the company logo and links.
2. Hero Section: A prominent section at the top of a page to grab the user's attention.
3. Feature/Service Sections: Reusable grids, cards, and content blocks.
4. Footer: A footer with contact information and other relevant links.

## Page Assembly

1. Home Page: Assemble the created components into the main page.tsx.
2. Styling: Apply global styles and ensure a professional and consistent look and feel.

## Modularity Guidelines (Pages)

- Keep route files readable: src/app/<route>/page.tsx should primarily compose sections rather than contain large blocks of JSX.
- Prefer colocating page-only components: if a component is only used by one route, place it under src/app/<route>/\_components/.
- Use shared components for reuse: if a component is used across multiple pages, place it under src/components/.
- Prefer Tailwind in JSX: keep styling local with utility classes; use src/app/globals.css only for truly global rules.
- Images: use next/image and reference assets under public/images/ with string paths.

## Design Philosophy: Quiet Luxury

The design system is built around the concept of "quiet luxury"—understated elegance that signals professionalism and expertise without being flashy.

**Key Principles:**

1. **Generous Whitespace**: More space = more premium feel
2. **Refined Typography**: Serif for headlines, light weights, tight tracking
3. **Subtle Interactions**: Gentle hover effects, slow transitions (700ms)
4. **Editorial Imagery**: High-quality, thoughtful photography
5. **Asymmetry**: Breaking the grid creates custom-designed feel
6. **Muted Palette**: Navy and champagne over bright blues and grays
7. **Squared Edges**: No rounded corners on major elements for modern sophistication
