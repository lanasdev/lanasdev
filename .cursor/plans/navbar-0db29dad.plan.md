<!-- 0db29dad-9e66-43bf-9743-13c36c2df07e e2e249b7-273b-49d1-9650-d0bff92843ef -->
# Scroll-Linked Navbar Border

1. Hook Scroll Progress

- Import `useScroll`/`useSpring` from `motion/react` in `app/Navbar.tsx` and derive a smoothed scroll progress value.

2. Measure Navbar Dimensions

- Attach a `ref` to the `nav`, capture width/height via `ResizeObserver`, and store the pill's perimeter for stroke math.

3. Render Animated Border

- Overlay an absolutely positioned `motion.svg` around the nav, using `strokeDasharray`/`strokeDashoffset` driven by the scroll progress so the outline draws from 0 to full length.