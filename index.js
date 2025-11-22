// On attend que le script se charge (placé en fin de body, donc DOM prêt)

/* === SÉLECTION DES ÉLÉMENTS === */
const burgerButton = document.querySelector(".main-header__burger");
const navList = document.querySelector(".main-header__nav-list");
const header = document.querySelector(".main-header");

/* === FONCTIONS === */
function toggleMenu() {
  const isOpened = burgerButton.classList.toggle("main-header__burger--open");
  navList.classList.toggle("main-header__nav-list--open");

  // Affectation de l'attribut aria-expanded pour l'accessibilité
  burgerButton.setAttribute("aria-expanded", isOpened);
}

function closeMenu() {
  burgerButton.classList.remove("main-header__burger--open");
  navList.classList.remove("main-header__nav-list--open");
  burgerButton.setAttribute("aria-expanded", "false");
}

/* === ÉCOUTEURS D'ÉVÉNEMENTS === */

// 1. Gestion du Burger
if (burgerButton && navList) {
  burgerButton.addEventListener("click", toggleMenu);
}

// 2. Gestion des clics sur les liens (DÉLÉGATION D'ÉVÉNEMENT)

if (navList) {
  navList.addEventListener("click", (e) => {
    // Si l'élément cliqué est un lien (ou est dans un lien)
    if (e.target.closest(".main-header__nav-link")) {
      closeMenu();
    }
  });
}

// 3. Gestion du Scroll (Optimisé avec requestAnimationFrame pour la fluidité)
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        header.classList.add("main-header--scrolled");
      } else {
        header.classList.remove("main-header--scrolled");
      }
      isScrolling = false;
    });
    isScrolling = true;
  }
});
