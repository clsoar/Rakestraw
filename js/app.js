const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", (evt) => {
  mobileMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-close");
})
