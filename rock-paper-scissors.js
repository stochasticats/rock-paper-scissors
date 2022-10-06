
// function to return random integer between 0-2 inclusive
function getRandInt() {
    return Math.floor(Math.random() * 3);
}

// function to return random computer choice
function getComputerChoice() {
    randInt = getRandInt();
    switch (randInt) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
}

/* function to play round and determine winner based on rock, paper, scissors game rules
   returns: array [winner, winnerSelection, loserSelection]
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ["Draw", 0, 0];
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return ['Player', 'Rock', 'Scissor'];
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ["Computer", "Paper", "Rock"];
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return ["Computer", "Scissor", "Paper"];
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ["Player", "Paper", "Rock"];
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return ["Player", "Paper", "Rock"];
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return ["Computer", "Rock", "Scissor"];
    }
}

let computerScore = 0;
let playerScore = 0;

const results = document.querySelector(".results");
results.textContent = "The game is ready to begin."

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',
 e => {
        const playerSelection = button.value;
        const computerSelection = getComputerChoice();
        const winner = playRound(playerSelection, computerSelection);
        if (winner[0] === "Draw") {
            results.textContent = "The round is a draw."
        } else if (winner[0] === 'Player') {
            playerScore++;
            results.textContent = `${winner[0]} wins! ${winner[1]} triumphs over ${winner[2]}. The score is Player ${playerScore} - ${computerScore} Computer.`;
        } else {
            computerScore++;
            results.textContent = `${winner[0]} wins! ${winner[1]} triumphs over ${winner[2]}. The score is Player ${playerScore} - ${computerScore} Computer.`;
        }

        if (playerScore >= 5) {
            results.textContent = `Player has won the game with 5 wins!`;
        } else if (computerScore >= 5) {
            results.textContent = `Computer has won the game with 5 wins!`;
        }
    }
));
