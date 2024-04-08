
document.addEventListener("DOMContentLoaded", function () {


    let newTable = document.createElement("table");
    newTable.classList.add("tableStyle");
    newTable.style.border = "1px solid black";
    newTable.style.height = "100px";
    newTable.style.border = "solid";
    newTable.style.textAlign = "center";
    newTable.style.borderColor = "blue";
    document.body.appendChild(newTable);

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");

        newTable.appendChild(tr);
        tr.style.backgroundColor = "aqua";

        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            td.textContent = (i * 10) + (j + 1);
            tr.appendChild(td);



        }
    }
});
