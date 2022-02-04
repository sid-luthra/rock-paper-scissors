let playerScore = 0;
let computerScore = 0;

const computerSelection = computerPlay();
const playerSelection = "ROCK";

function computerPlay() {
    let moves = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random()*3);
    return moves[random]
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log(`Computer chose ${computerSelection}. Player chose ${playerSelection}.`)
        console.log("Tie!")
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") |
        (playerSelection === "PAPER" && computerSelection === "ROCK") |
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        console.log(`Computer chose ${computerSelection}. Player chose ${playerSelection}.`)
        console.log("Player won!")
        playerScore ++;
        console.log(`The score is Player: ${playerScore} | Computer ${computerScore}`)
    } else {
        console.log(`Computer chose ${computerSelection}. Player chose ${playerSelection}.`)
        console.log("Computer won!")
        computerScore ++;
        console.log(`The score is Player: ${playerScore} | Computer ${computerScore}`)
    }        
}

function game() {
    for (rounds = 1; rounds <= 5; ++rounds) {
        playRound()
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
}