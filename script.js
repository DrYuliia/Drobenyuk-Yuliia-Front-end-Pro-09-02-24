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
    const products = ["product1", "product2", "product3", "product4"];

    products.forEach((product) => {
        const element = document.getElementById(product);
        if (product === productType) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    });

    productInfo.innerHTML = `
        <p>Товар: <strong>${productName}</strong></p>
        <button id="buy-button">Купити</button>
    `;
    productInfo.style.display = "block";
    document.getElementById("buy-button").addEventListener("click", function () {
        buyProduct(productName);
    });
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

