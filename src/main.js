let email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let hambMobileMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let cartIcon = document.querySelector(".navbar-shopping-cart");
let shoppingCartContainer = document.querySelector("#shoppingCartContainer");
let productsContainer = document.querySelector(".cards-container");

email.addEventListener("click", toggleDesktopMenu);
hambMobileMenu.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCart);

let productList = [];
productList.push({
    name: "Computer",
    img: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 750,
})
productList.push({
    name: "Headphones",
    img: "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 150,
})
productList.push({
    name: "Phone",
    img: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 500,
})
productList.push({
    name: "Watch",
    img: "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg",
    price: 150,
})
productList.push({
    name: "Production Kit",
    img: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg",
    price: 850,
})
productList.push({
    name: "Setup",
    img: "https://images.pexels.com/photos/4930018/pexels-photo-4930018.jpeg",
    price: 1380,
})
productList.push({
    name: "Microphone",
    img: "https://images.pexels.com/photos/3962990/pexels-photo-3962990.jpeg",
    price: 180,
})
productList.push({
    name: "Citizen Watch",
    img: "https://images.pexels.com/photos/592815/pexels-photo-592815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 450,
})
productList.push({
    name: "Cap",
    img: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg",
    price: 99,
})
productList.push({
    name: "Tablet",
    img: "https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 390,
})
productList.push({
    name: "Agenda",
    img: "https://images.pexels.com/photos/163187/coffee-tablet-headphones-work-163187.jpeg",
    price: 30,
})
productList.push({
    name: "Notes book",
    img: "https://images.pexels.com/photos/5712452/pexels-photo-5712452.jpeg",
    price: 25,
})
productList.push({
    name: "Book kit",
    img: "https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg",
    price: 120,
})
productList.push({
    name: "Glasses",
    img: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 110,
})
productList.push({
    name: "Wallet",
    img: "https://images.pexels.com/photos/12495665/pexels-photo-12495665.jpeg",
    price: 85,
})


function toggleDesktopMenu(){
    if(!shoppingCartContainer.classList.contains("inactive")){
        shoppingCartContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    if(!shoppingCartContainer.classList.contains("inactive")){
        shoppingCartContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCart(){
    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive");
    }else if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.toggle("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
}

function renderProducts(arr){
    for (product of arr) {
        
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        let productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
        productImg.setAttribute("alt", "Product image");

        let productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        let info = document.createElement("div");

        let productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        let productName = document.createElement("p");
        productName.innerText = product.name;

        info.append(productPrice, productName);
        
        let cartIconFigure = document.createElement("figure");

        let cartIcon = document.createElement("img");
        cartIcon.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
        cartIcon.setAttribute("alt", "Add to Cart Icon");

        cartIconFigure.appendChild(cartIcon);

        productInfo.append(info, cartIconFigure);

        productCard.append(productImg, productInfo);
                
        productsContainer.append(productCard);
    }
}


renderProducts(productList);