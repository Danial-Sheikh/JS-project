let navbar = document.getElementById("nav-menu");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 484) {
    navbar.classList.add("sticky-menu");
  } else {
    navbar.classList.remove("sticky-menu");
  }
});
