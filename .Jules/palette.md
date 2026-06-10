## 2026-05-22 - Accessible Accordion Patterns
**Learning:** Transitioning from `div` based accordions to semantic `button` headers requires careful CSS resetting to avoid breaking the visual layout (e.g., handling default padding, borders, and text alignment). Additionally, for full screen reader support, content regions should use `role="region"` and `aria-labelledby` linked to the header button's ID.
**Action:** Always use semantic buttons for toggles and ensure the corresponding content areas are explicitly associated using both `aria-controls` and `aria-labelledby`.
