let hours = Number(prompt("Please enter hours:", 3));
const oneMinute = 60;
const oneHours = 60;
const secondsOneHour = oneMinute * oneHours;

let result = hours * secondsOneHour;
alert(`${hours} hours have ${result} seconds`);