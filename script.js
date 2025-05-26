function getComputerChoice () {
    let choice = ['rock', "paper", 'scissors']
    let randomIndex = choice[Math.floor(Math.random() * 3)]
    return randomIndex
}

console.log(getComputerChoice());

let humanChoice = prompt("choose rock, paper, scissors")
function getHumanChoice (){
    if(humanChoice === 'rock'){
        return 'rock'
    }else if(humanChoice === 'paper'){
        return 'paper'
    } else {
        return 'scissors'
    }
}

console.log(getHumanChoice());
