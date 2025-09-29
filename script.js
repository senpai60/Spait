// Wait for the HTML to be fully loaded before running any script
document.addEventListener("DOMContentLoaded", (event) => {
  // 1. Register the GSAP plugins first
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // 2. Create the ScrollSmoother instance with the REQUIRED wrapper and content
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper", // Yeh zaroori hai
    content: "#smooth-content", // Yeh bhi zaroori hai
    smooth: 1.2,
    effects: true,
  });

  // 3. Create the timeline INSIDE DOMContentLoaded
  let tl = gsap.timeline();

  // Add animations to the timeline
  tl.from(".nav", {
    y: -100, // Changed from -200 for a better effect
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  }).from(
    ".hero-container",
    {
      y: 50, // Changed from -100 to come from bottom
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.8"
  ); // Overlap animations for a smoother look

  // NOTE: Your HTML doesn't have a ".hero-bot" element, so that animation is removed.
  // Agar aapke paas woh section hai, to usko class="hero-bot" de dena.

  // 4. Fix the ScrollTrigger animation
  gsap.from(".service-menu-wrapper", {
  scrollTrigger: {
    trigger: "#service-menu",
    start: "top 80%",
    end: "bottom 15%",

    // YEH LINE CHANGE KARNI HAI
    toggleActions: "restart reset restart reset",

    markers: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});
});
