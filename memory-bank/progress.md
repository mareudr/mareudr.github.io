# Project Progress

## Purpose

This file summarizes implementation status and key context so a future AI agent can resume work quickly without re-discovering project decisions.

## Current Status

### Completed

- Read and normalized the product requirements in `memory-bank/design-document.md`
- Created `memory-bank/implementation-plan.md`
- Bootstrapped the project with Astro 5, Tailwind 3, TypeScript, and pnpm
- Added bilingual content collections and placeholder content/assets
- Built the shared site shell (layouts, SEO, navigation, social links)
- **Redesigned Hero:** Full-width banner with "Maria E. Da Ré" in custom "Le Jour Script" font, white text, and dark overlay.
- **Redesigned Header:** Replaced title with "María E. Da Ré" in "Le Jour Script" font and removed tagline.
- **Improved Projects:**
  - Index pages with client-side category and tag filtering.
  - Dynamic detail routes with Image Gallery and Before/After Slider.
  - **Mobile Optimization:** Reordered project info to the top on mobile.
  - **Typography:** Significantly increased paragraph spacing (2rem) and optimized heading proximity (0.75rem).
  - **Tag UI:** Updated tags to white text on neutral-600 background for better contrast.
- **Bilingual Polish:** Added Spanish translations for image tags (antes, después, etc.) and localized date formatting.
- **Navigation:** Configured root path to redirect to `/es/`.
- **Blog:** Implemented index and dynamic detail routes with empty-state support.
- **Contact:** Implemented dedicated bilingual Contact pages with static details.
- **RSS:** Added combined bilingual RSS route (`/rss.xml`).
- **Infrastructure:**
  - Installed and configured `@tailwindcss/typography` plugin.
  - Added GitHub Actions deployment workflow.
  - Setup custom font support for "Le Jour Script" (OTF).

### Verified

- `pnpm check` passes with 0 errors and 0 warnings.
- `pnpm build` passes successfully.
- Site builds 23 static pages plus RSS and sitemap.
- Mobile menu z-index issues resolved (header set to z-50).
- Slider dragging/selection issues resolved.

## Remaining Work

### Next high-priority steps

- Final SEO and accessibility QA.
- Revisit typography and spacing polish after full page implementation.

### Medium-priority steps

- Add JSON-LD component for structured data.
- Add project gallery component (refined lightbox behavior).

## Important Project Decisions

- **Root Redirect:** Site now defaults to Spanish (`/es/`).
- **Visual Identity:** Primary focus on the custom script font "Le Jour Script" for the artist's name.
- **Bilingual:** English (`/en/`) and Spanish (`/es/`) routes maintained.
- **Content:** Managed via Astro Content Collections.
- **Projects:** Opt-in before/after comparison via frontmatter.

## Important Technical Decisions

- **Stack:** Astro 5, Tailwind 3, Tailwind Typography.
- **Typography Plugin:** Used for markdown content rendering.
- **Custom Fonts:** "Le Jour Script" loaded via `@font-face` in `global.css`.
- **Client-side JS:** Minimized, used only for critical interactions (menu, filtering, slider, lightbox).

## Important File References

- Shared copy/config: `src/data/site.ts`
- Content schema: `src/content.config.ts`
- UI Components:
  - `src/components/ui/BeforeAfterSlider.astro`
  - `src/components/ui/ImageGallery.astro`
  - `src/components/ui/ProjectCard.astro`
  - `src/components/ui/BlogCard.astro`
- RSS Feed: `src/pages/rss.xml.ts`
- Deployment: `.github/workflows/deploy.yml`

## Cautions For Future Agents

- **Font Loading:** "Le Jour Script" uses an OTF file; ensure filename matches exactly in `global.css`.
- **Prose Spacing:** Paragraph spacing is forced via global CSS in project templates to override defaults.
- **Z-Index:** Header is at z-50 to stay above the absolute-positioned Hero.

## Definition Of Done For Current Milestone

The current milestone is complete because:

- All bilingual pages are implemented with real layouts and content.
- Hero and Header match the requested high-impact visual style.
- Markdown content is readable with proper vertical spacing.
- Core interactive features are verified and optimized for mobile.
- Build and deployment infrastructure are ready.
