/*
Реалізуйте функцію generateKey(length, characters),
 яка повертає рядок випадкових символів із набору characters довжиною length.
*/
let result = [];
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(lenght, characters) {
    for (let i = 0; i <= lenght; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }
    return result.join("");
}
const key = generateKey(16, characters);
console.log(key);