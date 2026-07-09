import { getFormValues, isEmail, showFormMessage } from "./validation.js";

export function initAuthForms() {
  document.querySelectorAll("[data-auth-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = getFormValues(form);

      if (values.email && !isEmail(values.email)) {
        showFormMessage(form, "Please enter a valid email address.", "error");
        return;
      }

      if (form.dataset.successRedirect) {
        window.location.href = form.dataset.successRedirect;
        return;
      }

      showFormMessage(form, "Form captured. Secure authentication is planned for the backend phase.", "info");
    });
  });
}
