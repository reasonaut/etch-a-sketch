const gridContainer = document.querySelector('#gridContainer');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';

// create 16x16 grid of square divs
for (i=1; i<=16; i++){
    for (j=1; j<=16; j++){
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('id', `box-${i}-${j}`);        
        gridSquare.textContent = 'test'
        gridContainer.appendChild(gridSquare);
        console.log(gridSquare);
    }
}