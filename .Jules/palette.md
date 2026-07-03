## 2026-07-03 - [Accessible FAQ Accordion Pattern]
**Learning:** Implementing accordions with semantic `<button>` elements inside headers is crucial for keyboard and screen reader accessibility. It ensures that the interactive part of the accordion is in the tab order and its state is correctly announced.
**Action:** Always use `<h3><button>` pattern for accordions and synchronize `aria-expanded` attributes in JavaScript.

## 2026-07-03 - [Defensive Selector Logic]
**Learning:** When updating HTML structure and corresponding JS selectors, always use null checks (e.g., `if (button)`) to prevent `TypeError` in case some elements in a collection don't match the new expected structure, especially in dynamic or multi-page apps.
**Action:** Wrap event listener attachments and attribute updates in null checks when querying sub-elements within a loop.
