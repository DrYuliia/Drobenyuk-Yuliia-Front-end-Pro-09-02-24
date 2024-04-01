'use strict';

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    humanInformation() {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
}

class Car {
    constructor(make, model, yearOfProduction, numberPlate, owner) {
        this.make = make;
        this.model = model;
        this.numberPlate = numberPlate;
        this.yearOfProduction = yearOfProduction;

        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("Owner must be at least 18 years old!");
        }
    }

    autoInformation() {
        console.log("Make: " + this.make + ", Model: " + this.model + ", Year of Production: " + this.yearOfProduction + ", Number Plate: " + this.numberPlate);
        if (this.owner) {
            this.owner.humanInformation();
        }
    }
}

let human1 = new Human("Emma", 25);
let human2 = new Human("John", 18);

let car1 = new Car("Audi", "A4", 2006, "KF9696", human1);
let car2 = new Car("BMW", "X5", 2018, "AB1234", human2);

console.log("People:");
human1.humanInformation();
human2.humanInformation();

console.log("\nCars:");
car1.autoInformation();
car2.autoInformation();
