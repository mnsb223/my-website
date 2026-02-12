import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initHeroParallax() {
  gsap.registerPlugin(ScrollTrigger);

  // If hero layers don't exist, bail safely
  if (!document.querySelector(".parallax-hero")) return;

  gsap.to(".layer-back", {
    y: 40,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".layer-mid", {
    y: 80,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".layer-front", {
    y: 120,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Subtle hero content fade/settle on load
  gsap.fromTo(
    ".hero-content",
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" }
  );
}
