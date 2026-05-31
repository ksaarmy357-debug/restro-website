## 2024-05-24 - Accessibility and Focus Management in Interactive UI

**Learning:** Interactive elements implemented as `div`s lack inherent keyboard accessibility and screen reader support. Additionally, UI components that transition (like a chatbot panel) need explicit focus management to ensure a smooth experience for keyboard users; without it, the user is left in a "focus vacuum" when the panel opens.

**Action:** Always use semantic `<button>` elements for interactive toggles. When opening a modal or panel, programmatically move focus to the first interactive element inside (with a slight delay if there's a transition) and return focus to the trigger when closing.
