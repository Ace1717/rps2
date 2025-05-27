function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getPlayerChoice() {
  let playerInput = prompt("type your choice...");
  let result = playerInput.toLowerCase();
  return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie, replay this round";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose! Paper beats Rock`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! Rock beats Scissors`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose! Scissors beats Paper`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! Paper beats Rock`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose! Rock beats Scissors`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! Scissors beats Paper`;
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(result);
    if (result.includes("win")) {
      playerScore++;
      console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
    } else if (result.includes("lose")) {
      computerScore++;
      console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
    }
  }
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