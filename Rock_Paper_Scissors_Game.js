savedScore = localStorage.getItem('SCORE');
console.log( savedScore);
scoreToJS = JSON.parse(savedScore);
console.log(scoreToJS);
let score = scoreToJS;

if(score == null){
    score = {
    win: 0,
    lose: 0,
    tie: 0
    };
}

function updateSreenScore(){
    document.querySelector('.scoreDisplay').innerHTML = `win = ${score.win} lose = ${score.lose} tie = ${score.tie}`;
}

updateSreenScore();

let state = '';
let playerDecision = '';
var handGesture;
function computerPlay(){
    let compurerDecision = "";
    let randomComputerNumber = Math.random();

    if( randomComputerNumber >= 0 && randomComputerNumber < 1/3 )
        {
        computerDecision = 'ROCK'; 
        handGesture = 'fist.png';
        }

    if( randomComputerNumber >= 1/3 && randomComputerNumber <2/3)
    {
        computerDecision = 'PAPER';
        handGesture = 'hand-paper.png';
    }

    else if(randomComputerNumber >= 2/3 && randomComputerNumber <= 1){
        
        computerDecision = 'SCISSORS';
        handGesture = 'scissors.png';
    }

    document.querySelector('.computerMoveDisplay').innerHTML = computerDecision;

    document.querySelector('.computerMoveImage').innerHTML = `Computer <img class="handIcon" src=${handGesture}>`;

    return computerDecision;
}

function winOrLoose(ComputerDecision, PlayerDecision){
    ComputerDecision = computerDecision;
    PlayerDecision = playerDecision;

    if( ComputerDecision == 'ROCK' &&  PlayerDecision == 'ROCK' ){
        state = 'TIE';
    }
    if ( ComputerDecision == 'PAPER' &&  PlayerDecision ==  'ROCK' ){
        state = 'LOOSE';
    }
    if ( ComputerDecision == 'SCISSORS' &&  PlayerDecision ==  'ROCK' ){
        state = '****WIN****';
    }
    if( ComputerDecision == 'ROCK' &&  PlayerDecision == 'PAPER' ){
        state = '****WIN****';
    }
    if ( ComputerDecision == 'PAPER' &&  PlayerDecision ==  'PAPER' ){
        state = 'TIE';
    }
    if ( ComputerDecision == 'SCISSORS' &&  PlayerDecision ==  'PAPER' ){
        state = 'LOOSE';
    }
    if( ComputerDecision == 'ROCK' &&  PlayerDecision == 'SCISSORS' ){
        state = 'LOOSE';
    }
    if ( ComputerDecision == 'PAPER' &&  PlayerDecision ==  'SCISSORS' ){
        state = '****WIN****';
    }
    if ( ComputerDecision == 'SCISSORS' &&  PlayerDecision ==  'SCISSORS' ){
        state = 'TIE';
    }

    document.querySelector('.playerStatusDisplay').innerHTML = state;

        return state;

}

function calculateScore(){
    if (state == '****WIN****'){
    score.win = score.win + 1;
}
else if(state == 'LOOSE'){
    score.lose = score.lose + 1;  
}
else if(state == 'TIE'){
    score.tie = score.tie + 1;
}
updateSreenScore();

localStorage.setItem('SCORE',JSON.stringify(score));

return `win = ${score.win} lose = ${score.lose} tie = ${score.tie}`;

}