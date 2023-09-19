/* eslint-disable no-console */
const headerElement = document.querySelector("#header");
const headerMenu = document.querySelector(".header-menu");
const menuButton = document.querySelector(".menu-button");

const showMenu = () => {
  menuButton.setAttribute("aria-label", "close menu");
  headerElement.classList.add("header--opened");
  headerMenu.classList.remove("header-menu--closed");
  headerMenu.classList.add("header-menu--opened");
  window.scrollLock.disableScrolling();
};

const closeMenu = () => {
  menuButton.setAttribute("aria-label", "open menu");
  headerElement.classList.remove("header--opened");
  headerMenu.classList.add("header-menu--closed");
  headerMenu.classList.remove("header-menu--opened");
  window.scrollLock.enableScrolling();
};
const closeMenuOnDesktop = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && headerElement.classList.contains("header--opened")) {
      closeMenu();
    }
  });
};

const initHeaderMenu = () => {
  if (headerElement && menuButton) {
    closeMenuOnDesktop();
    const headerLinks = document.querySelectorAll(".header-menu__link");
    headerMenu.classList.add("header-menu--closed");

    menuButton.addEventListener("click", () => {
      if (headerMenu.classList.contains("header-menu--closed")) {
        showMenu();
      } else {
        closeMenu();
      }
    });

    headerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (headerMenu.classList.contains("header-menu--opened")) {
          closeMenu();
        }
      });
    });
  }
};

export { showMenu, closeMenu, initHeaderMenu };
