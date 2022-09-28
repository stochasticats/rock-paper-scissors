
// function to return random integer between 0-2 inclusive
function getRandInt() {
    return Math.floor(Math.random() * 3);
}

// function to return random computer choice
function getComputerChoice() {
    randInt = getRandInt();
    switch (randInt) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissor";
            break;
    }
}

/* function to play round and determine winner based on rock, paper, scissors game rules
   returns array [winner, winnerSelection, loserSelection]
*/
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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

function game () {
    let playerScore = 0;
    let computerScore = 0;

for (let i = 0; i <5; i++) {
        let playerSelection = prompt("Please select rock, paper, or scissor");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
    }
}
