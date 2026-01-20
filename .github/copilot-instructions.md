# Codexo Tecnologia - AI Coding Agent Instructions (Masterfile)

## 1. Project Overview & Goals
**Project:** Codexo Tecnologia Marketing Website (v2.0)
**Tech Stack:** Next.js 16.1 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion.
**Primary Goal:** Achieve 95+ Score on Google Lighthouse (Performance, Accessibility, SEO).

**Methodology: Mobile First Strategy.**
We write CSS and layout logic for mobile screens (320px+) *first*, then use breakpoints (`sm:`, `md:`, `lg:`) to enhance the experience for larger screens.

**Design Philosophy:** Minimalist, dark-themed, ultra-precise typography, and "glassmorphism" effects.

---

## 2. Architecture & File Structure
**Refactoring Target:** Clean Architecture focused on Next.js App Router patterns.

### Directory Structure
```text
src/
├── app/
|   |--css/                     # Tailwind CSS Config & Customizations
|      |--globals.css           # Global styles and Tailwind directives
│   ├── layout.tsx              # Root Layout (SSR - Html, Body, Fonts, Metadata)
|   |-- manifest.ts             # PWA Manifest configuration
│   ├── page.tsx                # Landing Page (SSR - Components Assembly)
│   ├── sitemap.ts              # Dynamic Sitemap generation
│   ├── robots.ts               # Robots.txt configuration
├── components/
│   ├── layout/                 # Organisms: Navbar, Footer
│   └── sections/               # Templates: Hero, About, Portfolio, Contact
└── public/
    └── assets/                 # Optimized images (WebP/AVIF only)