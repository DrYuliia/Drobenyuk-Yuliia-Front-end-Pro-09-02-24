'use strict'
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    static small_size = { price: 50, ckal: 20 };
    static big_size = { price: 100, ckal: 40 };
    static stuffing_cheese = { price: 10, ckal: 20 };
    static stuffing_salad = { price: 20, ckal: 5 };
    static stuffing_potato = { price: 15, ckal: 10 };
    static topping_spice = { price: 15, ckal: 0 };
    static topping_mayonnaise = { price: 20, ckal: 5 };

    addTopping(topping) {
        this.toppings.push(topping);

    }

    calculatePrice() {
        let totalPrice = this.size.price + this.stuffing.price;
        this.toppings.forEach(topping => {
            totalPrice += topping.price;
        });
        return totalPrice;

    }

    calculateCalories() {
        let totalCalories = this.size.ckal + this.stuffing.ckal;
        this.toppings.forEach(topping => {
            totalCalories += topping.ckal;
        });
        return totalCalories;

    }

}


let hamburger = new Hamburger(Hamburger.small_size, Hamburger.stuffing_cheese);
hamburger.addTopping(Hamburger.topping_mayonnaise);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.topping_spice);
console.log("Price with spice: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.topping_spice);
console.log("Price with sauce:" + hamburger.calculatePrice());