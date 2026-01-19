## Purpose

Help an AI coding agent be productive in the zcdc-cpa Next.js codebase quickly.

---

### Quick start (commands)

- Dev server: `npm run dev` (runs `next dev`)
- Build: `npm run build` (runs `next build`)
- Start (production): `npm run start` (runs `next start`)
- Lint: `npm run lint` (runs `eslint`)

Notes: the project is a client-side/static site using the Next.js `app` router under `src/app`.

### Big picture architecture

- Framework: Next.js (app-router) with React 19 in `src/app`.
- UI: Tailwind CSS classes in components; global styles live in `src/app/globals.css`.
- Components: reusable UI components live in `src/components` and small primitives in `src/components/ui`.
- Images: static assets in `public/images/` (referenced with string paths in `<Image src="/images/.."/>`).
- Path aliases: `@/` points to `src/` (see `tsconfig.json` `paths`).

### Where to make changes

- Page routes: add or edit `src/app/<route>/page.tsx` (app router). Example: `src/app/about/page.tsx`.
- Shared components: `src/components/*` (Header, Footer, Hero, Features, etc.). Keep presentation logic here.
- UI primitives: `src/components/ui/*` for small building blocks like `button.tsx`, `card.tsx`, `input.tsx`.

### Icons and visual conventions

- Icons: use `lucide-react` (already in `package.json`). Import like `import { IconName } from 'lucide-react'`.
- Visual style: consistent Tailwind utility classes across components. Follow existing spacing and rounded/card patterns used in `src/components/*`.

### Patterns & conventions (concrete examples)

- Each page should have at least 2 visually distinct sections (e.g., intro/hero and a grid, or summary and details), not just a single block of content.
- Absolute imports: `import Header from '@/components/Header'` (use the `@/` alias).
- File layout: pages are `page.tsx`, not `index.tsx`. Components are default-exported React components.
- CSS: prefer Tailwind utility classes in JSX; minimal local CSS—use `src/app/globals.css` for global styles.
- Images: use Next.js `next/image` with `src='/images/...'` and explicit `width`/`height` attributes.
- Configuration: site-wide configuration, including contact information, is stored in `src/config/site.ts`.
- Client Components: components that use React hooks (e.g., `useState`) must have the `'use client'` directive at the top.

### Dependencies to be aware of

- `lucide-react` — icons
- `class-variance-authority`, `clsx`, `tailwind-merge` — used in UI composition
- `@radix-ui/*` — small accessible primitives may appear in UI components

### Developer workflows & checks

- Run `npm run dev` locally on Node 18+ (project used `nvm use 22` in local shell historically).
- Linting: `npm run lint` — fix issues before opening PRs.
- No automated tests are present in the repo (none discovered); rely on visual/manual checks for UI changes.

### What to look for in PRs

- Keep to existing component structure: update `src/components` or add new components under `src/components/ui` for primitives.
- Reuse the `@/` import alias and Tailwind utilities.
- Keep asset references relative to `/public` (e.g., `/images/...`).

### Files to inspect first when triaging an issue

- `src/app/page.tsx` — top-level home route
- `src/app/layout.tsx` and `src/app/globals.css` — layout and global styles
- `src/components/Header.tsx`, `Footer.tsx`, `Hero.tsx` — common layout pieces
- `src/components/ui/*` — UI primitives and patterns

### When uncertain — safe defaults

- Match existing naming and export patterns (default exports for components).
- Keep markup simple and Tailwind-focused; avoid adding new styling frameworks.

---

If anything above is unclear or you'd like this trimmed/expanded (examples, code snippets, or additional workflow steps), tell me which areas to update.
