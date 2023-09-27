import { Marquee3k } from "../utils/marquee3k";

const handleMarqueeDirection = () => {
  let scrollPrev = 0;
  let scrollDir = "bottom";
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > scrollPrev && scrollDir !== "top") {
      scrollDir = "top";
      Marquee3k.toggleReverseAll();
    }
    if (scrolled < scrollPrev && scrollDir !== "bottom") {
      scrollDir = "bottom";
      Marquee3k.toggleReverseAll();
    }

    scrollPrev = scrolled;
  });
};
export { handleMarqueeDirection };
