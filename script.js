let getComputerChoice = () =>{
    choice = Math.floor(Math.random() * 3)
    options = ['rock','paper','scissors']

    return options[choice];
}

let playerSelection = () => {
    let answer = 'a';

    while (answer != 'rock' && answer != 'paper' && answer != 'scissors'){
        answer = prompt("Rock, Paper or Scissors?").toLowerCase()
    }
    return answer;
}

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