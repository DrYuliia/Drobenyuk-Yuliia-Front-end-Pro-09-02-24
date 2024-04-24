"use strict";

let categories = document.getElementById("categories");
let products = document.getElementById("products");
let productInfo = document.getElementById("product-info");
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];



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
        let orderDate = new Date().toISOString();
        let productPrice = event.target.dataset.price;


        showProductInfo(productName, productType, orderDate, productPrice);
    }
});

function showProductInfo(productName, productType, orderDate, productPrice) {
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
        <p>Ціна: <strong>${productPrice}</strong></p>
        <button id="buy-button">Купити</button>
        <button id="basket-button">Додати до замовлення</button>
    `;
    productInfo.style.display = "block";
    document.getElementById("buy-button").addEventListener("click", function () {
        buyProduct(productName);
    });

    document.getElementById("basket-button").addEventListener("click", function () {
        basketList(productName, orderDate, productPrice, productInfo);
    });
}

function basketList(productName, orderDate, productPrice) {
    let order = {
        product: productName,
        date: orderDate,
        price: productPrice
    };
    shoppingList.push(order);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function removeOrder(productName) {
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    let indexToRemove = shoppingList.findIndex(order => order.product === productName);

    if (indexToRemove !== -1) {

        shoppingList.splice(indexToRemove, 1);
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        displayOrders();
    } else {
        console.log("Елемент не знайдено для видалення.");
    }
}


function displayOrders() {
    let orders = JSON.parse(localStorage.getItem('shoppingList')) || [];
    let ordersContainer = document.getElementById("basket_info");
    ordersContainer.innerHTML = '';

    orders.forEach(function (order) {
        let orderElement = document.createElement('div');
        orderElement.innerHTML = `
         <div class="order-item">
            <p>Товар: <strong>${order.product}</strong></p>
            <p>Дата замовлення: ${order.date}</p>
             <p>Ціна: ${order.price}</p>
             <button class="toggle-details">Показати деталі</button>
           
                <div class="order-details hidden">
                  
       
            <p>Додаткова інформація: термін доставки 10-15 днів</p>
          
            
                </div>
            <button class="deleteOrder" data-product="${order.product}">Видалити замовлення</button>
            <hr>
            </div>
        `;

        ordersContainer.appendChild(orderElement);

        orderElement.querySelector('.deleteOrder').addEventListener("click", function (event) {
            let productN = event.target.dataset.product;
            removeOrder(productN);

        });
        orderElement.querySelector('.toggle-details').addEventListener("click", function (event) {
            let details = event.target.nextElementSibling;
            details.classList.toggle('hidden');
            event.target.textContent = details.classList.contains('hidden') ? 'Показати деталі' : 'Приховати деталі';
        });
    });
}

document.getElementById("basket").addEventListener("click", function () {
    displayOrders();
    let div = document.getElementById("container");
    div.style.display = "none";
});

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
            <h2>Підсумок Замовлення</h2><br>
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
