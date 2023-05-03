document.body.addEventListener("pointermove", (e) => {
  const { currentTarget: element, clientX: x, clientY: y } = e;
  const {
    top: t,
    left: l,
    width: w,
    height: h,
  } = element.getBoundingClientRect();
  element.style.setProperty("--posX", x - l - w / 2);
  element.style.setProperty("--posY", y - t - h / 2);
});
