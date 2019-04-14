const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const servicesSelector = document.querySelector("#services-item a");
const mobileServicesMenu = document.querySelector(".mobile-services-menu-list");
const mobileMenuBack = document.querySelector("#back-btn");
const mobileSubBackArrow = document.querySelector("#back-btn a");
const submitModal = document.querySelector(".submit-modal-wrapper");
const modalOverlay = document.querySelector(".modal-overlay");
const formSubmitBtn = document.querySelector("#form-submit-btn");
const modalCloseBtn = document.querySelector("#modal-close");
const extra = document.querySelector("#last-name");
const extra2 = document.querySelector("#first-name");
const extra3 = document.querySelector("#password");

let focusedElementPreModal;

hamburgerMenu.addEventListener("click", (evt) => {
  mobileMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-close");
  if (mobileServicesMenu.classList.contains("show-submenu")) {
    mobileServicesMenu.classList.add("hidden");
    mobileServicesMenu.classList.remove("show-submenu");
  }
});

servicesSelector.addEventListener("click", (evt) => {
  mobileServicesMenu.classList.toggle("hidden");
  mobileServicesMenu.classList.toggle("show-submenu");
});

mobileMenuBack.addEventListener("click", (evt) => {
  mobileServicesMenu.classList.add("hidden");
  mobileServicesMenu.classList.remove("show-submenu");
});


//honeypot for form submission
const contactform =  document.getElementById('contact-form');




if(formSubmitBtn) {
  //hide honeypot
  extra.style.display = "none";
  extra2.setAttribute('tabindex', "-1");

  if(!extra.value && !extra3.value){
    formSubmitBtn.addEventListener("click", (evt) => {
      if(!extra.value && extra2.value === "Do not change" && !extra3.value){
        contactform.setAttribute('action', "https://www.briskforms.com/go/805c8ce203298ec4c019234a4bf7c5bb");
        console.log("Form sent");
      } else {
        alert("Error in Form Submission, please try again.");
        }
    });
  }
}
