import { Modals } from "../utils/modals";
import { setBtStateCloseModal, setBtnStateOpenModal } from "./header-menu";

const settings = {
  default: {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    resetScrollPos: false,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
  "modal-menu": {
    openCallback: () => {
      setBtnStateOpenModal();
    },
    closeCallback: () => {
      setBtStateCloseModal();
    },
  },
};

function initModals() {
  const modalElements = document.querySelectorAll(".modal");
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove("modal--preload");
      }, 100);
    });
  }

  const modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;

  const ctx = this;

  return {
    ctx,
    modals,
  };
}

export default initModals;
