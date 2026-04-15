# Artist/Restorer Portfolio Website - Design Document

## Document Purpose

This document is the single source of truth for building the website. If an implementation detail is ambiguous, follow this document over assumptions.

## 1. Project Overview

**What:** A static portfolio website for a professional artist and restorer.

**Purpose:** Showcase restoration and art projects, publish occasional blog updates, provide contact information, and establish a professional online presence.

**Audience:** Potential clients such as churches, museums, private collectors, fellow professionals, and general visitors interested in art restoration.

**Tone:** Professional, refined, understated. The work should carry the visual emphasis, while the personal identity is presented with elegant custom typography.

## 2. Confirmed Scope

- Launch pages: Home, About, Projects, Blog, Contact.
- Languages: English (`/en/`) and Spanish (`/es/`). Default: `/es/`.
- Interactive: Before/After slider (opt-in), Image gallery with lightbox, Project filtering.
- Visual Identity: "Maria E. Da Ré" presented in "Le Jour Script" font.
- Deployment: GitHub Pages via GitHub Actions.

## 3. Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Astro | 5.x | Static site generator |
| Tailwind CSS | 3.x | Styling |
| Tailwind Typography | 0.5.x | Markdown rendering |
| TypeScript | Strict mode | Type safety |
| Sharp | Current | Image optimization |
| GitHub Pages | Current | Hosting |

## 4. Visual Language

### 4.1 Typography

- **Artist Name / Branding:** "Le Jour Script" (Custom Font).
- **Headings:** "Cormorant Garamond" (Serif).
- **Body / Navigation:** "Inter" (Sans-serif).
- **Project Content Spacing:** Forced 2rem vertical spacing between paragraphs; 0.75rem spacing after headings.

### 4.2 Color Palette

- **Brand:** `#6e8894` (Brand-500), `#5e7681` (Brand-600).
- **Neutral:** `#1c1917` (Text), `#44403c` (Soft Text), `#e7e5e4` (Border), `#ceeddb` (Page Background).
- **Contrast:** White text used for Hero title and Project tags (on dark background).

### 4.3 Hero Section

- Full-width, high-impact horizontal image.
- Centered name "Maria E. Da Ré" in white "Le Jour Script" font.
- Subtle dark overlay (20% opacity) for readability.

## 5. Routing and Localization

- Locale-prefixed routes: `/en/` and `/es/`.
- Root path (`/`) redirects to `/es/`.
- Bilingual content collections: `projects-en`, `projects-es`, `blog-en`, `blog-es`.

## 6. Page Requirements

### 6.1 Home
- Impactful Hero banner.
- Short About preview.
- Latest Projects (Featured).
- Latest Blog posts (with empty state).
- Static Contact block.

### 6.2 Projects
- Client-side filtering by category and tags.
- Detail pages: Reordered for mobile (Title/Summary at top).
- Opt-in Before/After comparison slider.
- Responsive Image Gallery with translated tags (antes, después, etc.).

### 6.3 Blog
- Clean index with publication dates.
- Prose-optimized detail pages.
- RSS feed at `/rss.xml`.

## 7. SEO and Performance
- Per-page metadata.
- Sitemap generation.
- Automated image optimization via Astro/Sharp.
- 100/100 performance goal via static output.
