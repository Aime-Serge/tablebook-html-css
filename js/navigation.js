export function initNavigation() {
  const button = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-main-nav]");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "Close" : "Menu";
  });
}
