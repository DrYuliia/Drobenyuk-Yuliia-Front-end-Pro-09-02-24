"use strict";
//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let array = [1, 5, "/", "hello", "*", NaN, 2, Infinity, "javaScript", 3];

function arithmeticMean(arr) {
    let result;
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number' && !isNaN(arr[i]) && isFinite(arr[i])) {
            sum += arr[i];
            count++;
        }
    }
    if (count > 0) {
        result = sum / count;
    }
    return result;
}

console.log(`Данний масив: ${array}
Середнє значення всіх числових елементів масиву: ${arithmeticMean(array)}`);

/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/

let x = Number(prompt("Enter number x:", 5));
let y = Number(prompt("Enter number y:", 2));
let znak = prompt("Choose what to do: +  -  *  /  %  ^ ", "*");

function doMath(x, znak, y) {
    let result = 0;
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = x ** y;
            break;
        default:
            console.log("Invalid operator");
    }
    return result;
}
console.log(`${x} ${znak} ${y} = ${doMath(x, znak, y)}`);



/*3.Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач.
Значення всіх елементів всіх масивів задає користувач.*/
let xNumber = Number(prompt("Enter number for first array", 5));
let yNumber = Number(prompt("Enter number for second array", 3));

function twoDimensionalArray(xNumber, yNumber) {
    let ar = new Array(xNumber);
    for (let i = 0; i < xNumber; i++) {
        ar[i] = new Array(yNumber);
        for (let j = 0; j < yNumber; j++) {
            ar[i][j] = prompt(`Enter value for element at position (${i}, ${j})`);
        }
    }
    return ar;
}
console.log(twoDimensionalArray(xNumber, yNumber));

/*4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
 Вихідний рядок та символи для видалення задає користувач.
 */

let str = prompt("Enter some sentences:", "Hello my world!");
let strSymbol = prompt("Enter symbol", "l");
let res = "";

function removeElement(str, strSymbol) {
    if (strSymbol === null) {
        console.log("Symbol is empty!");
        return null;
    }
    for (let i = 0; i < str.length; i++) {
        if (!strSymbol.includes(str[i])) {
            res += str[i];
        }
    }
    return res;
}

console.log("Початкова строка:", str);
let modifyStr = removeElement(str, strSymbol);

if (modifyStr !== null) {
    console.log("Зміненна строка:", modifyStr);
} else {
    console.log("Рядок не був змінений через відсутність символів для видалення.");
}