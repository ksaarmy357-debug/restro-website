## 2026-03-30 - Accordion Button Icon Transformations with Dynamic Lucide SVG Replacement

**Learning:** When converting `div`-based accordion headers to standard `<button>` elements, Lucide replaces `<i>` elements with `<svg>` elements dynamically at runtime. CSS transitions targeting `.accordion-header i` will fail once Lucide transforms the DOM to `<svg>`, causing icon rotation animations (like `+` turning into `x`) to break silently.
**Action:** Always include both `i` and `svg` in CSS selectors (e.g., `.accordion-header i, .accordion-header svg`) for elements rendered via Lucide or similar icon libraries.
