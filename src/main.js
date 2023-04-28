let email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

email.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}