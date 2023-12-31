/* eslint-disable no-console */
const headerElement = document.querySelector("#header");
const headerMenu = document.querySelector(".header-menu");
const menuButton = document.querySelector(".menu-button");
// const modalMenu = document.querySelector(".modal-menu");

const showMenu = () => {
  menuButton.setAttribute("aria-label", "close menu");
  menuButton.removeAttribute("data-open-modal");
  menuButton.classList.add("menu-button--opened");
  // headerElement.classList.add("header--opened");
  // headerMenu.classList.remove("header-menu--closed");
  // headerMenu.classList.add("header-menu--opened");
  window.scrollLock.disableScrolling();
};

const setBtnStateOpenModal = () => {
  menuButton.classList.add("menu-button--opened");
};
const setBtStateCloseModal = () => {
  menuButton.classList.remove("menu-button--opened");
};

const closeMenu = () => {
  window.modals.close("modal-menu");
};

// const closeMenuOnDesktop = () => {
//   window.addEventListener("resize", () => {
//     if (window.innerWidth > 1024 && headerElement.classList.contains("header--opened")) {
//       closeMenu();
//     }
//   });
// };

const initHeaderMenu = () => {
  if (headerElement && menuButton) {
    // closeMenuOnDesktop();
    const headerLinks = document.querySelectorAll(".header-menu__link");
    headerMenu.classList.add("header-menu--closed");

    menuButton.addEventListener("click", () => {
      console.log("click");
      if (menuButton.classList.contains("menu-button--opened")) {
        window.modals.close("modal-menu");
      } else {
        window.modals.open("modal-menu");
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

export {
  showMenu, closeMenu, initHeaderMenu, setBtnStateOpenModal, setBtStateCloseModal
};
