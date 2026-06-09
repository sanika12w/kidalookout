# Animation Guide: KidaLookout Redesign

This document outlines the animation timing, easing profiles, and floating depth parameters.

---

## 1. Custom Easing Curve
All animations use a custom exponential deceleration curve:
- **Expo Out**: `[0.16, 1, 0.3, 1]`
This matches Apple-style physical decelerations, starting rapidly and tapering off to rest.

---

## 2. Animation Specs

### Scroll Reveals
- **Properties**: `opacity: 0 → 1`, `y: 40px → 0px`
- **Duration**: `0.8s`
- **Easing**: Custom Expo Out
- **Observer Viewport Offset**: `100px` from viewport boundary.

### Floating Product Stage (5 Layers)
- **Central Device (Layer 4)**: Slides up on mount (`duration: 1.2s`, `y: 40px → 0px`).
- **Layer 1 (Push notification)**:
  - Base values: `opacity: 0.18`, `scale: 0.9`
  - Translate y-loop: `[20px, 10px, 20px]` (duration `6.0s`, ease `easeInOut`, infinite).
  - Blur filter: `blur(3px)`
- **Layer 2 (Flight status card)**:
  - Base values: `opacity: 0.45`, `scale: 0.95`
  - Translate y-loop: `[40px, 25px, 40px]` (duration `5.5s`, ease `easeInOut`, infinite, delay `0.5s`).
  - Blur filter: `blur(1.5px)`
- **Layer 3 (Airport metrics)**:
  - Base values: `opacity: 0.8`, `scale: 0.98`
  - Translate y-loop: `[60px, 50px, 60px]` (duration `7.0s`, ease `easeInOut`, infinite, delay `1.0s`).
  - Blur filter: `blur(0px)`
- **Layer 5 (Live Activities banner)**:
  - Base values: `opacity: 1.0`, `scale: 1.02`
  - Translate y-loop: `[80px, 70px, 80px]` (duration `5.0s`, ease `easeInOut`, infinite, delay `1.5s`).
  - Blur filter: `blur(0px)`

### Travel Path Drawing
- **Property**: SVG `stroke-dasharray` / `pathLength`
- **Animation**: `pathLength: 0 → 1`
- **Duration**: `2.0s` to `2.5s`
- **Easing**: `easeInOut`
- **Delay**: Staggered starts (`0.2s` London, `0.5s` Tokyo).

---

## 3. Performance & GPU Easing
1. **Transform Target**: All translation vectors map to `transform: translateY()` or `transform: translateX()`, avoiding paint recalculations.
2. **GPU Layers**: Floating cards utilize CSS `will-change: transform` indirectly via Framer Motion, enabling hardware acceleration.
3. **Passive Scrolling**: Custom scroll bindings operate outside of layout-blocking main threads.
