const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const servicesSelector = document.querySelector("#services-item");
const mobileServicesMenu = document.querySelector(".mobile-services-menu-list");
const mobileMenuBack = document.querySelector("#back-btn");
const submitModal = document.querySelector(".submit-modal-wrapper");
const modalOverlay = document.querySelector(".modal-overlay");
const formSubmitBtn = document.querySelector("#form-submit-btn");
const modalCloseBtn = document.querySelector("#modal-close");


hamburgerMenu.addEventListener("click", (evt) => {
  mobileMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-close");
  if (mobileServicesMenu.classList.contains("show-submenu")) {
    mobileServicesMenu.classList.toggle("hidden");
    mobileServicesMenu.classList.toggle("show-submenu");
  }
});

servicesSelector.addEventListener("click", (evt) => {
  mobileServicesMenu.classList.toggle("hidden");
  mobileServicesMenu.classList.toggle("show-submenu");
});

mobileMenuBack.addEventListener("click", (evt) => {
  mobileServicesMenu.classList.toggle("hidden");
  mobileServicesMenu.classList.toggle("show-submenu");
  console.log("it's clicked");
});

formSubmitBtn.addEventListener("click",(evt) => {
  evt.preventDefault();
  modalOverlay.classList.remove("hidden");
  submitModal.classList.remove("hidden");

});

modalCloseBtn.addEventListener("click",(evt) => {
  evt.preventDefault();
  modalOverlay.classList.add("hidden");
  submitModal.classList.add("hidden");

});
