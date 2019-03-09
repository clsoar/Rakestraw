const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const servicesSelector = document.querySelector("#services-item");
const mobileServicesMenu = document.querySelector(".mobile-services-menu-list");
const mobileMenuBack = document.querySelector("#back-btn");



hamburgerMenu.addEventListener("click", (evt) => {
  mobileMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-close");
  if (mobileServicesMenu.classList.contains("show-submenu")) {
    mobileServicesMenu.classList.toggle("hidden");
    mobileServicesMenu.classList.toggle("show-submenu");
  }
})

servicesSelector.addEventListener("click", (evt) => {
  mobileServicesMenu.classList.toggle("hidden");
  mobileServicesMenu.classList.toggle("show-submenu");
})

mobileMenuBack.addEventListener("click", (evt) => {
  mobileServicesMenu.classList.toggle("hidden");
  mobileServicesMenu.classList.toggle("show-submenu");
  console.log("it's clicked");
})
