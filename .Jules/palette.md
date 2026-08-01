# Palette UX Journal

## 2026-03-02 - Semantic Accessible Accordion Pattern
**Learning:** Placing headings inside buttons is invalid HTML. The correct pattern is `<h3><button>...</button></h3>`. To maintain the hierarchy of the heading, heading styles (font-size, font-family) must be transferred to the button element.
**Action:** Always wrap the interactive button inside the semantic heading tag, and explicitly style the button to inherit or specify the font characteristics of the heading.
