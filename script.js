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
