## 2026-09-19 - FAQ Accordion Accessibility & Focus Styling
**Learning:** Replacing non-interactive accordion header `div`s with semantic `<h3><button>` elements combined with `:focus-visible` styles enables seamless keyboard navigation and screen reader compatibility without altering the original visual design.
**Action:** Always wrap accordion header buttons in semantic heading tags, associate them with content regions via `aria-controls` / `aria-labelledby`, and apply distinct `:focus-visible` outlines using existing accent tokens.
