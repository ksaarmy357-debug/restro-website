## 2026-07-01 - Semantic Headers in Accordions
**Learning:** For accordions to be truly accessible, headers must use semantic `<button>` elements wrapped in appropriate heading tags (like `<h3>`). This ensures they are keyboard-focusable and correctly identified as interactive by screen readers. Additionally, synchronizing `aria-expanded` and `aria-controls` is critical for conveying state.
**Action:** Always use the `<h3><button>` pattern for accordions and ensure `aria-expanded` is updated in the toggle logic.
