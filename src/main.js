let email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let hambMobileMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let cartIcon = document.querySelector(".navbar-shopping-cart");
let cart = document.querySelector(".product-detail");


email.addEventListener("click", toggleDesktopMenu);
hambMobileMenu.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCart);


function toggleDesktopMenu(){
    if(!cart.classList.contains("inactive")){
        cart.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    if(!cart.classList.contains("inactive")){
        cart.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCart(){
    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive");
    }else if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.toggle("inactive");
    }
    cart.classList.toggle("inactive");
}