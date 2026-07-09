export function getFormValues(form) {
  return Object.fromEntries(new FormData(form).entries());
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function showFormMessage(form, message, type = "info") {
  const target = form.querySelector("[data-form-message]");
  if (!target) return;

  target.textContent = message;
  target.className = `helper form-message form-message--${type}`;
}
