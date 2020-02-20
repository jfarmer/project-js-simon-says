let DEBUGGING_MODE=true;

function debug(arg1, arg2, arg3) {
    if (DEBUGGING_MODE) {
        console.log(arg1, arg2, arg3);
    }
}


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'gray', 'pink'];
// let index = readlineSync.keyInSelect(colors, 'What color background do you want?');

let currentTurn = 0;
let players = ['X', 'O'];

function handleBoardClick(element) {
    console.log(element.id);
    let cellData = element.id.split('-');

    console.log(cellData);
    let currentPlayer = players[currentTurn % 3];

    element.innerText = currentPlayer;

    currentTurn += 1;
}
