const gridContainer = document.querySelector('#gridContainer');
gridContainer.style.display = 'grid';

// create 16x16 grid of square divs
function drawGrid(gridSize){
    gridSize = parseInt(gridSize);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (i=1; i<=gridSize; i++){
        for (j=1; j<=gridSize; j++){
            const gridCell = document.createElement('div');
            gridCell.setAttribute('id', `box-${i}-${j}`);
            gridCell.setAttribute('class', 'gridCell');
            gridContainer.appendChild(gridCell);
        }
    }
}
function addListeners(){
    const gridCollection = gridContainer.querySelectorAll('div');
    gridCollection.forEach(gridCell => {
        gridCell.addEventListener('mouseover', colorCell);    
    });
}

drawGrid(16);
addListeners();

function colorCell(eventData){
    const selectedCell = gridContainer.querySelector(`#${eventData.target.id}`)
    selectedCell.classList.add('colored');
}
// reset and prompt for new grid dimensions
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetView);
function resetView(){
    newGridSize = parseInt(prompt("What is the grid size? (max 100)"));
    if (newGridSize && !isNaN(newGridSize) && newGridSize <= 100){
        const gridToClear = document.getElementsByClassName('gridCell');
        while(gridToClear.length > 0){
            gridToClear[0].parentNode.removeChild(gridToClear[0]);
        }
        drawGrid(newGridSize);
        addListeners();
    }
}