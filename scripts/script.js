// locate container div
const board = document.querySelector('.container');

// create 16x16 matrix
function generateMatrix() {
    //16*16=256
    let grid=256
    let i;
    for(i = 0; i<grid; i++) {
        //create a new div
        const div = document.createElement('div');
        //style new div
        div.classList.add('square');
        //add new div to matrix
        board.appendChild(div);
    }

    console.log("i: " + i);
}

//on page load, run function
const body = document.body;
body.onload = generateMatrix();