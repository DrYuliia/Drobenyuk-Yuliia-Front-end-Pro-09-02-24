
document.addEventListener("DOMContentLoaded", function () {
    const inputName = document.getElementById("inputName");


    let newDiv = document.createElement("div");
    newDiv.classList.add("focus_div");
    newDiv.textContent = "Focused!";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = "grey";
    document.body.appendChild(newDiv);

    inputName.addEventListener("focus", function () {
        newDiv.style.display = "block";

    });


    inputName.addEventListener("blur", function () {
        newDiv.style.display = "none";
    });
});
