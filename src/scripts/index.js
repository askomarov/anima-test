import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { parallaxMouse } from "./utils/parallax-mouse";
import { initHeaderMenu } from "./modules/header-menu";
import initModals from "./modules/init-modals";
import { ScrollLock } from "./utils/scroll-lock";
import { initExampleSlider } from "./modules/example-slider";
import { initListAnimation } from "./modules/init-list-animation";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // document.body.classList.remove("loading");
  // setTimeout(() => {
  //   document.body.classList.remove("scroll-lock");
  // }, 600);

  window.addEventListener("load", () => {
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
    //
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
      cursor.setImg("/favicon-16x16.png");
    });

    el3.addEventListener("mouseleave", () => {
      cursor.removeImg();
    });

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
