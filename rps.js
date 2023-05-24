function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      return 'You tie!';
  } else if(playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      return 'Paper beats rock!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      userScore++;
      return 'Paper beats rock!';
  } else if (playerSelection === "scissors" && computerSelection === 'rock') {
      computerScore++;
      return 'Rock beats scissors!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      userScore++;
      return 'Rock beats scissors!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      userScore++;
      return 'Scissors beats paper!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      computerScore++;
      return 'Scissors beats paper!';
  } else {
    return 'Something went wrong';
  }  
};

const choices = document.querySelectorAll('.choices');
const playerScorePara = document.getElementById('player-score');
const computerScorePara = document.getElementById('computer-score');
let userScore = 0;
let computerScore = 0;

choices.forEach(choice => choice.addEventListener('click', (event) => {
  if(event.target.id == 'rock') {
    results.textContent = playRound('rock', getComputerChoice());
  } else if (event.target.id == 'paper') {
    results.textContent = playRound('paper', getComputerChoice());
  } else if (event.target.id == 'scissors') {
    results.textContent = playRound('scissors', getComputerChoice());
  };
  updateScore();
    if(userScore == 5) {
      alert("You won =D");
        restartScores();
    } else if (computerScore == 5) {
      alert("You lose :(");
        restartScores();
    };
      }));
  
function updateScore() {
  playerScorePara.textContent = `Player: ${userScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
};

  function restartGame() {
    restartScores();
  };

  function restartScores() {
    userScore = 0;
    computerScore = 0;
    results.textContent = 'Start New Game!';
    playerScorePara.textContent = `Player: ${userScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
  };
