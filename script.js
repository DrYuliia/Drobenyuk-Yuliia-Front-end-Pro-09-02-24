"use strict";
/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функціюpow (num, degree).
*/
let num = prompt("Enter number:", 5);
let degree = prompt("Enter degree:", 5);

if (isNaN(num) || isNaN(degree) || degree === null || num === null) {
    console.log("Oops! Please enter valid numbers.");
}
else {

    function pow(num, degree) {


        if (degree === 1) {
            return num;
        }
        if (degree === 0) {
            return 1;
        }
        else {
            return num * pow(num, degree - 1);

        }

    }
    console.log(`Число ${num} в ступені ${degree} = ${pow(num, degree)}`);
}