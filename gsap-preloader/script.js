const timeline = gsap.timeline();

timeline.to(".animate", {
  delay: 5,
  duration: 0.5,
  opacity: 0,
});

timeline.to(".animation", {
  delay: 0.5,
  duration: 1,
  y: "100%",
  ease: "power4.out",
});

timeline.from(".container h1", {
  delay: 0.3,
  duration: 1,
  opacity: 0,
  y: "100%",
  ease: "power4.out",
});

timeline.from(".container div", {
  delay: 0.3,
  duration: 1,
  opacity: 0,
  y: "100%",
  ease: "power4.out",
});
