export function initDashboard() {
  document.querySelectorAll("[data-status-select]").forEach((select) => {
    select.addEventListener("change", () => {
      const row = select.closest("tr");
      const badge = row?.querySelector("[data-status-badge]");
      if (!badge) return;

      badge.textContent = select.value.replace("_", " ");
      badge.className = `badge ${statusClass(select.value)}`;
    });
  });
}

function statusClass(status) {
  if (status === "confirmed") return "badge--info";
  if (status === "seated" || status === "completed") return "badge--success";
  if (status === "cancelled" || status === "no_show") return "badge--danger";
  return "badge--warning";
}
