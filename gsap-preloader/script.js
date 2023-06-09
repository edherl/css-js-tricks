Splitting();
const timeline = gsap.timeline();

timeline.from(".cover h1", {
  opacity: 0,
  x: "-100%",
  delay: 0.5,
  duration: 1,
  ease: "power1.out",
});

timeline.from(
  ".cover span",
  {
    opacity: 0,
    y: "100%",
    delay: 0.5,
    duration: 1,
    ease: "power1.out",
  },
  0.01
);

timeline.to(".cover span", {
  x: 20,
  duration: 1,
  ease: "power1.out",
});

timeline.to(".cover span", {
  x: -5,
  duration: 0.5,
  ease: "power1.out",
});

timeline.to(".cover h1", {
  opacity: 0,
  x: "-100%",
  duration: 1,
  ease: "power1.out",
});

timeline.to(
  ".cover span",
  {
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  },
  3
);

timeline.to(
  ".cover",
  {
    x: "-100%",
    duration: 1,
    ease: "power1.out",
  },
  3
);

timeline.from(".container .title .char", {
  opacity: 0,
  delay: .5,
  stagger: .05,
  y: "100%",
  ease: "power4.out"
})

timeline.from(".container .bio .char", {
  opacity: 0,
  stagger: .01,
  y: "100%",
  ease: "power4.out"
})

timeline.from(".container div", {
  delay: 0.5,
  duration: 0.5,
  opacity: 0,
  y: "100%",
  ease: "power2.out",
});