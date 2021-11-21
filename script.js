const container = document.querySelector('.sqContainer');
const btncontainer = document.querySelector('.btnContainer');

let penButton = document.querySelector('.penButton');
penButton.addEventListener('click', penColor);

let rainbowPen = document.querySelector('.rainbowPen');
rainbowPen.addEventListener('click',rainbowColor);

let eraserButton = document.querySelector('.eraserButton');
eraserButton.addEventListener('click', eraserColor);

let resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', gameReset);

const picker = document.getElementById('colorpicker');

picker.oninput = function() {
    pixelColor = this.value;
}

let pixelColor = picker.value;
const slider = document.getElementById('myRange');
const sliderOutput = document.getElementById('dimensions');
sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    sliderOutput.innerHTML = `${this.value} x ${this.value}`;
    rowsAmt = this.value;
    columnsAmt = this.value;
    gameReset();

}
let rowsAmt = slider.value;
let columnsAmt = slider.value;



columnFill(columnsAmt);
squareFill(columnsAmt,rowsAmt);

function columnFill(columns) {
for (x=0; x< columns; x++) {
let colContainer = document.createElement('div');
colContainer.classList.add('colContainer');
colContainer.setAttribute('id', 'colCont');

container.appendChild(colContainer);
}
}

function squareFill(columns, rows) {
for (x=0; x< columns; x++) {
    let colContainer = document.getElementsByClassName('colContainer');
    for (j=0; j<rows; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', function() {
        if (pixelColor === 'rainbow') {
            let randomcolor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = '#' + randomcolor;
            console.log(pixelColor);
        } else if (pixelColor === 'shade') {
        } else {
            square.style.backgroundColor = pixelColor;
        }
    });

    colContainer[x].appendChild(square);
}
}
}

function eraserColor() {
    pixelColor = '#d9d9d9';
}

function penColor() {
    pixelColor = picker.value;
}

function rainbowColor() {
    pixelColor = 'rainbow'
}

function gameReset() {  
    const gridCol = document.querySelector('.sqContainer');
    while (gridCol.firstChild) {
        gridCol.removeChild(gridCol.lastChild);
    }
    columnFill(columnsAmt);
    squareFill(columnsAmt,rowsAmt);
}