import { getFormValues, showFormMessage } from "./validation.js";

export function initSearchForms() {
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = getFormValues(form);
      const params = new URLSearchParams();

      Object.entries(values).forEach(([key, value]) => {
        if (value) params.set(key, value);
      });

      window.location.href = `search.html${params.toString() ? `?${params}` : ""}`;
    });
  });

  const filterForm = document.querySelector("[data-filter-form]");
  if (filterForm) {
    filterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      showFormMessage(filterForm, "Filters are ready for the JavaScript filtering phase.", "info");
    });
  }
}
