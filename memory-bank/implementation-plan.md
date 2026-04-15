# Artist/Restorer Portfolio Website - Implementation Plan

## Purpose

This document translates `memory-bank/design-document.md` into an execution plan with clear phases, deliverables, and acceptance criteria.

## Confirmed Product Scope

- Launch pages:
  - Home
  - About
  - Projects
  - Blog
  - Contact
- Homepage sections:
  - Top navigation
  - Hero with project images
  - Short about section
  - Two latest blog posts
  - Contact section
- Initial content:
  - Placeholder copy and placeholder entries
- Languages:
  - English
  - Spanish
- Contact:
  - No form in V1
  - Static contact information and social links only
- Social links:
  - Instagram
  - Email
  - LinkedIn
  - Behance
- Deployment target:
  - `https://mareudr.github.io/`
- Before/after comparison:
  - Only on selected projects
- Blog:
  - May launch empty
- Projects filtering:
  - Category and tag filtering
- Visual direction:
  - Use the design token values from Section 6 of `design-document.md`
  - Prefer the greener palette direction

## Recommended Implementation Decisions

### Routing

Use explicit locale-prefixed routes:

- `/en/`
- `/es/`

Recommended page structure:

- `src/pages/en/index.astro`
- `src/pages/en/about.astro`
- `src/pages/en/contact.astro`
- `src/pages/en/projects/index.astro`
- `src/pages/en/projects/[...slug].astro`
- `src/pages/en/blog/index.astro`
- `src/pages/en/blog/[...slug].astro`
- `src/pages/es/index.astro`
- `src/pages/es/about.astro`
- `src/pages/es/contact.astro`
- `src/pages/es/projects/index.astro`
- `src/pages/es/projects/[...slug].astro`
- `src/pages/es/blog/index.astro`
- `src/pages/es/blog/[...slug].astro`

### Content collections

Use separate Astro content collections per locale:

- `projectsEn`
- `projectsEs`
- `blogEn`
- `blogEs`

This keeps validation straightforward and avoids locale conditionals inside single files.

### Project comparison support

Comparison should be opt-in. Add optional comparison metadata to project frontmatter and render the slider only when:

- the project explicitly enables it
- compatible before/after images exist

### Empty-state handling

Blog can be empty at launch, so the UI must not assume posts exist.

- Blog index pages need a polished empty state
- Homepage latest-posts block should gracefully fall back to a "coming soon" style message

## Phase 1 - Bootstrap Astro project

### Tasks

- Replace the current plain HTML/CSS structure with an Astro project
- Initialize `pnpm`
- Install:
  - `astro`
  - `tailwindcss`
  - `@astrojs/tailwind`
  - `@astrojs/sitemap`
  - `@astrojs/rss`
  - `typescript`
- Configure Astro, Tailwind, and TypeScript strict mode

### Deliverables

- `package.json`
- `astro.config.mjs`
- `tailwind.config.mjs`
- `tsconfig.json`
- `src/styles/global.css`

### Acceptance criteria

- `pnpm install` completes
- `pnpm astro check` passes
- `pnpm build` succeeds

## Phase 2 - Set up design system foundations

### Tasks

- Implement the canonical color tokens from the design document
- Register local fonts
- Build baseline typography, spacing, and container utilities
- Define global link, button, card, and section styles

### Deliverables

- Updated Tailwind theme
- Global CSS with font-face declarations and base styles

### Acceptance criteria

- Colors in use match the canonical token table
- Typography hierarchy is visible on desktop and mobile

## Phase 3 - Build bilingual content architecture

### Tasks

- Create `src/content/config.ts`
- Define schemas for bilingual project and blog collections
- Add placeholder entries in both languages
- Include optional comparison metadata in projects

### Deliverables

- `src/content/config.ts`
- `src/content/projects-en/*`
- `src/content/projects-es/*`
- `src/content/blog-en/*`
- `src/content/blog-es/*`

### Acceptance criteria

- Content validation succeeds
- Both locales can render at least one placeholder project
- Blog works with zero posts

## Phase 4 - Build shared layout and navigation

### Tasks

- Implement base layout
- Implement header, footer, navigation, mobile menu, language switcher, and social links
- Add reusable SEO head component

### Deliverables

- `src/layouts/BaseLayout.astro`
- `src/components/layout/*`
- `src/components/seo/*`
- `src/components/ui/SocialLinks.astro`

### Acceptance criteria

- Shared shell is consistent across all pages
- Desktop and mobile navigation both work
- Language switching is clear and predictable

## Phase 5 - Implement homepage

### Tasks

- Build hero using project imagery
- Add short about preview
- Add latest blog posts block with empty-state support
- Add contact/social section

### Deliverables

- `src/pages/en/index.astro`
- `src/pages/es/index.astro`
- Hero and content preview components

### Acceptance criteria

- Homepage section order matches product requirements
- Latest posts section does not break when blog is empty

## Phase 6 - Implement About and Contact pages

### Tasks

- Build static About pages in both languages
- Build static Contact pages in both languages
- Add placeholder email and social links

### Deliverables

- Locale-specific About and Contact pages

### Acceptance criteria

- No contact form is present
- Contact information is accessible and easy to find

## Phase 7 - Implement Projects listing and detail pages

### Tasks

- Build projects index pages
- Add category and tag filtering
- Build dynamic project detail routes
- Build image gallery
- Build optional before/after slider

### Deliverables

- `src/pages/*/projects/index.astro`
- `src/pages/*/projects/[...slug].astro`
- `ProjectCard.astro`
- `ImageGallery.astro`
- `BeforeAfterSlider.astro`

### Acceptance criteria

- Filtering works by category and tag
- Project detail pages render markdown and images correctly
- Slider renders only for selected projects

## Phase 8 - Implement Blog pages and RSS

### Tasks

- Build blog index pages
- Build blog post pages
- Implement locale-aware empty states
- Generate RSS feed

### Deliverables

- `src/pages/*/blog/index.astro`
- `src/pages/*/blog/[...slug].astro`
- `src/pages/rss.xml.ts`

### Acceptance criteria

- Blog pages work with content and without content
- RSS generation does not break builds

## Phase 9 - SEO, accessibility, and responsive QA

### Tasks

- Add page metadata
- Add Open Graph tags
- Add JSON-LD where useful
- Verify color contrast, heading order, keyboard access, and mobile layout

### Deliverables

- Final SEO components and QA fixes

### Acceptance criteria

- Pages have unique titles and descriptions
- Mobile navigation and slider are keyboard-usable
- Core layouts work on desktop and mobile

## Phase 10 - Deployment and documentation

### Tasks

- Configure GitHub Actions deployment for GitHub Pages
- Set `site` to `https://mareudr.github.io`
- Document local development and deployment in `README.md`

### Deliverables

- `.github/workflows/deploy.yml`
- Updated `README.md`

### Acceptance criteria

- Production build is deployable to GitHub Pages
- Project setup is documented clearly

## Recommended Execution Order

1. Bootstrap Astro project
2. Implement design system foundations
3. Build bilingual content collections
4. Build shared layout and navigation
5. Build homepage
6. Build About and Contact pages
7. Build Projects pages
8. Build Blog pages and RSS
9. Run SEO, accessibility, and responsive QA
10. Finalize deployment and documentation

## Definition of Done

V1 is complete when:

- The site is built with Astro, Tailwind, and strict TypeScript
- English and Spanish versions of all launch pages exist
- Homepage includes the required sections
- Projects support category/tag filtering
- Selected projects support before/after comparison
- Blog handles empty states cleanly
- Contact is static and form-free
- The site builds and deploys to `https://mareudr.github.io/`
