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


// //Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Remember loops? This is a great opportunity to use one to play those five rounds:

// for (let i = 0; i < 5; i++) {
//    // your code here!
// }
// At this point you should be using console.log() to display the results of each round and the winner at the end.


let userScore = 0;
let computerScore = 0;

function game(userScore, computerScore) {
  
  
  for (let i = 0; i < 5; i++) {
    if (userScore >= 5 && computerScore < 5) {
      return "congratulation, you won!"
    } else if (userScore < 5 && computerScore >= 5) {
      return "that was close, try again"
    }
  }
}

console.log(game(userScore, computerScore));