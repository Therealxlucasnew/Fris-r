const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("[data-nav] a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const today = new Date().getDay();
document.querySelector(`[data-hours] [data-day="${today}"]`)?.classList.add("is-today");
