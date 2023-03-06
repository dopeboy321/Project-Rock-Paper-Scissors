function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      return "You tie!";
  } else if(playerSelection === "rock" && computerSelection === "paper") {
      return "You lose! Paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats rock!!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You lose! Rock beats scissors!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "You lose! Scissors beats paper!";
  } else {
    return "Something went wrong"
  }
}


let answer = prompt("Paper, Rock, Scissors?").toLowerCase();
const playerSelection = answer;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function game() {
  for (let i = 0; i < 5; i++)  {
    playRound(playerSelection === "rock" && computerSelection === "paper");
    console.log("you lose");
    computerScore++;
    playRound(playerSelection === "paper" && computerSelection === "rock");
    console.log("you win");
    userScore++;
  }
}
 

let userScore
let computerScore
console.log(game())

