const gridBase = document.querySelector('div.gridBase');

for (let i=0; i<256; i++) {
    const block = document.createElement('div');
    block.setAttribute('style', 'box-sizing: border-box; border: 1px solid black; width: 30px;');
    block.addEventListener('mouseover', function(e) {
        const t = e.target;
        t.classList.add('blackBackGround');
    })
    gridBase.appendChild(block);
}