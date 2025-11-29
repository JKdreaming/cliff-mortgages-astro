# React-to-Astro Migration Runbook

This document captures the exact sequence we followed to migrate the Cliff Mortgages marketing site from the legacy React implementation to Astro. Use it as a playbook to reproduce the migration or to onboard new contributors.

---

## 1. Repository Preparation

1. Clone the repo that contains both codebases (`React Site/` and `Astro Site/`).
2. Work from the `Astro Site/` directory for all commands.
3. Install dependencies and confirm the project builds:
   ```bash
   npm install
   npm run build
   ```

---

## 2. Astro Project Setup (if starting fresh)

The project already existed, but a fresh setup would include:

1. `npm create astro@latest` → choose the minimal template.
2. Add integrations:
   ```bash
   npm install @astrojs/react tailwindcss @tailwindcss/vite
   ```
3. Configure `astro.config.mjs`:
   ```js
   import { defineConfig } from 'astro/config';
   import tailwindcss from '@tailwindcss/vite';
   import react from '@astrojs/react';

   export default defineConfig({
     vite: { plugins: [tailwindcss()] },
     integrations: [react()],
   });
   ```

---

## 3. Shared Assets & Data

1. Copy the React assets into Astro:
   - Images → `src/assets/images/`
   - Public files (favicon, social share, sitemap, robots) → `public/`
2. Create shared data modules to centralize metadata:
   - `src/data/imageAssignments.ts`
   - `src/data/sitemap.ts`
   - Type definitions in `src/data/types.ts`
3. Add Tailwind + overrides via `src/styles/global.css` and import it once inside `BaseLayout.astro`.

---

## 4. Layout & Shared Components

1. Port reusable React components as needed:
   - `Header.tsx`, `Footer.astro`, `GenericHero.astro`, `FAQBlock.tsx`, `ApplyNowCTA.tsx`, calculators, and program section components.
2. Create `src/layouts/BaseLayout.astro` to:
   - Render shared header/footer/CTA.
   - Inject SEO metadata, canonical tags, and JSON-LD schemas.
   - Import global CSS.
   - Load Google Analytics and the Widget Tracker scripts.
   - Attach the global `[data-track-event]` click handler.

---

## 5. Page Migration Checklist

For each page we:

1. Added a record in `allPageData` with title, description, hero image, breadcrumbs, FAQs, etc.
2. Created an `.astro` page that imports `BaseLayout` and references the data entry.
3. Reproduced the original JSX structure using Astro + Tailwind.

| Route | Astro File | Notes |
|-------|------------|-------|
| `/` | `src/pages/index.astro` | All hero blocks, program grids, calculators, testimonials, Equity Select banner background via `backgroundImageAssignments`. |
| `/about` | `src/pages/about.astro` | Uses shared components and data. |
| `/about/cindy-cliff` | `src/pages/about/cindy-cliff.astro` | Mirrors Cindy profile content and imagery. |
| `/contact` | `src/pages/contact.astro` | Calendly iframe embed. |
| `/get-a-quote` | `src/pages/get-a-quote.astro` | FormCan widget with GA event tracking. |
| `/legal/privacy-policy` | `src/pages/legal/privacy-policy.astro` | Full policy text, last updated timestamp. |
| `/legal/accessibility` | `src/pages/legal/accessibility.astro` | Accessibility statement plus contact info. |
| `/loan-programs` | `src/pages/loan-programs.astro` | Marketing cards fed by `allPageData`. |
| `/loan-programs/[slug]` | `src/pages/loan-programs/[slug].astro` | Dynamic program detail pages (benefits, how-it-works, etc.). |

---

## 6. Analytics & Third-Party Scripts

1. Added Google Analytics (`G-JVKXY96FFH`) to the `<head>` of `BaseLayout.astro`.
2. Injected the Widget Tracker CRM snippet inline inside `Footer.astro`.
3. Hooked global click tracking for `[data-track-event]` attributes in the same layout.

---

## 7. Styling Parity

1. Ensured Tailwind is bundled by importing `global.css` in `BaseLayout`.
2. Reused Tailwind utilities from the React implementation.
3. Verified hero/background imagery:
   - Home hero uses `GenericHero`.
   - Equity Select banner uses `backgroundImageAssignments.homeEquitySelectBanner` with quoted `url('...')` syntax.
   - Centers supporting content via flex utilities (e.g., `flex items-center`).

---

## 8. Build & Static Verification

1. Development server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321/`.
2. Production build:
   ```bash
   npm run build
   ```
3. Serve static output for QA:
   ```bash
   npx serve dist
   ```
   (Serve from `Astro Site/` so `/_astro/...` assets resolve.)

---

## 9. Git Workflow

1. Stage and commit changes inside `Astro Site/`:
   ```bash
   git add -A
   git commit -m "chore: migrate Cliff Mortgages site to Astro"
   ```
2. Connect to GitHub:
   ```bash
   git remote add origin https://github.com/JKdreaming/cliff-mortgages-astro.git
   git pull --rebase origin main
   git push -u origin main
   ```

---

## 10. Deployment (Vercel)

1. Push the repo to GitHub.
2. In Vercel, create a project → import the repo.
3. Confirm build settings:
   - Install: `npm install`
   - Build: `npm run build`
   - Output: `dist`
4. Deploy and verify preview link.
5. Add custom domain under **Settings → Domains** if required.

---

## 11. Ongoing Maintenance Tips

- When adding new pages, update `imageAssignments`, `sitemap`, and create the matching `.astro` file.
- Place new global scripts in `BaseLayout` (head) or `Footer`.
- Keep `npm run build` clean before committing.
- For static checks, run `npx serve dist` instead of opening `dist/index.html` directly.

---

## 12. Troubleshooting

- **Missing styles** → ensure `BaseLayout` imports `../styles/global.css`.
- **Missing background images** → wrap inline `background-image` URLs with quotes.
- **Widget missing** → confirm the CRM snippet is still inside `Footer.astro`.
- **GA events not firing** → confirm `[data-track-event]` attributes exist and GA snippet loads.

---

## 13. Quick Command Reference

```bash
# install & run
git clone <repo>
cd "Astro Site"
npm install
npm run dev
npm run build
npx serve dist

git add -A
git commit -m "chore: migrate Cliff Mortgages site to Astro"
git push -u origin main
```

---

Keep this document updated as new pages, scripts, or deployment steps are added.
