## 2026-03-30 - Accordion Header Heading-Button Nesting and ARIA Sync

**Learning:** Unstyled `<div>` elements used as accordion headers are completely invisible to screen readers and keyboard users. Wrapping a `<button type="button">` inside an `<h3>` heading ensures both visual hierarchy and full accessibility via native focus states, `aria-expanded`, `aria-controls`, and `role="region"`. Moving heading styles directly to `.accordion-header` preserves the exact visual presentation.

**Action:** Always structure accordion headers as `<h3><button type="button" class="accordion-header" id="..." aria-expanded="false" aria-controls="...">...</button></h3>` and associate content containers with `role="region"` and `aria-labelledby`.
