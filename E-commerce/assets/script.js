let toggleBtn = document.getElementById("menuToggle");
let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav-icons");
let wish = document.querySelector("#wish");
let cart = document.querySelector("#cart");
let order = document.querySelector("#order");
let login = document.querySelector("#login");
let product = document.querySelectorAll(".random")
let random = document.getElementById("random");

wish.addEventListener("click",()=>{
    window.location.href = "/E-commerce/assets/wishlist.html"
})

document.querySelector(".logo").addEventListener("click",()=>{
    window.location.href = "index.html"
})

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("toggle");
    nav.addEventListener("click", () => {
        console.log("clicked")
        nav.classList.remove("toggle")
    })
})


let data;
let url = "https://dummyjson.com/products";

window.addEventListener("load", async () => {
    let res = await fetch(url);
    data = await res.json();
    console.log(data);
    displayData();
    showBest();
})

function displayData() {
    data.products.forEach(product => {

        let div2 = document.createElement("div")
        div2.classList.add("random-card")
        random.appendChild(div2);
        div2.innerHTML = `
        <img src="${product.images[0]}" alt="" srcset="">
        <p>${product.title}</p>
        <p><b>₹${product.price}</b></p>
        <div class="rating">${product.rating} &star;</div>
        <span>${product.minimumOrderQuantity} ratings</span>
        </div>`

        div2.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "assets/product.html";
        });
    });
}

let container = document.querySelector(".card-container") 

  function showBest(){

    data.product.forEach(e =>{
        let div3 = document.createElement("div");
        div3.classList.add("card")
        div3.innerHTML = `
        <img src="${e.images[0]}" alt="">
        <p>${e.title} </p>
        <p><b>From ${e.price}</b></p>
        `;
        container.appendChild(div3)
    });
  }

let categories = document.querySelectorAll(".image");
let value;
categories.forEach(e=>{
    e.addEventListener("click", ()=>{
         value = e.querySelector("p").innerText;
         localStorage.setItem("value",value)
        window.location.href = "assets/categories.html"
    })
})


let input = document.querySelector(".search-bar input");
let searchBtn = document.querySelector(".fa-magnifying-glass");


let searchProduct;
searchBtn.addEventListener("click",()=>{
    console.log("hello")
    let keyword = input.value.toLowerCase();
    let filtered = data.filter((product)=>
        product.title.toLowerCase().includes(keyword)
    );
    displayProduct(filtered);
})
input.addEventListener("keypress",(e)=>{
    if(e.key == "Enter")
    searchBtn.click();
})
