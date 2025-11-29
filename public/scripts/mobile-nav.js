// Mobile navigation toggle functionality
const toggle = document.querySelector("[data-mobile-nav-toggle]");
const panel = document.querySelector("[data-mobile-nav-panel]");

if (toggle && panel) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      panel.hidden = true;
    });
  });
}
