const gridContainer = document.querySelector('#gridContainer');
const sizeButton = document.querySelector('#sizeButton');
const resetButton = document.querySelector('#resetButton');
let sqrSize = 0;
let calcWidth = 0;

sizeButton.addEventListener("click", (e) => {
    
    let size = prompt("Squares Per Side? (side*side squares)");
    if (size > 100) {
        alert("Limit Is 100");
        size = 0;
        size = prompt("Squares Per Side? (side*side squares)");
    } else {
        calcWidth = `${(1 / size) * 100}%`;
        sqrSize = size * size;
    }


    for (let i = 1; i <= sqrSize; i++) {
        const square = document.createElement('div');
        square.classList.add("squares");
        square.style.width = calcWidth;
        gridContainer.appendChild(square);
        // square.addEventListener("mouseenter", (e) => {
        //     e.currentTarget.style = `
        // background-color: red`
        // })
    }
    const count = gridContainer.querySelectorAll('div').length;
    console.log(count);
})

