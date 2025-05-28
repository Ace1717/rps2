const results = document.querySelector("#result")

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  results.textContent =computerChoice;
}

function getPlayerChoice() {
  let playerInput = prompt("type your choice...");
  let result = playerInput.toLowerCase();
   return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent ="It's a tie, replay this round";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    results.textContent =`You lose! Paper beats Rock`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    results.textContent =`You win! Rock beats Scissors`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    results.textContent =`You lose! Scissors beats Paper`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    results.textContent =`You win! Paper beats Rock`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    results.textContent =`You lose! Rock beats Scissors`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    results.textContent =`You win! Scissors beats Paper`;
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;


  console.log(`Final Results: Player: ${playerScore} Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game.");
  } else {
    console.log("The game was an overall tie.");
  }
}

game();


const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
button.addEventListener('click', () => { 
 let playerSelection = button.id
 let cpuSelection = getComputerChoice()
 let result = playRound(playerSelection, cpuSelection)
    })
})