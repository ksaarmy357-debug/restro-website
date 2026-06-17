## 2026-05-22 - [Accessible Accordion Pattern]
**Learning:** For luxury interfaces using custom 'div' toggles, converting to '<h3><button>' provides immediate screen reader support and keyboard tab-ability without compromising the 'futuristic' aesthetic. The 'aria-expanded' state must be explicitly managed as strings 'true'/'false'.
**Action:** Always wrap accordion triggers in a heading level that makes sense for the page structure, and use semantic buttons with clear ':focus-visible' states.

## 2026-05-22 - [Artifact Hygiene]
**Learning:** Python repositories often lack a '.gitignore', leading to accidental inclusion of '__pycache__' and '.log' files in patches.
**Action:** Manually clear runtime artifacts and bytecode before requesting code reviews or submitting.
