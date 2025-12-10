# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-12-11

### Refined
- **UI/UX Overhaul:** Implemented a completely new "Modern Minimalist" design language.
    - **Color Palette:** Switched to a refined Indigo (`primary`) and Slate (`dark`) color scheme.
    - **Typography:** Adopted `Inter` for body text and `Plus Jakarta Sans` for headings.
    - **Visuals:** Added glassmorphism effects to the Navbar and subtle gradients/blurs to the Landing page.
- **Blog Page:** Complete structural re-design.
    - Added a search bar for filtering posts.
    - Implemented a responsive card-based grid layout with hover effects.
    - Improved typography and readability for individual blog posts.
- **Components:**
    - **Navbar:** Sticky, glassmorphic design with a refined mobile menu.
    - **Footer:** Updated social links (GitHub -> `spandzz`, added LinkedIn) and layout.
    - **Landing:** Modernized hero section with animated entry and background blur effects.
    - **Contact:** Cleaned up the form design with better input states and feedback.
- **Performance:**
    - Optimized font loading strategy in `_document.tsx`.
    - Enforced `next/image` usage for LCP/CLS optimization.
    - Ensured consistent use of `swcMinify`.

### Fixed
- Updated GitHub URL to `https://github.com/spandzz`.
- Added LinkedIn URL `https://www.linkedin.com/in/sehgalspandan/`.
- Standardized spacing and container widths across all pages.

## [1.0.0] - 2025-12-11

### Added
- **Global Layout:** Implemented a unified layout component in `_app.tsx` reducing code duplication.
- **Dark Mode:** Added system-aware dark mode using `next-themes` with a toggle in the Navbar.
- **SEO Engine:** Integrated `next-seo` for managing meta tags, OpenGraph, and Twitter cards globally and per-page.
- **Sitemap Generator:** Added `next-sitemap` to automatically generate `sitemap.xml` and `robots.txt` on build.
- **Animations:** Integrated `framer-motion` for smooth page transitions and component animations (Landing, Skills, Projects).
- **Icons:** Replaced images/text with `react-icons` for scalable, accessible vector icons.
- **TypeScript:** Migrated key components (`Navbar`, `Footer`, `Layout`, `Projects`, `Blog`, `Contact`) to TypeScript (`.tsx`) for better type safety.
- **Data Layer:** Created `lib/data.ts` to centralize data fetching for Projects and Blog posts.

### Changed
- **Navigation:**
    - Replaced `<a>` tags with `next/link` for client-side transitions (no full page reloads).
    - Added a responsive Hamburger menu for mobile devices.
    - Implemented a sticky glassmorphism header.
- **Project Structure:**
    - Refactored `components/` to follow consistent naming conventions (e.g., `Navbar.tsx`, `Footer.tsx`).
    - Standardized page structure to use `getStaticProps` for better performance (SSG).
- **Styling:**
    - Updated `globals.css` to remove inefficient font imports and added clean Tailwind typography classes.
    - Implemented a consistent color palette (Gray/Blue) for both light and dark modes.
- **Performance:**
    - Replaced standard `<img>` tags with `next/image` for automatic optimization.
    - optimized font loading in `_document.tsx`.

### Fixed
- Fixed broken internal linking that caused full page refreshes.
- Fixed accessibility issues (added `aria-label`s, semantic HTML structure).
- Fixed `404` page design and layout.
