function getComputerChoice () {
    let choice = ['rock', "paper", 'scissors']
    let randomIndex = choice[Math.floor(Math.random() * 3)]
    return randomIndex
}



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



let humanScore = 0
let cpuScore = 0

function playRound (humanSelect , cpuSelect){
    
    
    if(humanSelect === cpuSelect){
        return "tie"

    } else if((humanSelect === 'rock' && cpuSelect === 'paper') ||
              (humanSelect === 'paper' && cpuSelect === 'scissors')||
         (humanSelect === 'scissors' && cpuSelect === 'rock')){
            return `you  lose - ${cpuChoice} beats ${humanPick}`
            cpuScore++
           
        } else {
          return `you win - ${humanPick} beats ${cpuChoice}`
          humanScore++
          }
        }
       let cpuChoice = getComputerChoice ()
       let humanPick = getHumanChoice ()
        
        console.log(playRound(humanPick, cpuChoice));
        


