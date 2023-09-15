window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
