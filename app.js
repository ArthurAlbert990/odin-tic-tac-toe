console.log('js working');


//saves the current board state:
let gameboard = [];


 function player(name){
    /** 
    *Factory function to create new players.
    */
    return {name};
}


function markCell(e){
    //obtain the cell 'index' from the grid
    //if cell is empty, mark with x or o.
    //check if won
    //other player turn.
    console.log('markcell')
    console.log(e.target.getAttribute('data-position'))
}

//elements
const cell = document.querySelectorAll('.gameCell');

//event listeners

cell.forEach(element=>{element.addEventListener('click',markCell)});


