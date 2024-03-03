
//1.Вивести на сторінку в один рядок через кому числа від 10 до 20
let array = [];
for (let i = 10; i <= 20; i++) {
    array.push(i);
}
console.log("Числа від 10 до 20: ", array.join(","));


//2.Вивести квадрати чисел від 10 до 20
let arraySquere = [];
for (let i = 10; i <= 20; i++) {
    arraySquere.push(i ** 2);
}
console.log("Квадрати чисел від 10 до 20", arraySquere);


//3.Вивести таблицю множення на 7
let arrayMultiplication = [];
let multiplier = 7;
console.log("Таблиця множення на 7:")
for (let i = 1; i <= 9; i++) {
    arrayMultiplication.push(i * multiplier);
    console.log(i + "*" + multiplier + "=" + arrayMultiplication.length * multiplier);
}

//4.Знайти суму всіх цілих чисел від 1 до 15
let sumWholeNum = 0;
for (let i = 1; i <= 15; i++) {
    sumWholeNum += i;
}
console.log("Cумa всіх цілих чисел від 1 до 15 = ", sumWholeNum);

//5.Знайти добуток усіх цілих чисел від 15 до 35.
let multiplicar = 1;
for (let i = 15; i <= 35; i++) {
    multiplicar *= i;
}
console.log("Добуток усіх цілих чисел від 15 до 35 = ", multiplicar);

//6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let averageValue = 0;
for (let i = 1; i <= 500; i++) {
    averageValue += i;
}
averageValue = averageValue / 500;
console.log("Cереднє арифметичне всіх цілих чисел від 1 до 500 = ", averageValue);

//7.Вивести суму лише парних чисел в діапазоні від 30 до 80
let sumEvenNumbers = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumEvenNumbers += i;
    }
}
console.log("Cумa лише парних чисел в діапазоні від 30 до 80 = ", sumEvenNumbers);


//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3
let oddNumbers = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        oddNumbers.push(i);
    }
}
console.log("Bсі числа в діапазоні від 100 до 200 кратні 3 = ", oddNumbers);

//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники
//10.Визначити кількість його парних дільників.
//11.Знайти суму його парних дільників.
let num = Number(prompt("Введіть натуральне число", 6));
let numArray = [];
let counter = 0;
let sumNumber = 0;
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        numArray.push(i);
        if (i % 2 === 0) {
            counter++;
            sumNumber += i;
        }

    }
}
console.log("Дільники введенного натурального числа", num + ":", numArray);
console.log("Кількість парних дільників", num + ":", counter);
console.log("Cумa парних дільників", num + ":", sumNumber);

//12.Надрукувати повну таблицю множення від 1 до 10.
console.log("Таблиця множення від 1 до 10:")
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
    console.log("\n");
}

