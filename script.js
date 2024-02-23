let numberOne = Number(prompt("Enter number one", 5));
let numberTwo = Number(prompt("Enter number two", 3));

let sum = 0,
    rest = 0,
    multiplicar = 0,
    division = 0;

sum = numberOne + numberTwo;
rest = numberOne - numberTwo;
multiplicar = numberOne * numberTwo;
division = numberOne / numberTwo;

alert(`User entered two numbers ${numberOne}  and ${numberTwo}
        ${numberOne}+${numberTwo}=${sum}
        ${numberOne}-${numberTwo}=${rest}
        ${numberOne}*${numberTwo}=${multiplicar}
        ${numberOne}/${numberTwo}=${division}
`);