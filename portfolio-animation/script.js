let timeline = gsap.timeline();

timeline.from(".brand-1", {
  opacity: 0,
  xPercent: -100,
  delay: 0.5,
  duration: 1,
  ease: "power1.out",
  yoyo: true,
});

timeline.from(
  ".dot",
  {
    opacity: 0,
    yPercent: 100,
    delay: 0.5,
    repeatDelay: 1,
    duration: 1,
    ease: "power1.out",
  },
  0.01
);

timeline.to(".dot", {
  x: 20,
  duration: 1,
  ease: "power1.out",
});

timeline.to(".dot", {
  x: -5,
  duration: 0.5,
  ease: "power1.out",
});

timeline.to(".brand-1", {
  opacity: 0,
  xPercent: -100,
  duration: 1,
  ease: "power1.out",
  yoyo: true,
});

timeline.to(
  ".dot",
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
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3
);

timeline.to(
  ".cover-2",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.2
);

timeline.to(
  ".cover-3",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.4
);

timeline.to(
  ".cover-4",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.6
);

timeline.from(
  ".brand-2",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
    opacity: 0,
  },
  3.8
);

timeline.from(".cover-5", {
  yPercent: -100,
  duration: 1,
  ease: "power1.out",
  delay: 0.4,
});

timeline.from(".logo", {
  xPercent: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});

timeline.from(
  ".header-img",
  {
    xPercent: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  },
  6
);

timeline.from(
  ".items, .contact",
  {
    xPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  },
  6.5
);

timeline.from(
  ".heading",
  {
    xPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  },
  6.5
);

timeline.from(
  ".sub-heading",
  {
    xPercent: 100,
    opacity: 0,
    duration: 1.1,
    ease: "power1.out",
  },
  6.2
);

timeline.from(
  ".button",
  {
    yPercent: 100,
    opacity: 0,
    duration: 2,
    ease: "bounce",
  },
  6.5
);

const body = document.querySelector("body");
const img = document.querySelector(".header-img");

window.addEventListener("mousemove", (e) => {
  var xPos = e.clientX / img.clientWidth - 0.5,
    yPos = e.clientY / img.clientHeight - 0.5;

  gsap.to(".header-img", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });

  gsap.to(".heading", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });

  gsap.to(".sub-heading", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });

  gsap.to(".button", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });

  gsap.to(".contact", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });

  gsap.to(".items", 1, {
    rotationY: xPos * 20,
    rotationX: yPos * 20,
    ease: Power1.easeOut,
  });
});
