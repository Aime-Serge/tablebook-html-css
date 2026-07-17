// App entry: initializes client-side modules.
// Technologies: ES modules, vanilla JavaScript, progressive enhancement friendly.
import { initNavigation } from "./navigation.js";
import { initSearchForms } from "./search.js";
import { initBookingWidget } from "./booking.js";
import { initAuthForms } from "./auth.js";
import { initDashboard } from "./dashboard.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initSearchForms();
  initBookingWidget();
  initAuthForms();
  initDashboard();
});
