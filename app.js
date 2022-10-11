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
        if(user1Turn){
            cell.textContent = user1.symbol;
            user1Turn = false;
        } else{
            cell.textContent = user2.symbol;
            user1Turn = true;
        }
        
    }
    checkForVictory()
}

function checkForVictory(){
    // obtain cells, make array with their content
    // check against win conditions
    // return player if win.
    return false;
}

//elements
const cell = document.querySelectorAll('.gameCell');

//event listeners
cell.forEach(element=>{element.addEventListener('click',markCell)});

//create start players
const user1 = player('Jeff','X');
const user2 = player('Machine','O');


//Ainda a implementar:
// checkForVictory(), função para checar vitória
// botão reset
// estilização geral.

