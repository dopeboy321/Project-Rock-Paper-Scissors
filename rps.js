function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      return "You tie!";
  } else if(playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      userScore++;
      return "You win! Paper beats rock!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock beats scissors!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      userScore++;
      return "You win! Rock beats scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      userScore++;
      return "You win! Scissors beats paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      return "You lose! Scissors beats paper!";
  } else {
    return "Something went wrong";
  }
}

let userScore = 0;
let computerScore = 0;

      
      function game() {
        for (let i = 1; i <= 5; i++) {
          let answer = prompt("Paper, Rock, Scissors?").toLowerCase();
          let playerSelection = answer;
          let computerSelection = getComputerChoice();
          
          playRound(playerSelection, computerSelection);
              console.log(`Round: ${i}. The user score is ${userScore} and computer score is ${computerScore}`);
        }
        if (userScore > computerScore) {
          alert("you won!");
        } else if (computerScore > userScore) {
          alert("you lost!");
        } else {
          alert("it's a draw!");
        }
      }
      
      game();

      
      
