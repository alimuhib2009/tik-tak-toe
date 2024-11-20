const start = document.getElementById('start');
const reset = document.getElementById('reset');
const restart = document.getElementById('restart');
const boards = document.querySelectorAll('.board');
const buttons = document.querySelectorAll('.button');
const containerOfStart = document.querySelector('.containerOfStart');
const msg = document.getElementById('status');
const msgContainer = document.querySelector('.msgContainer');
const container = document.querySelector('.container');


start.addEventListener('click', () => {
    boards.forEach(board => {
        board.innerText = '';
        container.classList.remove('hide');
        restart.classList.remove('hide');
        reset.classList.remove('hide');
        start.classList.add('hide');
        containerOfStart.classList.add('hide');
    })
});


let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turn0 = true;
    enablebox();
    container.classList.remove('hide');
    msgContainer.classList.add('hide');
}


boards.forEach((board) => {
    board.addEventListener('click', () => {
        if (turn0) {
            board.innerText = "O";
            turn0=false;
        }else{
            board.innerText = "X";
            turn0 = true;
        }
        board.disabled = true;

        checkwinner();
    })
});

let disableBoxes = () => {
    for (let board of boards){
        board.disabled = true;
    }
};

const enablebox =() => {
    for(let board of boards){
        board.disabled = false; 
        board.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText =`${winner} Win's`;
    msgContainer.classList.remove('hide');
    container.classList.add('hide');
    disableBoxes();
}



const checkwinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boards[pattern[0]].innerText;
        let pos2 = boards[pattern[1]].innerText;
        let pos3 = boards[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
}}
};


reset.addEventListener("click", resetGame);
restart.addEventListener("click", resetGame);

