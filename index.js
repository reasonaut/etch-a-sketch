const gridContainer = document.querySelector('#gridContainer');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridContainer.style.height = '100%';
// create 16x16 grid of square divs
for (i=1; i<=16; i++){
    for (j=1; j<=16; j++){
        const gridCell = document.createElement('div');
        gridCell.setAttribute('id', `box-${i}-${j}`);
        gridCell.setAttribute('class', 'gridCell');
        gridCell.textContent = 'test';
        gridContainer.appendChild(gridCell);
    }
}
// add listener for mouseover to color cell
const gridCollection = gridContainer.querySelectorAll('div');
gridCollection.forEach(gridCell => {
    gridCell.addEventListener('mouseover', colorCell);    
});
function colorCell(eventData){
    const selectedCell = gridContainer.querySelector(`#${eventData.target.id}`)
    selectedCell.classList.add('colored');
}