import { initHeaderMenu } from "./modules/header-menu";
import initModals from "./modules/init-modals";
import { ScrollLock } from "./utils/scroll-lock";
import { initExampleSlider } from "./modules/example-slider";

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    window.scrollLock = new ScrollLock();
    // const { modals } = initModals();
    initModals();
    initHeaderMenu();
    initExampleSlider();
  });
});
