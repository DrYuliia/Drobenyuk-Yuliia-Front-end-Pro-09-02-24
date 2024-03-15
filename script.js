"use strict";

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log("Заданний масив: ", array);

//1.Знайти суму та кількість позитивних елементів
function sumPositiveNumbers(a) {
    let sumNumbers = 0;
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            counter++;
            sumNumbers += a[i];
        }
    }
    console.log("Kількість позитивних елементів: ", counter);
    return sumNumbers;
}
console.log("1.Cумa позитивних елементів: ", sumPositiveNumbers(array));


//2.Знайти мінімальний елемент масиву та його порядковий номер.
function minNumber(array) {
    let min = array[0];
    let ind = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            ind = i;
        }
    }
    console.log("Порядковий номер  мінімального числа масиву: ", ind);
    return min;
}
console.log("2.Mінімальний елемент масиву: ", minNumber(array));

//3.Знайти максимальний елемент масиву та його порядковий номер.
function maxNumber(array) {
    let max = array[0];
    let ind = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            ind = i;
        }
    }
    console.log("Порядковий номер  максимального числа масиву: ", ind);
    return max;
}
console.log("3.Максимальний елемент масиву: ", maxNumber(array));

//4.Визначити кількість негативних елементів.
function NegativeNumber(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            counter++;

        }
    }

    return counter;
}
console.log("4.Kількість негативних елементів масиву: ", NegativeNumber(array));

//5.Знайти кількість непарних позитивних елементів
function oddPositiveNumbers(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 !== 0) {
            counter++;
        }
    }

    return counter;
}
console.log("5.Kількість непарних позитивних елементів: ", oddPositiveNumbers(array));

//6.Знайти кількість парних позитивних елементів.
function evenPositiveNumbers(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 === 0) {
            counter++;
        }
    }

    return counter;
}
console.log("6.Kількість парних позитивних елементів: ", evenPositiveNumbers(array));

//7.Знайти суму парних позитивних елементів

function sumEvenPositiveNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 === 0) {
            sum += array[i];
        }
    }

    return sum;
}
console.log("7.Cумa парних позитивних елементів: ", sumEvenPositiveNumbers(array));


//8.Знайти суму непарних позитивних елементів.
function sumOddPositiveNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 !== 0) {
            sum += array[i];
        }
    }

    return sum;
}
console.log("8. Cумa непарних позитивних елементів: ", sumOddPositiveNumbers(array));

//9.Знайти добуток позитивних елементів.
function multiplEvenPositiveNumbers(array) {
    let multipl = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            multipl *= array[i];
        }
    }

    return multipl;
}
console.log("9. Добуток позитивних елементів: ", multiplEvenPositiveNumbers(array));

//10.Знайти найбільший серед елементів масиву, остальні обнулити
function nullArray(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] !== max) {
            array[i] = 0;
        }
    }


    return array;
}
console.log("10.Обнулений масив: ", nullArray(array));
