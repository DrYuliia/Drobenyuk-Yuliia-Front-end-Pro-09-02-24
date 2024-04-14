"use strict"
let voteDiv = document.getElementById("vote_div");
let voteParagraphs = voteDiv.querySelectorAll("p");

voteParagraphs.forEach(function (voteParagraph) {
    voteParagraph.addEventListener("click", function (event) {
        let target = event.currentTarget.querySelector("span");

        if (target && target.tagName === 'SPAN') {
            voteCounter(target);
        }
    });
});

function voteCounter(element) {
    let currentValue = parseInt(element.dataset.counter) || 0;
    currentValue++;
    element.dataset.counter = currentValue;
    element.textContent = currentValue;
}