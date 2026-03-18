# ZCDC CPA Website

Marketing website for ZCDC LLP (Canadian CPA firm).

## Stack

Next.js 16 + React 19 + TypeScript, Tailwind CSS v4, shadcn/ui, React Hook Form

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint
- `npm start` — serve production build

## Project Structure

- `src/app/<route>/_components/` — page-specific components
- `src/components/` — shared components (Header, Footer, UI primitives)
- `src/config/site.ts` — centralized contact info, links, metadata
- `public/images/` — all image assets
- `INSTRUCTIONS.md` — full design system reference

## Key Conventions

- Use `src/config/site.ts` for all contact details and links
- Route `page.tsx` files compose sections — no large JSX blocks
- Colocate page-only components in `_components/`; share cross-page ones in `src/components/`
- Style with Tailwind utilities in JSX; `globals.css` only for truly global rules
- Images via `next/image` with string paths from `public/images/`

## Design Philosophy

"Quiet luxury" — understated elegance, not flashy. See `.claude/rules/` for detailed design system rules.
