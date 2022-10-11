console.log('js working');


//saves the current board state:
let gameboard = [];
let user1Turn = true;


 function player(name,symbol){
    /** 
    *Factory function to create new players.
    */
    return {name,symbol};
}


function markCell(e){
    //obtain the cell 'index' from the grid
    //if cell is empty, mark with x or o.
    //check if won
    //other player turn.
    console.log('markcell');
    let cell = e.target;
    let cellIndex = e.target.getAttribute('data-position');
    if (cell.textContent == ''){
        cell.textContent = user1.symbol;
    }
    checkForVictory()
}

function checkForVictory(){
    // obtain cells, make array with their content
    // check against win conditions
}

//elements
const cell = document.querySelectorAll('.gameCell');

//event listeners
cell.forEach(element=>{element.addEventListener('click',markCell)});

//create start players
const user1 = player('Jeff','X');
const user2 = player('Machine','O');


//Ainda a implementar:
// a cada jogada, mudar o jogar 'X' OU 'O'
// checkForVictory(), função para checar vitória
// botão reset
// estilização geral.

