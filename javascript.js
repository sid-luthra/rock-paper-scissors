let playerScore = 0;
let computerScore = 0;

const selections = document.querySelector("#selections");
const result = document.querySelector("#resultStatement");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

const playButtons = document.querySelectorAll(".playButton");
playButtons.forEach((button) => {
    let move = button.id;
    button.addEventListener('click', () => {
        playRound(move);
    });
});

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
        selections.textContent = `Computer chose ${computerSelection}. Player chose ${playerSelection}.`;
        result.textContent = "TIE!";
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") |
        (playerSelection === "PAPER" && computerSelection === "ROCK") |
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        selections.textContent = `Computer chose ${computerSelection}. ${playerSelection} beats ${computerSelection}.`;
        result.textContent = "Player won!";
        playerScore ++;
        updateScoreboard();
    } else {
        selections.textContent = `Computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}.`;
        result.textContent = "Computer won!";
        computerScore ++;
        updateScoreboard();
    }        
}

function updateScoreboard() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
    selections.textContent = "NEW GAME!"
    result.textContent = "Select an option below to start the game."
}

reset()