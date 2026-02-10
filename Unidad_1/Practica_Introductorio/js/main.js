const THEME_KEY = "cute_shop_theme";
const CONTACT_EMAIL = "correo@ejemplo.com"; // <-- CAMBIA
const WHATSAPP_NUMBER = "59170000000"; // <-- CAMBIA (formato: 591 + número)

document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  const hidden = mobileMenu.hasAttribute("hidden");
  hidden
    ? mobileMenu.removeAttribute("hidden")
    : mobileMenu.setAttribute("hidden", "");
});
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.setAttribute("hidden", "");
  }),
);

// Tema
const themeBtn = document.getElementById("themeBtn");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "light" ? "☀️" : "🌙";
  localStorage.setItem(THEME_KEY, theme);
}
applyTheme(localStorage.getItem(THEME_KEY) || "dark");
themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => observer.observe(el));

// Contar cards
const cardsCount = document.querySelectorAll(".products .card").length;
document.getElementById("countCards").textContent = cardsCount;

// Carrito (demo)
let cart = 0;
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");

function showToast(text) {
  toast.textContent = text;
  toast.hidden = false;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => (toast.hidden = true), 250);
  }, 1200);
}

document.querySelectorAll(".addBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;
    showToast("✨ Agregado al carrito 💗");
    btn.classList.add("shake");
    setTimeout(() => btn.classList.remove("shake"), 350);
  });
});

// Botón sorpresa
document.getElementById("toastBtn").addEventListener("click", () => {
  showToast("🎁 Cupón: CUTE10 (10% OFF)");
});

// Promo
document.getElementById("promoBtn").addEventListener("click", () => {
  showToast("🍓 Promo aplicada (demo)");
});

// WhatsApp link
const waBtn = document.getElementById("waBtn");
const waMsg = encodeURIComponent(
  "Hola! Quiero hacer un pedido en Sweet Shop 💗",
);
waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

// Formulario mailto
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent(`Pedido / Consulta - ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
