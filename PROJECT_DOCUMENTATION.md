# Project Documentation: KidaLookout Redesign (Flighty-Inspired)

This document provides details on the Apple Design Award-level visual overhaul, strict spacing grids, typography hierarchy, and storytelling narrative of KidaLookout.

---

## 1. Project Overview
KidaLookout is a premium, product-first SaaS marketing website designed in the exact style of Flighty.com. It is characterized by luxurious white breathing room, bold black headlines, soft gray backgrounds, a single accent color (aviation green), and a multi-layered product stage that creates a feeling of physical depth.

---

## 2. Design Benchmarks
- **Monochromatic Light Theme**: Soft light gray background (`#F5F5F7`), pure black headlines (`#000000`), and dark charcoal body copy (`#51525A`).
- **Restraint**: Complete removal of unnecessary visual noise (colored borders, decorative glows, and generic gradient backgrounds).
- **Premium Elevation**: Large, soft-blur shadows (`shadow-premium` / `shadow-navbar`) that raise cards off the page.

---

## 3. Strict Typography System
- **Hero Title**: `110px` (`text-7xl lg:text-[110px]`, line-height `1.05`, tracking `-0.03em`, black).
- **Section Title**: `56px` (`text-4xl lg:text-[56px]`, line-height `1.15`, tracking `-0.02em`, black).
- **Card Title**: `24px` (`text-xl lg:text-[24px]`, line-height `1.25`, tracking `-0.01em`, black).
- **Body Copy**: `19px` (`text-lg lg:text-[19px]`, line-height `1.6`, charcoal `#51525A`).
- **Labels**: `15px` (`text-sm lg:text-[15px]`, tracking `0.05em`, uppercase, bold).

---

## 4. Expansive Spacing System
- **Section Padding**: `py-44 lg:py-56` (180px - 240px equivalent) to maximize vertical breathing room.
- **Headline Gaps**: `mb-10 lg:mb-12` (32px - 48px equivalent).
- **Content Gaps**: `mt-12 lg:mt-16` (48px - 64px equivalent).

---

## 5. Storytelling Layout Journey
1. **Navbar**: Floating pill container, centered navigation, and solid black CTA button.
2. **Hero (Product Stage)**: Constraint headlines and a large centered device surrounded by 5 layers of depth-blurred cards.
3. **Problem ("Why parents miss signals")**: Real-world flight delay scenarios showing why current airline notifications fail.
4. **Monitoring ("Real-time engine")**: Clean calendar synchronization and email forwarding wizard.
5. **Alerts ("Intelligent prediction")**: Runway air traffic control slotting timelines.
6. **Coordination ("Family share")**: Minimal status sharing boards.
7. **History ("Historical insights")**: Thin animated vector flight arcs on a light Mercator grid.
8. **Airport Intelligence Radar**: Launchable overlay modal displaying runway taxi times and terminal status logs.
9. **Trust & Credibility**: Monochromatic certificate credentials.
10. **Testimonials**: Pilot reviews.
11. **CTA & Footer**: Takeoff triggers and site link columns.

---

## 6. Build Instructions
Install dependencies:
```bash
npm install
```
Start development server:
```bash
npm run dev
```
Build optimized production package:
```bash
npm run build
```
