"use strict";

let categories = document.getElementById("categories");
let products = document.getElementById("products");
let productInfo = document.getElementById("product-info");

function toggleClass(elements, className) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle(className);
    }
}



categories.addEventListener("click", function (event) {
    if (event.target.tagName === 'LI') {
        let category = event.target.dataset.category;
        let elements = document.getElementsByClassName(category);
        toggleClass(elements, "hidden");
    }
});

products.addEventListener("click", function (event) {
    if (event.target.tagName === 'LI') {
        let productName = event.target.textContent;
        let productType = event.target.dataset.product;

        showProductInfo(productName, productType);


    }
});

function showProductInfo(productName, productType) {

    if (productType === "product1") {
        document.getElementById("product1").classList.add("show");
        document.getElementById("product2").classList.remove("show");
        document.getElementById("product3").classList.remove("show");
        document.getElementById("product4").classList.remove("show");
    }
    if (productType === "product2") {
        document.getElementById("product2").classList.add("show");
        document.getElementById("product1").classList.remove("show");
        document.getElementById("product3").classList.remove("show");
        document.getElementById("product4").classList.remove("show");
    }
    if (productType === "product3") {
        document.getElementById("product3").classList.add("show");
        document.getElementById("product1").classList.remove("show");
        document.getElementById("product2").classList.remove("show");
        document.getElementById("product4").classList.remove("show");
    }
    if (productType === "product4") {
        document.getElementById("product4").classList.add("show");
        document.getElementById("product1").classList.remove("show");
        document.getElementById("product3").classList.remove("show");
        document.getElementById("product2").classList.remove("show");
    }
    productInfo.innerHTML = `
        <p>Товар: <strong>${productName}</strong></p>
        <button id="buy-button">Купити</button>
    `;
    productInfo.style.display = "block";
    document.getElementById("buy-button").addEventListener("click", function () {
        buyProduct(productName);
    });

    // Показати додаткову інформацію про товар
    document.getElementById("product-details").classList.remove("hidden");
}

function buyProduct(productName) {
    alert(`Товар "${productName}" куплений!`);

    // Очистити блок з інформацією про товар
    productInfo.innerHTML = "";

    // Приховати всі елементи продуктів
    let allProducts = document.querySelectorAll(".product");
    allProducts.forEach(function (product) {
        product.classList.add("h");
    });
}

