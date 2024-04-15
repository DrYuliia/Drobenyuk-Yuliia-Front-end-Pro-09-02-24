"use strict"

let voteDiv = document.getElementById("vote_div");

voteDiv.addEventListener("click", function (event) {
    if (event.target.tagName === 'P') {
        let res = event.target.querySelector("span");
        if (res && res.dataset.counter != undefined) {
            let currentValue = parseInt(res.dataset.counter) || 0;
            currentValue++;
            res.dataset.counter = currentValue;
            res.textContent = currentValue;
        }
    }
});