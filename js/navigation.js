// Navigation module
// Lightweight, framework-free accessible navigation toggle.
// Technologies: HTML5, ARIA, and vanilla ES modules (no frameworks).
export function initNavigation() {
  const button = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-main-nav]");

  if (!button || !nav) return;

  // SVG icons used for visual affordance — switched programmatically
  const menuSvg = '<svg class="icon icon--menu" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><rect y="4" width="24" height="2" rx="1"></rect><rect y="11" width="24" height="2" rx="1"></rect><rect y="18" width="24" height="2" rx="1"></rect></svg>';
  const closeSvg = '<svg class="icon icon--close" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M6 6 L18 18 M6 18 L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  // Initialize button with menu icon (no visible text).
  button.innerHTML = menuSvg;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.innerHTML = isOpen ? closeSvg : menuSvg;
  });
}
