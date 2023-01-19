let getComputerChoice = () =>{
    choice = Math.floor(Math.random() * 3)
    options = ['rock','paper','scissors']

    return options[choice];
}
