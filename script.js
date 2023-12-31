function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

// function getPlayerChoice() {
//   let choice = prompt("Please type rock, paper, or scissors");
//   return (choice[0].toUpperCase() + choice.slice(1).toLowerCase());
// }

function playRound(playerSelection, computerSelection) {
  let result = (playerSelection === computerSelection) ? "Tie" :
  ((playerSelection === "Rock" && computerSelection === "Scissors") || 
  (playerSelection === "Paper" && computerSelection === "Rock") ||
  (playerSelection === "Scissors" && computerSelection === "Paper")) ? "Win" : "Lose";

  return result;
}

// function game() {
//   for (let i=0; i<5; i++) {
//     let playerSelection = getPlayerChoice();
//     let computerSelection = getComputerChoice();
//     let result = playRound(playerSelection, computerSelection);
//     if (result === "Win") console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//     else if (result === "Lose") console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//     else if (result === "Tie") console.log(`You Tied! You both chose ${playerSelection}`);
//   }
// }

function game(e) {
  const playerSelection = e.target.textContent;
  const computerSelection = getComputerChoice();
  return playRound(playerSelection, computerSelection);
}

function printRound(result, playerScore, computerScore) {
  const body = document.querySelector('body');
  const round = document.createElement('div');
  round.classList.add("round");
  round.textContent = `You ${result}! Player: ${playerScore} Computer: ${computerScore}`;
  body.appendChild(round);
}

function printWinner(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    const body = document.querySelector('body')
    const winner = document.createElement('div');
    winner.textContent = (playerScore === 5) ? "Player wins!" : "Computer wins!";
    body.appendChild(winner);
    
    clearResults();
  }
}

function clearResults() {
  // clear the results after ~5s
}

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(
  button => button.addEventListener('click', (e) => {
    const result = game(e);
    switch(result) {
      case "Win": playerScore++; break;
      case "Lose": computerScore++; break;
    }
    printRound(result, playerScore, computerScore);
    printWinner(playerScore, computerScore);
  })
);