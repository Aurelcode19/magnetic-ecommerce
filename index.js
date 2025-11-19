document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".main-header__burger");
  // Sélection de la LISTE, pas de la nav entière
  const navList = document.querySelector(".main-header__nav-list");

  const navLinks = document.querySelectorAll(".main-header__nav-link");
  const header = document.querySelector(".main-header");

  if (burgerButton && navList) {
    burgerButton.addEventListener("click", function () {
      // Toggle des classes modificateurs
      burgerButton.classList.toggle("main-header__burger--open");
      navList.classList.toggle("main-header__nav-list--open");

      // Gestion de l'accessibilité
      const isExpanded = burgerButton.classList.contains(
        "main-header__burger--open"
      );
      burgerButton.setAttribute("aria-expanded", isExpanded);
    });
  }
  // Fermeture du menu au clic sur un lien
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerButton.classList.remove("main-header__burger--open");
      navList.classList.remove("main-header__nav-list--open");
      burgerButton.setAttribute("aria-expanded", "false");
    });
  }); // Changement de style du header au scroll

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add("main-header--scrolled");
    } else {
      header.classList.remove("main-header--scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
