const slider = document.getElementById('myRange');// pixel amout slider row by column
const sliderOutput = document.getElementById('dimensions');
sliderOutput.innerHTML = `${slider.value} x ${slider.value} Pixels`;

slider.oninput = function() {
    sliderOutput.innerHTML = `${this.value} x ${this.value} Pixels`;
    rowsAmt = this.value;
    columnsAmt = this.value;
    gameReset();
}

let rowsAmt = slider.value;
let columnsAmt = slider.value;

const container = document.querySelector('.sqContainer');
const btncontainer = document.querySelector('.btnContainer');
 
columnFill(columnsAmt);// pixel creation 
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
        if (penPicker === 'rainbowPen') {
            let randomcolor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = '#' + randomcolor;
            console.log(pixelColor);
        } else {
            square.style.backgroundColor = pixelColor;
        }
    });
    colContainer[x].appendChild(square);
}
}
}

const penButton = document.querySelector('.penButton');//inpts
const rainbowPen = document.querySelector('.rainbowPen');
const eraserButton = document.querySelector('.eraserButton');
const resetButton = document.querySelector('.resetButton');
const picker = document.getElementById('colorpicker'); // Color Picker

let pixelColor = picker.value;
let penPicker = 'colorPen';

function colorPicker() {
    pixelColor = picker.value;
    penPicker = 'colorPen';
}

function eraserColor() {
    penPicker = 'eraserPen';
    pixelColor = '#d9d9d9';
}

function penColor() {
    penPicker = 'colorPen';
    pixelColor = picker.value;
}

function rainbowColor() {
    penPicker = 'rainbowPen';
}

function gameReset() {  
    const gridCol = document.querySelector('.sqContainer');
    while (gridCol.firstChild) {
        gridCol.removeChild(gridCol.lastChild);
    }
    penColor();
    columnFill(columnsAmt);
    squareFill(columnsAmt,rowsAmt);
}

picker.oninput = colorPicker;
penButton.addEventListener('click', penColor);
rainbowPen.addEventListener('click',rainbowColor);
eraserButton.addEventListener('click', eraserColor);
resetButton.addEventListener('click', gameReset);