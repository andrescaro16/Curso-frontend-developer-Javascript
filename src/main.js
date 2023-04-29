let email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let hambMobileMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

email.addEventListener("click", toggleDesktopMenu);
hambMobileMenu.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}