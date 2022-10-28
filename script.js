const gridBase = document.querySelector('div.gridBase');
const sizeButton = document.querySelector('button.sizeButton');
sizeButton.addEventListener('click', function() {
    let size = 16;
    do {
        size = prompt('Select size:');
    } while (parseInt(size) > 100)
    gridBase.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
    printGrid(size);
})

function printGrid(size) {
    gridBase.innerHTML = '';
    for (let i=0; i<size ** 2; i++) {
        const block = document.createElement('div');
        block.classList.add('gridBlock');
        block.addEventListener('mouseover', function(e) {
            const t = e.target;
            t.classList.add('blackBackGround');
        })
        gridBase.appendChild(block);
    }
}
