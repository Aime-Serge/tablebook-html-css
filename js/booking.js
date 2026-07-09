import { getFormValues, isEmail, showFormMessage } from "./validation.js";

export function initBookingWidget() {
  const form = document.querySelector("[data-booking-form]");
  if (!form) return;

  const stepSelect = form.querySelector("[data-booking-step='select']");
  const stepDetails = form.querySelector("[data-booking-step='details']");
  const stepConfirm = form.querySelector("[data-booking-step='confirm']");
  const continueButton = form.querySelector("[data-booking-continue]");
  const backButton = form.querySelector("[data-booking-back]");

  function showStep(step) {
    [stepSelect, stepDetails, stepConfirm].forEach((panel) => {
      if (panel) panel.hidden = panel.dataset.bookingStep !== step;
    });
  }

  continueButton?.addEventListener("click", () => showStep("details"));
  backButton?.addEventListener("click", () => showStep("select"));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = getFormValues(form);

    if (!values.guest_name || !isEmail(values.guest_email || "")) {
      showFormMessage(form, "Please enter a guest name and a valid email address.", "error");
      return;
    }

    showStep("confirm");
  });
}
