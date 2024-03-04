//1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
let array = [];
for (let i = 20; i <= 30; i += 0.5) {
    array.push(i);
}
console.log("Числа від 20 до 30: ", array.join(" "));



//2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let currency = [];
let multiplier = 27;
console.log("Вартість 1 долара:", multiplier + "грн");
for (let i = 10; i <= 100; i += 10) {
    console.log(i + " $ - " + i * multiplier + " грн");
}



//3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N 
let wholeNumber = Number(prompt("Введіть ціле число", 25));
let squareNum;
let squareArray = [];
if (wholeNumber) {
    for (let i = 1; i <= 100; i++) {
        squareNum = i ** 2;

        if (squareNum <= wholeNumber) {
            squareArray.push(squareNum);

        }
    }
    console.log("Ви ввели ціле число:", wholeNumber);
    console.log("Всі цілі числа,квадрат яких не перевищує " + wholeNumber, squareArray);
}
else if (wholeNumber == false) {
    console.log("Ви відмінили введення числа.");
}
else {
    console.log("Ви ввели не коректні дані.");
}


//4.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
let wholeNum = Number(prompt("Введіть ціле число", 15));
let counter = 0;

for (let i = 1; i <= wholeNum; i++) {

    if (wholeNum % i === 0) {
        counter++;
    }
}
if (counter === 2) {
    console.log("Введене число: " + wholeNum + " просте");
}
else if (counter > 2) {
    console.log("Введене число: " + wholeNum + " складене");
}
else if (wholeNum === 1) {
    console.log("Введене число: " + wholeNum + " не належить ні до простих, ні до складених чисел");
}
else if (wholeNum == false) {
    console.log("Ви відмінили введення числа.");
}
else {
    console.log(" Ви ввели строку,а не число.");
}




//5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
let num = Number(prompt("Введіть ціле число", 9));
let res = 1;
let x = 0;
do {
    res *= 3;
    x++;
} while (res < num);
if (res === num) {
    console.log("Так, число " + num + " можна отримати шляхом зведення числа: 3 у " + x + " ступені.");
} else {
    console.log("Ні, число " + num + " не можна отримати шляхом зведення числа 3 у деякий ступінь.");
}