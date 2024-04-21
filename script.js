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
    let form = document.getElementById("form-buy");
    form.classList.remove("hidden");
    document.getElementById("buy-button").classList.add("hidden");

    let allProducts = document.querySelectorAll(".product");
    allProducts.forEach(function (product) {
        product.classList.add("h");
    });




    document.querySelector('.form-buy').addEventListener('submit', function (event) {
        event.preventDefault();


        let formData = new FormData(this);
        let name = formData.get('name');
        let city = formData.get('city');
        let post = formData.get('post');
        let payment = formData.get('payment');
        let counter = formData.get('counter');
        let coment = formData.get('coment');


        if (!name || !city || !post || !payment || !counter) {

            document.getElementById('error-message').style.display = 'block';
            return;
        } else {

            document.getElementById('error-message').style.display = 'none';
        }



        let deliveryInfo = document.getElementById('delivery-info');


        deliveryInfo.innerHTML = `
      
        <h2>Order Summary</h2><br>
        <p>Товар: <strong>${productName} </strong></p>
        <p>Кількість товару: <strong>${counter}</strong></p>
        <p>ПІБ: <strong>${name}</strong></p>
        <p>Місто: <strong>${city}</strong></p>
        <p>Склад Нової Пошти: <strong>${post}</strong></p>
        <p>Спосіб оплати: <strong>${payment}</strong></p>
        <p>Коментар: <strong>${coment}</strong></p>
    `;

        document.getElementById('form-buy').classList.add('hidden');
    });

}

