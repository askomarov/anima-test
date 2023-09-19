import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const slider = document.querySelector(".example-slider");

const initExampleSlider = () => {
  const options = {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 33,
    loop: false,
    grabCursor: true,
    pagination: {
      el: ".example-slider__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slider-pagination__button--next",
      prevEl: ".slider-pagination__button--prev",
    },
  };
  if (slider) {
    // eslint-disable-next-line no-unused-vars
    const sliderHteam = new Swiper(".example-slider", options);
  }
};
export { initExampleSlider };
