const gridContainer = document.querySelector('#gridContainer');

for (let i = 1; i <= 256; i++) {
    const square = document.createElement('div');
    square.classList.add("squares");
    gridContainer.appendChild(square);
    square.addEventListener("mouseenter", (e) => {
        e.currentTarget.style = `
        background-color: red`
})
}

