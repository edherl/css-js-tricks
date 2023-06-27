const timeline = gsap.timeline();

timeline.from(".loader", {
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});

timeline.from(".top", {
  duration: 0.75,
  x: "-100%",
  ease: "power2.out",
});

timeline.from(".right", {
  duration: 0.75,
  y: "-100%",
  ease: "power2.out",
});

timeline.from(".bottom", {
  duration: 0.75,
  x: "100%",
  ease: "power2.out",
});

timeline.from(".left", {
  duration: 0.75,
  y: "100%",
  ease: "power2.out",
});

timeline.from(".container", {
  delay: 0.5,
  duration: 1.5,
  x: "-100%",
  ease: "power2.out",
});

timeline.from(".container img", {
  opacity: 0,
  duration: 1,
  x: "100%",
  ease: "power1.out",
});
