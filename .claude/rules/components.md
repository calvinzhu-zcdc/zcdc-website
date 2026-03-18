---
paths:
  - "src/**/*.tsx"
---

# Component Patterns

## Hero Sections

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

- Side-by-side layout, not centered overlays
- Asymmetric widths (`lg:w-1/2` + `lg:w-3/5`) for visual hierarchy

## Section Headings

```tsx
<h2 className='font-serif text-4xl md:text-5xl font-light text-center mb-20 text-foreground tracking-tight'>
```

## Cards

```tsx
<Card className='shadow-2xl border-border'>
  <CardHeader>
    <CardTitle className='font-serif text-4xl font-light tracking-tight text-foreground'>
```

## Interactive Images

```tsx
<div className='aspect-[4/3] bg-muted overflow-hidden shadow-xl'>
  <Image
    src='/images/hero/...'
    className='w-full h-full object-cover transition-all duration-700 hover:scale-105'
  />
</div>
```

- Aspect ratios: `aspect-[4/5]` hero, `aspect-[4/3]` secondary
