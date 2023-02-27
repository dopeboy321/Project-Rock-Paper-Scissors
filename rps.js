function getComputerChoice () {
    let choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}


function playRound(playerSelection, computerSelection) {
  
  if(playerSelection === "rock" || computerSelection === "paper") {
    return "You win! Rock beats paper!";
  } else if (playerSelection === "paper" || computerSelection === "rock") {
    return "You lose! Rock beats paper!"
  }
  
}

let answer = prompt("Paper, Rock, Scissors?");
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
