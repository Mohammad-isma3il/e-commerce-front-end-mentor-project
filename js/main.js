

const empty = document.getElementById("empty");
const productInfo = document.getElementById("product-info");
const checkout = document.getElementById("checkout");
const icon = document.getElementById("icon");
const list = document.getElementById("prduct-list");

const cartBtn = document.getElementById("button");
const deleteBtn = document.getElementById("delete");
const section = document.getElementsByTagName("html");


const mainImage = document.getElementById("mainImage");

console.log(mainImage);






icon.addEventListener("click", () => {
  list.classList.toggle("active");
});

if (productInfo.classList.contains("active")) {
  console.log("add");
} else {
  empty.classList.add("active");
}

cartBtn.addEventListener("click", () => {
  if (empty.classList.contains("active")) {
    empty.classList.remove("active");
    productInfo.classList.add("active");

    if (productInfo.classList.contains("active")) {
      checkout.classList.add("active");
    }
  }
});
function deleteProduct() {
  productInfo.classList.remove("active");
  checkout.classList.remove("active");
  empty.classList.add("active");
}

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const counterScreen = document.getElementById("counter-screen");

let count = 1;

counterScreen.innerHTML = count;

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterScreen.innerHTML = count;
  }
});

plus.addEventListener("click", () => {
  count++;
  counterScreen.innerHTML = count;
});

let itemPrice = 125;
const price = document.getElementsByClassName("price-tag");
let totalPrice;

cartBtn.addEventListener("click", () => {
  totalPrice = itemPrice * count;
  price[0].innerHTML = `${totalPrice}.00 x ${count}`;

  price[0].setAttribute("data-price", totalPrice);
  price[1].setAttribute("data-quantity", count);
});

deleteBtn.addEventListener("click", () => {
  deleteProduct();
});

const trigger = document.querySelectorAll('.lightbox-trigger');
const lightbox = document.querySelector('#lightbox');


 
trigger.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    lightbox.style.display = "flex";
  })
  
});

const close = document.getElementById('close');

const closeIcon = document.querySelector("path.close-icon");


close.addEventListener("mouseover", () => {
  closeIcon.getAttribute("fill")

  closeIcon.setAttribute("fill", "hsl(26, 100%, 55%)");


  close.addEventListener("mouseleave", () => {
    closeIcon.setAttribute("fill","#FFFF" );
   })
})
close.addEventListener("click", () => {
  lightbox.style.display = "none";
})


let carouselItem = document.querySelectorAll('.carousel-item');

const lightlist = document.querySelectorAll('.light-list');


var carouselImage = document.querySelectorAll(".carousel-item > img");
var listImage = document.querySelectorAll(".light-list > img");

