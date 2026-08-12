const gridContainer = document.querySelector('#gridContainer');
const sizeButton = document.querySelector('#sizeButton');
const resetButton = document.querySelector('#resetButton');
const colorButton = document.querySelector("#colorButton");
const colorPicker = document.querySelector("#colorPicker");
let penColor = "#ff0000";
let sqrSize = 0;
let calcWidth = 0;
let drawing = false;

colorButton.addEventListener("click", () => {
    colorPicker.click();
});
colorPicker.addEventListener("input", (e) => {
    penColor = e.target.value;
});

document.addEventListener("mouseup", () => {
    drawing = false;
});

sizeButton.addEventListener("click", (e) => {
    gridContainer.innerHTML = "";
    let size = prompt("Squares Per Side? (side*side squares)");
    if (size > 200) {
        alert("Limit Is 200");
        size = 0;
        size = prompt("Squares Per Side? (side*side squares)");
    } else {
        calcWidth = `${(1 / size) * 100}%`;
        sqrSize = size * size;
        makeGrid(sqrSize);
    }
})
resetButton.addEventListener("click", (e) => {
    resetGrid(sqrSize);
})


function resetGrid(number) {
    gridContainer.innerHTML = "";
    for (let i = 1; i <= number; i++) {
        const square = document.createElement('div');
        square.classList.add("squares");
        square.style.width = calcWidth;
        gridContainer.appendChild(square);
        square.addEventListener("mousedown", () => {
            drawing = true;
        });
        square.addEventListener("mouseenter", (e) => {
            if (drawing) {
                e.currentTarget.style.backgroundColor = penColor;
            }
        });
    }
}
function makeGrid(number) {
    for (let i = 1; i <= number; i++) {
        const square = document.createElement('div');
        square.classList.add("squares");
        square.style.width = calcWidth;
        gridContainer.appendChild(square);
        square.addEventListener("mousedown", () => {
            drawing = true;
        });
        square.addEventListener("mouseenter", (e) => {
            if (drawing) {
                e.currentTarget.style.backgroundColor = penColor;
            }
        });
    }
}


