function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("Please type rock, paper, or scissors");
  return (choice[0].toUpperCase() + choice.slice(1).toLowerCase());
}

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

function game(){
  const buttons = document.querySelectorAll('button');
  buttons.forEach(
    button => button.addEventListener('click', () => {
      const playerSelection = button.textContent;
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    })
  );
}