let array = [];
let item;
let deleteItems;

while (item !== null) {
    item = prompt("Enter an element for the array (Press Cancel to stop):", "banan");
    if (item != "" && item !== null) {
        array.push(item);

    }
}
console.log("Array:", array);
array = array.sort();
console.log("Array sort:", array);

deleteItems = array.splice(1, 3);
console.log("Array delete:", deleteItems);
console.log("Updated Array:", array);


