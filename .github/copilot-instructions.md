Com certeza. O conceito de Mobile First é fundamental não só para o design, mas para o SEO e o cálculo do Core Web Vitals (o Google indexa a versão mobile prioritariamente).

Atualizei o documento de instruções. Adicionei regras explícitas de Tailwind (escrever classes base para mobile e usar breakpoints para desktop) e prioridade de renderização.

Aqui está a versão final para você copiar:

Codexo Tecnologia - AI Coding Agent Instructions
1. Project Overview & Goals
Project: Codexo Tecnologia Marketing Website (v2.0)

Tech Stack: Next.js 16.1 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion.

Primary Goal: Achieve 95+ Score on Google Lighthouse (Performance, Accessibility, SEO).

Methodology: Mobile First Strategy (Design & Code). All features must be built for mobile screens first, then enhanced for desktop.

Design Philosophy: Minimalist, dark-themed, ultra-precise typography, and "glassmorphism" effects.

2. Architecture & File Structure Strategy
Refactoring Target (Feature-Based / Clean Arch)
We are transitioning to a strict App Router structure to favor SEO and Performance.

src/
├── app/
│   ├── layout.tsx              # Root Layout (Html, Body, Fonts, Metadata)
│   ├── page.tsx                # Landing Page (Components Assembly)
│   ├── globals.css             # Global Tailwind v4 directives & Vars
│   ├── sitemap.ts              # Dynamic Sitemap generation
│   ├── robots.ts               # Robots.txt configuration
│   └── icon.tsx                # Dynamic App Icon generation
├── components/
│   ├── ui/                     # Atoms: Buttons, Inputs, Cards (Reusable)
│   ├── layout/                 # Organisms: Navbar, Footer
│   └── sections/               # Templates: Hero, About, Portfolio, Contact
├── lib/
│   └── utils.ts                # Helper functions (clsx, twMerge)
└── public/
    └── assets/                 # Optimized images (WebP/AVIF only)
Critical Rules for Components
Colocation: Keep logic close to where it's used.

Client vs. Server: By default, all components are Server Components. Add "use client" ONLY at the leaf nodes (buttons, inputs, interactive sections).

Naming Convention: PascalCase for components (WhatsAppButton.tsx), camelCase for utilities (formatPhone.ts).

3. Mobile First & Design System (Tailwind v4)
Mobile First Implementation Rules
Strict Rule: Never use max-width media queries unless absolutely necessary. Build for the smallest screen first.

Correct: class="w-full md:w-1/2 lg:w-1/3" (Base style is mobile, md: overrides for desktop).

Incorrect: class="w-1/3 max-md:w-full" (Desktop first logic is forbidden).

Responsive Breakpoints
Ensure content is legible on strict dimensions:

xs: 320px (iPhone SE support) - Test layouts here first.

sm: 640px

md: 768px (Tablets)

lg: 1024px (Laptops)

xl: 1280px (Desktops)

Touch Targets
All interactive elements (buttons, inputs) must have a hit area of at least 44x44px on mobile to satisfy Lighthouse Accessibility checks.

Typography & Colors
Font Weights: font-black (900) for headers, font-medium (500) for body.

Sizes: Use precise pixels but verify legibility on mobile (min 12px for body text).

Palette:

--color-codexo-primary: Primary Purple

--color-codexo-secondary: Secondary Accent

--color-codexo-dark: Main Background

--color-codexo-dark-light: Surface Color

4. Performance & Core Web Vitals (Lighthouse Focus)
LCP (Largest Contentful Paint) - Mobile Priority
Hero Section: The main image/element in the Hero section MUST use <Image priority /> and appropriate sizes prop (e.g., sizes="(max-width: 768px) 100vw, 50vw").

Fonts: Use next/font/google with display: 'swap'.

CLS (Cumulative Layout Shift)
Dimensions: Always explicitly define width and height for images and icons.

Skeletons: If loading data, use skeletons matching the final content size to prevent jumps.

Bundle Size Optimization
Lazy Loading: Use next/dynamic for heavy components below the fold (e.g., Maps, Carousels).

Imports: Import specific icons (import { FaWhatsapp } ...) instead of full libraries.

5. SEO & Metadata Strategy (Technical SEO)
Metadata Implementation
Use Next.js Metadata API in layout.tsx and page.tsx. Ensure viewport is set correctly for mobile:

TypeScript

export const metadata: Metadata = {
  title: { template: '%s | Codexo', default: 'Codexo Tecnologia' },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  // ...
}
Semantic HTML
Use <main>, <section>, <article>, <header>, <footer>.

H1: Only ONE <h1> per page.

Alt Text: Mandatory for all images.

Structured Data (JSON-LD)
Implement a <script type="application/ld+json"> component in the Root Layout describing the Organization.

6. Development Workflow & Fixes
Immediate Fixes Required (ToDo)
Refactor Layout: Move src/app/layout/layout.tsx to src/app/layout.tsx (Standard Next.js).

Fix Typos: Rename WhatsAppButon.tsx to WhatsAppButton.tsx.

Initialize CSS: Populate src/app/globals.css with Tailwind v4 imports.

Mobile Audit: Check if padding/margins are causing horizontal scroll on mobile (common bug: overflow-x-hidden on body).

Animation Guidelines (Framer Motion)
Performance: Prefer opacity and transform animations only.

Reduced Motion: Respect prefers-reduced-motion.

Mobile Trigger: Ensure whileHover interactions don't stick on touch devices (use tap gestures for mobile).

Code Quality
Strict Types: No any types.

Linting: Run npm run lint before committing.