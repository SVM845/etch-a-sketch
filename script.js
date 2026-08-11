const gridContainer = document.querySelector('#gridContainer');
const sizeButton = document.querySelector('#sizeButton');
const resetButton = document.querySelector('#resetButton');



sizeButton.addEventListener("click", (e) => {
    let size = prompt("Squares Per Side? (side*side squares)");
    let sqrSize = size*size;
    for (let i = 1; i <= sqrSize; i++) {
        const square = document.createElement('div');
        square.classList.add("squares");
        gridContainer.appendChild(square);
        square.addEventListener("mouseenter", (e) => {
            e.currentTarget.style = `
        background-color: red`
        })
    }

})
