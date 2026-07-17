## 2026-07-17 - Accessible Accordions and Keyboard Navigation
**Learning:** For interactive accordion components, relying on divs with click handlers excludes keyboard and screen reader users. The semantic `<h3><button>` pattern ensures headings are discoverable via assistive tools and focusable natively, provided the button reset is done cleanly in CSS.
**Action:** Always wrap accordion headers in appropriate semantic structures like `<button>` inside standard heading tags, synchronize `aria-expanded` and `aria-controls` explicitly via JS, and add custom high-contrast focus styles.
