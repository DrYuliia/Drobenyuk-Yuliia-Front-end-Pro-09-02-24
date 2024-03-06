
//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

let array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    let indx = array.indexOf(item);
    if (indx !== -1) {
        array.splice(indx, 1);
    }
}
console.log("Початковий масив:", array);
removeElement(array, 5);
console.log("Зміненний масив:", array);



