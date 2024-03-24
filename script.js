const setNumber = () => {
    let previousSum = 0;
    return function (num) {
        previousSum += num;
        console.log(previousSum);
    }

}
let newSum = setNumber();
newSum(3);
newSum(5);
newSum(20);