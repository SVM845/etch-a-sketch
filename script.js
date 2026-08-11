

for (let i = 1; i <= 256; i++) {
    const square = document.createElement('div');
    const gridContainer = document.querySelector('#gridContainer');
    square.classList.add("squares");
    gridContainer.appendChild(square);
}