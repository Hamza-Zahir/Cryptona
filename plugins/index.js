const elements = document.querySelectorAll([
  ".move-to-bottom",
  ".move-to-top",
  ".move-to-left",
  ".move-to-right",
]);

elements.forEach((e) => {
  e.classList.contains("move-to-bottom")
    ? (e.style = `-webkit-transform: translateY(100%);
      -moz-transform: translateY(100%);
      -ms-transform: translateY(100%);
      -o-transform: translateY(100%);
      transform: translateY(100%);
      opacity: 0;
      z-index: -99;`)
    : e.classList.contains("move-to-top")
    ? (e.style = `  -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
        opacity: 0;
        z-index: -999;`)
    : e.classList.contains("move-to-left")
    ? (e.style = `-webkit-transform: translateX(-100%);
          -moz-transform: translateX(-100%);
          -ms-transform: translateX(-100%);
          -o-transform: translateX(-100%);
          transform: translateX(-100%);
        opacity: 0;
        z-index: -99;`)
    : e.classList.contains("move-to-right")
    ? (e.style = `  -webkit-transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
            transform: translateX(100%);
            opacity: 0;
          z-index: -99;`)
    : undefined;
});

elements.forEach((ele) => {
  if (window.scrollY >= ele.offsetTop - window.innerHeight) {
    if (!ele.classList.contains("back-to-origin")) {
      ele.classList.add("back-to-origin");
    }
  }
});

window.addEventListener("scroll", function () {
  elements.forEach((ele) => {
    if (window.scrollY >= ele.offsetTop - window.innerHeight) {
      if (!ele.classList.contains("back-to-origin")) {
        ele.classList.add("back-to-origin");
      }
    }
  });
});
