const move = (e) => {
  const { clientX: xpos, clientY: ypos } = e;
  gsap.to(".img-wrapper", {
    x: xpos,
    y: ypos,
  });
};

const hover = (e) => {
  const { type, target } = e;
  const image = target.dataset.img;
  const wrapper = document.querySelector(".img-wrapper");

  const tl = gsap.timeline();

  if (type === "mouseenter") {
    tl.set(".img", {
      backgroundImage: `url(${image})`,
    }).to(wrapper, {
      duration: 1,
      autoAlpha: 1,
    });
  } else if (type === "mouseleave") {
    tl.to(wrapper, {
      duration: 0.5,
      autoAlpha: 0,
    });
  }
};

const init = () => {
  const links = document.querySelectorAll(".js-link");

  links.forEach((link) => {
    link.addEventListener("mousemove", move);
    link.addEventListener("mouseenter", hover);
    link.addEventListener("mouseleave", hover);
  });
};

init();
