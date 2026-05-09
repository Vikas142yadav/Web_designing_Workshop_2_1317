// AMAZON HOMEPAGE JAVASCRIPT

// Search Button Function
function searchProduct() {

    let searchText = document.getElementById("searchInput").value;

    if (searchText === "") {
        alert("Please enter a product name");
    } 
    else {
        alert("Searching for: " + searchText);
    }
}


// Scroll To Top Function
function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Cart Function
const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click", function () {
    alert("Cart is currently empty");
});


// Menu Hover Effect
const menuItems = document.querySelectorAll(".menu div");

menuItems.forEach(function(item) {

    item.addEventListener("mouseenter", function() {
        item.style.color = "#febd69";
    });

    item.addEventListener("mouseleave", function() {
        item.style.color = "white";
    });

});


// Product Box Hover Animation
const productBoxes = document.querySelectorAll(".box");

productBoxes.forEach(function(box) {

    box.addEventListener("mouseenter", function() {
        box.style.transform = "scale(1.03)";
        box.style.transition = "0.3s";
    });

    box.addEventListener("mouseleave", function() {
        box.style.transform = "scale(1)";
    });

});


// Add To Cart Buttons
const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Product added to cart");

    });

});


// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");

if(darkModeBtn){

    darkModeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

    });

}


// Image Slider
let heroImages = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
];

let heroSection = document.querySelector(".hero");

let index = 0;

setInterval(function() {

    index++;

    if(index >= heroImages.length){
        index = 0;
    }

    heroSection.style.backgroundImage = 
    "url('" + heroImages[index] + "')";

}, 3000);


// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const menu = document.querySelector(".menu");

if(mobileMenuBtn){

    mobileMenuBtn.addEventListener("click", function(){

        menu.classList.toggle("show-menu");

    });

}