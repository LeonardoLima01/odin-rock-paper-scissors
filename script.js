let getComputerChoice = () =>{
    choice = Math.floor(Math.random() * 3)
    options = ['rock','paper','scissors']

    return options[choice];
}

//let playerSelection = () => {
//    let answer = 'a';
//
//    while (answer != 'rock' && answer != 'paper' && answer != 'scissors'){
//        answer = prompt("Rock, Paper or Scissors?").toLowerCase()
//    }
//    return answer;
//}

let playRound = (playerSelection, computerSelection) =>{
    
    if(playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            return "Draw!";
        }
        else if(computerSelection === 'scissors'){
            return "You Win! Rock beats Scissors";
        }
        else{
            return "You Lose! Paper beats Rock";
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'paper'){
            return "Draw!";
        }
        else if(computerSelection === 'rock'){
            return "You Win! Paper beats Rock";
        }
        else{
            return "You Lose! Scissors beats Paper";
        }
    }
    else{
        if(computerSelection === 'scissors'){
            return "Draw!";
        }
        else if(computerSelection === 'paper'){
            return "You Win! Scissors beats Paper";
        }
        else{
            return "You Lose! Rock beats Scissors";
        }
    }
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
div = document.querySelector('#result')
const player_score_display = document.querySelector('#player_score')
const computer_score_display = document.querySelector('#computer_score')
player_score_display.textContent = 0;
computer_score_display.textContent = 0;
let playerScore = 0;
let computerScore = 0;

function removeTransition(a){
    a.classList.remove('clicked')
}

const simulateGame = (playerSelection, computerSelection) =>{

    div.textContent = (playRound(playerSelection, computerSelection))

    pc_answer = document.querySelector('#pc_'+computerSelection+'')
    pc_answer.classList.add('clicked')
    pc_answer.addEventListener('transitionend', () => pc_answer.classList.remove('clicked'))  

    result = div.textContent;
    if (result != 'Draw!'){
        if (result[4] == 'W'){
            playerScore++;
            player_score_display.textContent = playerScore;
        }
        else{
            computerScore++;
            computer_score_display.textContent = computerScore;
        }
    }

    if (playerScore === 5){
        setTimeout(() => {
            playerScore = 0;
            computerScore = 0;
            player_score_display.textContent = playerScore;
            computer_score_display.textContent = computerScore;
            alert('Player Wins!')
    }, 5)
    }
    else if (computerScore === 5){
        setTimeout(() => {
            playerScore = 0;
            computerScore = 0;
            player_score_display.textContent = playerScore;
            computer_score_display.textContent = computerScore;
            alert('Computer Wins!')
    }, 5)
    }
}

rock.addEventListener('click', () => simulateGame('rock', getComputerChoice()));
paper.addEventListener('click', () => simulateGame('paper', getComputerChoice()));
scissors.addEventListener('click', () => simulateGame('scissors', getComputerChoice()));