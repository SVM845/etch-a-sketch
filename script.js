const gridContainer = document.querySelector('#gridContainer');
const sizeButton = document.querySelector('#sizeButton');
const resetButton = document.querySelector('#resetButton');
let sqrSize = 0;
let calcWidth = 0;

sizeButton.addEventListener("click", (e) => {
    gridContainer.innerHTML = "";
    let size = prompt("Squares Per Side? (side*side squares)");
    if (size > 100) {
        alert("Limit Is 100");
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
        square.addEventListener("mouseenter", (e) => {
            e.currentTarget.style.backgroundColor = "red";
        })
    }
}
function makeGrid(number) {
    for (let i = 1; i <= number; i++) {
        const square = document.createElement('div');
        square.classList.add("squares");
        square.style.width = calcWidth;
        gridContainer.appendChild(square);
        square.addEventListener("mouseenter", (e) => {
            e.currentTarget.style.backgroundColor = "red";
        })
    }
}
