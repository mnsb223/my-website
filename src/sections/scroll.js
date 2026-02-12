import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initRevealAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const revealEls = gsap.utils.toArray(".reveal");
  if (!revealEls.length) return;

  revealEls.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      }
    );
  });
}

export function initPinnedStory() {
  const pinned = document.querySelector(".pinned");
  if (!pinned) return;

  const steps = Array.from(document.querySelectorAll(".step"));
  const bgs = Array.from(document.querySelectorAll(".pinned-bg .bg"));

  // Default to first
  let activeIndex = 0;

  function setActive(index) {
    if (index === activeIndex) return;
    activeIndex = index;

    steps.forEach((s, i) => s.classList.toggle("is-active", i === index));
    bgs.forEach((bg, i) => bg.classList.toggle("is-active", i === index));
  }

  // Only consider a step "active" when it's in the middle band of the screen
  const io = new IntersectionObserver(
    (entries) => {
      // Pick the entry most visible INSIDE the center band
      const candidate = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!candidate) return;

      const stepEl = candidate.target;
      const index = steps.indexOf(stepEl);
      if (index >= 0) setActive(index);
    },
    {
      root: null,
      // Top 35% and bottom 35% excluded => only middle 30% triggers
      rootMargin: "-35% 0px -35% 0px",
      threshold: [0.15, 0.3, 0.45, 0.6, 0.75]
    }
  );

  steps.forEach((s) => io.observe(s));
}

