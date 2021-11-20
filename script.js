const container = document.querySelector('.sqContainer');
const btncontainer = document.querySelector('.btnContainer');
let rows = 100;
let columns = 100;

for (x=0; x< columns; x++) {
let colContainer = document.createElement('div');
colContainer.classList.add('colContainer' + x);
colContainer.setAttribute('id', 'colCont');

container.appendChild(colContainer);
}

for (x=0; x< columns; x++) {
    let colContainer = document.querySelector('.colContainer' + x);
    for (j=0; j<rows; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'black';
    });

    colContainer.appendChild(square);
}
}

let resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = 'Reset'
resetButton.style.margin = '12px 0'
resetButton.addEventListener('click', function() {  
    let squares = document.getElementsByClassName('square');
    for (x=0; x< (columns*rows); x++) {
    squares[x].style.backgroundColor = 'rgb(190, 190, 190)';
    }
  
});

btncontainer.insertBefore(resetButton, btncontainer.firstChild);