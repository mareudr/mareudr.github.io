# Artist & Restorer Portfolio - Maru

A professional bilingual portfolio website built with **Astro 5**, **Tailwind CSS 3**, and **TypeScript**.

## 🚀 Project Overview

This website showcases restoration, conservation, and original art projects. It features a bilingual structure (English and Spanish) and is designed with a focus on visual clarity and process documentation.

### Key Features
- **Bilingual Support:** Full localization for English (`/en/`) and Spanish (`/es/`) routes.
- **Content Collections:** Structured project and blog data managed via Markdown.
- **Project Filtering:** Client-side filtering by category and tags.
- **Interactive Modules:** Before/after image slider and responsive image gallery with lightbox.
- **SEO Optimized:** Per-page metadata, sitemap generation, and RSS feed.
- **Fast Performance:** Static site generation for near-instant loading.

## 🛠 Tech Stack

- **Framework:** [Astro 5](https://astro.build/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Image Optimization:** [Sharp](https://sharp.pixelplumbing.com/)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

## 📂 Project Structure

```text
/
├── src/
│   ├── assets/       # Optimized images (projects, blog, hero)
│   ├── components/   # Reusable UI and Layout components
│   ├── content/      # Markdown files for projects and blog
│   ├── data/         # Shared site copy and configuration (site.ts)
│   ├── layouts/      # Base layouts for pages
│   └── pages/        # Locale-prefixed route structure
├── public/           # Static assets (fonts, icons)
├── astro.config.mjs  # Astro configuration
└── tailwind.config.mjs # Tailwind design tokens
```

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mareudr/mareudr.github.io.git
   cd mareudr.github.io
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:4321/`.

4. **Type-check and lint:**
   ```bash
   pnpm check
   ```

5. **Build for production:**
   ```bash
   pnpm build
   ```

## 📝 Managing Content

The site uses Astro Content Collections. To add new content:

### 🎨 Adding a Project
1. Add images to `src/assets/images/projects/`.
2. Create a new `.md` file in `src/content/projects-en/` and `src/content/projects-es/`.
3. Use the required frontmatter schema (see `src/content.config.ts`).
4. To enable the **Before/After Slider**, ensure you include images with `type: "before"` and `type: "after"` and set `comparison: { enabled: true }` in the frontmatter.

### ✍️ Adding a Blog Post
1. Add a thumbnail to `src/assets/images/blog/`.
2. Create a new `.md` file in `src/content/blog-en/` and `src/content/blog-es/`.
3. Fill in the title, date, and summary in the frontmatter.

## 🚢 Deployment

This project is configured for **GitHub Pages**.

- **Automatic Deploy:** Any push to the `main` branch triggers a GitHub Action that builds and deploys the site.
- **Target URL:** [https://mareudr.github.io/](https://mareudr.github.io/)

---
Built with restraint by Maru.
