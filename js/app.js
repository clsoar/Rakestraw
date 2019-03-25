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
let focusedElementPreModal;

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
  openModal();
  });

  //trab tab key code from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
  openModal = () => {

    focusedElementPreModal = document.activeElement;


    //function to trap tab key in modal
    trapTabKey = (evt) => {
      if (evt.keyCode === 9) {
        if (evt.shiftKey) {
          if (document.activeElement === firstTabStop) {
            evt.preventDefault();
            lastTabStop.focus();
          }
        } else {
          if (document.activeElement === lastTabStop) {
            evt.preventDefault();
            firstTabStop.focus();
          }
        }
      }
      //allow escape key to closemodal
      if (evt.keyCode === 27) {
        modalOverlay.classList.add("hidden");
        submitModal.classList.add("hidden");
        //set focus back to previously focused element
        focusedElementPreModal.focus();
      }
    }

    //open submission modal
    modalOverlay.classList.remove("hidden");
    submitModal.classList.remove("hidden");

    //listen and trap tab key
    submitModal.addEventListener('keydown', trapTabKey);

    //close modal event listener
    modalCloseBtn.addEventListener("click",(evt) => {
      evt.preventDefault();
      modalOverlay.classList.add("hidden");
      submitModal.classList.add("hidden");
      //set focus back to previously focused element
      focusedElementPreModal.focus();
    });

    //focusable children string
    let focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    //select node list
    let focusableElements = submitModal.querySelectorAll(focusableElementsString);
    //convert to array
    focusableElements = Array.prototype.slice.call(focusableElements);

    let firstTabStop = focusableElements[0];
    let lastTabStop = focusableElements[focusableElements.length - 1];

    //set focus to first focusable element
    firstTabStop.focus();



  }
