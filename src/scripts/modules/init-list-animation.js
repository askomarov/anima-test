import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initListAnimation = () => {
  const listItems = gsap.utils.toArray(".image-list li");
  listItems.forEach((item) => {
    gsap.from(item, {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true,
        start: "center bottom",
        end: "top 65%",
        // markers: true,
      }
    });
  });
};
export { initListAnimation };
