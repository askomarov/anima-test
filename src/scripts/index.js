import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { parallaxMouse } from "./utils/parallax-mouse";
import { initHeaderMenu } from "./modules/header-menu";
import initModals from "./modules/init-modals";
import { ScrollLock } from "./utils/scroll-lock";
import { initExampleSlider } from "./modules/example-slider";
import { initListAnimation } from "./modules/init-list-animation";
import { Marquee3k } from "./utils/marquee3k";
import { handleMarqueeDirection } from "./modules/handle-marquee-direction";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    handleMarqueeDirection();
    gsap.to(".body", { autoAlpha: 1, duration: 0.6 });

    gsap.from(".footer", {
      opacity: 0,
      y: 150,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer",
        scrub: true,
        start: "top bottom",
        end: "60% bottom",
        // markers: true,
      }
    });
    Marquee3k.init({
      selector: "hero__running-line", // define a custom classname
    });
    initListAnimation();
    window.scrollLock = new ScrollLock();
    // const { modals } = initModals();
    initModals();
    initHeaderMenu();
    initExampleSlider();
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower();
    const el = document.querySelector(".my-element");
    //
    const imageListItems = document.querySelectorAll(".image-list li a");
    [...imageListItems].forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.setText("Explore");
        cursor.setSkewing(4);
      });
      item.addEventListener("mouseleave", () => {
        cursor.removeText();
        cursor.removeSkewing();
      });
    });
    //
    el.addEventListener("mouseenter", () => {
      cursor.addState("-inverse"); // you can pass multiple states separated by whitespace
    });

    el.addEventListener("mouseleave", () => {
      cursor.removeState("-inverse");
    });
    const el2 = document.querySelector(".my-element2");
    el2.addEventListener("mouseenter", () => {
      cursor.setText("Hello!");
    });

    el2.addEventListener("mouseleave", () => {
      cursor.removeText();
    });

    const el3 = document.querySelector(".my-image");
    el3.addEventListener("mouseenter", () => {
      cursor.setImg("./src/assets/img/smiling-eyes.png");
      cursor.setSkewing(2);
    });

    el3.addEventListener("mouseleave", () => {
      cursor.removeImg();
      cursor.removeSkewing();
    });
    //
    const elVideo = document.querySelector(".new-project");
    elVideo.addEventListener("mouseenter", () => {
      cursor.addState("-media--lg");
      cursor.addState("-media");
      cursor.setVideo("//cdn.cuberto.com/cb/projects/flipaclip/cover.mp4");
    });

    elVideo.addEventListener("mouseleave", () => {
      cursor.removeVideo();
      cursor.removeState("-media");
      cursor.removeState("-media--lg");
    });
    const elVideo22 = document.querySelector(".new-project22");
    elVideo22.addEventListener("mouseenter", () => {
      cursor.addState("-media--lg");
      cursor.addState("-media");
      cursor.setVideo("//cdn.cuberto.com/cb/projects/puntopago/main.mp4");
    });

    elVideo22.addEventListener("mouseleave", () => {
      cursor.removeVideo();
      cursor.removeState("-media");
      cursor.removeState("-media--lg");
    });
    //
    const btnWithStick = document.querySelector(".cb-btn_menu");
    parallaxMouse({
      elements: ".cb-btn_menu", moveFactor: 100, wrap: ".cb-btn_menu"
    });
    btnWithStick.addEventListener("mouseenter", () => {
      cursor.setStick(btnWithStick);
      cursor.setSkewing(2);
      cursor.addState("-stuck");
    });

    btnWithStick.addEventListener("mouseleave", () => {
      cursor.removeStick();
      cursor.removeState("-stuck");
      cursor.removeSkewing();
      btnWithStick.setAttribute("style", "");
    });
  });
});
