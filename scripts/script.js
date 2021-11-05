// locate container div
const board = document.querySelector('.container');

//set matrix dimensions
//default is 16x16 matrix
let matrixLength=16;
let grid;

//define defaults
let defaultHeight=board.offsetHeight;
let defaultWidth=board.offsetWidth;
let heightPerSquare;
let widthPerSquare;

// create dynamic matrix within fixed container height and width of 640x640px
function generateMatrix() {
    //compute various dimensions
    heightPerSquare=defaultHeight/matrixLength;
    widthPerSquare=defaultWidth/matrixLength;
    // console.log("heightPerSquare: " + heightPerSquare);
    // console.log("widthPerSquare: " + widthPerSquare);

    board.style.gridTemplateColumns=`repeat(${matrixLength},${widthPerSquare}px)`;
    board.style.gridTemplateRows=`repeat(${matrixLength},${heightPerSquare}px)`;

    //define the dynamic grid here
    grid=matrixLength**2;

    // create the grid
    let i;
    for(i = 0; i<grid; i++) {
        //create a new div
        const div = document.createElement('div');
        //style new div
        div.classList.add('square');
        div.style.height=heightPerSquare;
        div.style.width=widthPerSquare;
        //use eventListener to add hovered class
        div.addEventListener("mouseover", function(e) {
            e.target.classList.add('hovered');
        });
        //add new div to matrix
        board.appendChild(div);
    }

    console.log("number of grid squares generated: " + i);
}

//on page load, run function
const body = document.body;
body.onload = generateMatrix();


//locate reset btn
const btn = document.querySelector('#reset');
btn.addEventListener('click', resetBoard);

//reset colour and seek input
const matrix = document.querySelectorAll('.container div');
function resetBoard() {
    for (let i = 0; i<matrix.length; i++){
        let item = matrix[i];
        item.classList.remove('hovered');
    }

    //seek input
    let newMatrix = parseInt(prompt("Enter a number from 1 up to 100", "16"));
    
    //sanitise inputs
    if(isNaN(newMatrix)){
        newMatrix=16;
    }else if(newMatrix>100){
        newMatrix=100;
    }else if(newMatrix<1){
        newMatrix=16;
    }else{
        //do nothing LOL
    }
    
    matrixLength = newMatrix;
    removeMatrix();
    generateMatrix();
    // console.log("matrixLength: " + matrixLength);

}

//remove all squares
function removeMatrix() {
    while(board.firstChild){board.removeChild(board.lastChild)};
}