console.log('js working');


//saves the current board state:
let gameboard = {};
let user1Turn = true;
//possible winning scenarios:
const winningArray = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


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
            gameboard[cellIndex]=user1.symbol;
            checkForVictory(user1, user1.symbol);
            user1Turn = false;

        } else{
            cell.textContent = user2.symbol;
            gameboard[cellIndex]=user2.symbol;
            checkForVictory(user2, user2.symbol);
            user1Turn = true;
        }
        
    }
    
}

function checkForVictory(user,symbol){
    // obtain cells, make array with their content
    // check against win conditions
    // return player if win.

    console.log('check for victory');

    for (let combination of winningArray){
        console.log(combination)
        if(gameboard[combination[0]]==symbol && gameboard[combination[1]]==symbol && gameboard[combination[2]]==symbol){
            console.log(`WINNER: ${user.name}, WITH SYMBOL: ${user.symbol}`);
            return(user);
        }
    }

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

