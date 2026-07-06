## 2026-05-20 - Accessible Accordion Pattern
**Learning:** Using a <button> nested within an <h3> is the standard semantic pattern for accessible accordions. It provides both structural hierarchy for screen readers and native keyboard support.
**Action:** Always prefer <button> over <div> for interactive elements, and ensure ARIA states like aria-expanded are synchronized via JavaScript.
