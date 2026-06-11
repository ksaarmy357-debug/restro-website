## 2026-05-20 - Semantic Accordion Pattern
**Learning:** For accessible accordions, putting a heading tag (like `<h3>`) inside a `<button>` is technically invalid HTML as `<button>` should only contain phrasing content. The correct semantic pattern is `<h3><button>...</button></h3>`.
**Action:** Always wrap the accordion trigger button in the appropriate heading level tag rather than the other way around.

## 2026-05-20 - Global Keyboard Listeners
**Learning:** Global event listeners (e.g., for the `Escape` key) must include null checks for the elements they interact with if the script is loaded on pages where those elements might not exist.
**Action:** Always add `if (element) { ... }` checks when accessing element properties inside global listeners.
