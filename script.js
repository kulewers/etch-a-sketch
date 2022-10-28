const gridBase = document.querySelector('div.gridBase');
const sizeButton = document.querySelector('button.sizeButton');
const colorModeButton = document.querySelector('button.colorModeButton');

let size = 16;

let mode = 0;
// 0 - standart
// 1 - rainbow

gridBase.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
printGrid(size, mode);


sizeButton.addEventListener('click', function() {
    size = 16;
    do {
        size = prompt('Select size:');
    } while (parseInt(size) > 100)
    gridBase.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
    printGrid(size, mode);
})

colorModeButton.addEventListener('click', function() {
    do {
        mode = parseInt(prompt('Select size:'));
    } while (mode == NaN)
    printGrid(size, mode);
})


function printGrid(size, mode) {
    gridBase.innerHTML = '';
    for (let i=0; i<size ** 2; i++) {
        const block = document.createElement('div');
        block.classList.add('gridBlock');
        if (mode === 0) {
            block.addEventListener('mouseover', blackModeEventHandler);
        } else if (mode === 1) {
            block.addEventListener('mouseover', colorModeEventHandler);
        }
        gridBase.appendChild(block);
    }
}

function blackModeEventHandler(e) {
    const t = e.target;
    t.setAttribute('style', 'background-color: black;');
}

function colorModeEventHandler(e) {
    const t = e.target;
    t.setAttribute('style', `background-color: rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
        )`
        )
}