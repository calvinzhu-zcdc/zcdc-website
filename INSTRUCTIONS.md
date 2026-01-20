# ZCDC CPA Website Build Instructions

This document outlines the steps to build a modern marketing website for ZCDC CPA using Next.js, TypeScript, and shadcn/ui.

## Project Setup

1. Create Next.js App: A new Next.js application has been initialized with TypeScript and Tailwind CSS.
2. Initialize shadcn/ui: We use the shadcn/ui CLI to initialize the project with the necessary components and styles.
3. Project Structure: Create folders for components, and move assets to the public directory.

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
- Prefer colocating page-only components: if a component is only used by one route, place it under src/app/<route>/_components/.
- Use shared components for reuse: if a component is used across multiple pages, place it under src/components/.
- Prefer Tailwind in JSX: keep styling local with utility classes; use src/app/globals.css only for truly global rules.
- Images: use next/image and reference assets under public/images/ with string paths.
