# Theme & Design System Documentation

## Overview
This document outlines the unified design system for **Shreekumar Builders** and its security sub-brand, **Sabari Security Service**. The architecture uses a shared Next.js 14 App Router foundation, dynamically swapping themes based on the active route using a custom hook (`useBrand`).

## 1. Brand Identities

### Shreekumar Builders (Primary)
- **Domain:** Electrical & Plumbing contracting
- **Vibe:** Trustworthy, warm, established, professional
- **Core Colors:**
  - `brand`: Warm gradient base (used in `gradient-brand` utility)
  - `voltage`: `#F59E0B` (Amber/Yellow for electrical accents)
  - `copper`: `#D97706` (Plumbing accents)
  - `graphite`: `#1F2937` (Primary text and high-contrast elements)
  - `warm-white`: `#F9FAFB` (Backgrounds)
- **Layout Usage:** Bright, approachable, using `gradient-brand` for heroes and key sections.

### Sabari Security Service (Sub-brand)
- **Domain:** CCTV, Monitoring, Alarms, Access Control
- **Vibe:** High-tech, secure, vigilant, modern
- **Core Colors:**
  - `security-primary`: `#020617` (Deep slate/black for backgrounds)
  - `security-accent`: `#3B82F6` (Electric blue for CTAs and highlights)
  - `warm-white`: `#F8FAFC` (High contrast text on dark backgrounds)
- **Layout Usage:** Dark mode aesthetics. The `/security` route stack automatically triggers these variables.

## 2. Core Architecture

### `useBrand` Hook
The `useBrand` hook (`lib/useBrand.ts`) is the central theme orchestrator. It uses `usePathname()` to detect if the user is currently navigating within the `/security/*` route group.
- **Returns:** `isSecurity` (boolean), `brand` (string), `config` (object containing active brand info from `site-config.ts`).
- **Note:** Avoid using `useBrand` inside Server Components. Pass theming props (like `bgImage` or `bgOverlay`) down from the page level to shared components (like `Hero` or `CTASection`) to prevent hydration mismatches during static export/build.

### Shared Components
- **`Button`:** Uses `@radix-ui/react-slot` conceptually, but implemented via `React.cloneElement` in `components/ui/button.tsx` to safely handle `asChild` composition without strict child limitations during SSG.
- **`SectionBackground`:** Handles optimized `next/image` background imagery with configurable overlay opacities (e.g., `bg-graphite/80` or `bg-security-primary/90`).
- **`Hero` & `CTASection`:** Accept explicit background images and overlay styles as props, completely decoupled from client-side route tracking.

## 3. Typography
The project uses a curated Google Fonts stack configured in `app/layout.tsx`:
- **Display:** `Space Grotesk` (`font-display`) — Used for bold, modern headings.
- **Body:** `Inter` (`font-body`) — Used for high-legibility paragraphs and UI text.
- **Mono:** `IBM Plex Mono` (`font-mono`) — Used for technical specs, numbers, and subtle accents.

## 4. Best Practices for Future Development
1. **Never use raw color values.** Always use the semantic tokens defined in `tailwind.config.ts`.
2. **Avoid Hydration Errors.** When building shared sections that look different per brand, prefer passing the visual styles down as props from the Server Component (page) rather than checking `useBrand()` inside the section.
3. **Keep `asChild` clean.** When using `<Button asChild>`, ensure you only wrap a single valid React element (like a `<Link>`) inside the button to ensure standard HTML nesting.
