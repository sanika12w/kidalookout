# Application Flow: KidaLookout Redesign

This document detail the interactive journeys, scroll intersections, and rendering cycles of the website.

---

## 1. User Journey Flow
1. **Pill Navigation**: The user starts at the top with a floating, narrow pill-shaped Navbar containing centered links and a solid black CTA.
2. **Hero Stage Interaction**: The user views a massive centered title and trust badges, and can toggle between "On Time" and "Delayed" states inside a device mockup. The mockup is surrounded by 4 floating depth cards (notifications, schedules, runway metrics) which float on separate translation loops.
3. **Problem Exposition ("Why parents miss signals")**: As they scroll, they enter a bento grid explaining three real-world travel failures.
4. **Monitoring Setup ("Real-time engine")**: The user simulates calendar sync and email forward setups inside a clean white wizard container.
5. **Intelligent Alerts**: The user explores runway air traffic control timelines and delays.
6. **Family Coordination**: Clicking family list members displays live route statistics and flight progress sliders on the dashboard.
7. **History Plotting**: The user views travel stats (orbits, flights) alongside animated flight path arcs drawn on a light mercator grid.
8. **Airport Overlay**: Launches a full-screen overlays dashboard to check taxi-out runway times and local terminal logs.
9. **Testimonials & Downloads**: Reviews pilot ratings, design certificates, and hits the primary black download trigger.

---

## 2. Scroll Interactions & Rendering
- **Lenis Smooth Scroll**: Translates scroll impulses into a smooth inertia easing curve, ensuring fluid section transitions.
- **Scroll Reveals**: Intersection observers inside `ScrollReveal` trigger staggered fade-up translations (`y: 40px → 0px`, `duration: 0.8s` with expo ease).
- **Parallax Offset**: Background cards translate at a slower offset relative to the central device to simulate physical depth.
- **Body Freeze**: Opening the Airport modal sets `overflow: hidden` on the HTML body.
