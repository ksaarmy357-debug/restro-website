## 2026-03-29 - Lucide Dynamic SVG Replacement in Interactive Accordion Triggers
**Learning:** Third-party icon libraries like Lucide dynamically replace `<i>` elements with `<svg>` elements in the DOM. CSS transition rules that target icon state changes (e.g., rotating icons on active accordion items) fail if they only target `i`.
**Action:** Always include both `i` and `svg` in CSS selectors for icon transitions (e.g., `.accordion-item.active .accordion-header i, .accordion-item.active .accordion-header svg`).
