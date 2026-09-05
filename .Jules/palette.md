## 2026-03-30 - Accordion Button Typography Inheritance
**Learning:** When refactoring clickable `<div>` elements into semantic `<h3><button>` accordion headers, the `<button>` element does not automatically inherit heading typography styles (`font-family: Playfair Display`, `font-size: 1.5rem`) from its parent `<h3>` due to user agent button styles.
**Action:** Always explicitly apply heading font properties, `width: 100%`, `background: transparent`, and `text-align: left` directly to the accordion `<button>` CSS rule while keeping `<h3>` margin zeroed.
