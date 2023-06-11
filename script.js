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