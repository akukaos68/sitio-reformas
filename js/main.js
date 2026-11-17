/* ===== Datos a cambiar ===== */
const CONFIG = {
  whatsapp: "59899000000",           // formato internacional, sin + ni espacios
  mensaje: "Hola, quiero pedir un presupuesto"
};

// WhatsApp: todos los enlaces con data-wa usan el número de CONFIG
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensaje)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}));

// Filtro de galería
const chips = document.querySelectorAll(".chip");
const items = document.querySelectorAll("#gallery > *");
chips.forEach(chip => chip.addEventListener("click", () => {
  chips.forEach(c => c.classList.remove("is-on"));
  chip.classList.add("is-on");
  const f = chip.dataset.f;
  items.forEach(el => el.classList.toggle("hide", f !== "all" && el.dataset.c !== f));
}));

// Aparición suave al hacer scroll
const els = document.querySelectorAll(".card,.steps li,.stats div,.ph,.swatches .sw");
els.forEach(el => el.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add("in"));
