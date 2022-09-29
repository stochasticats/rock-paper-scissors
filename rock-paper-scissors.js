
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
    playerSelection = playerSelection.toLowerCase();
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

/* function to play a best of five between player and computer
   player is prompted for choice, computer is randomized
   prints results to console after each round and keeps track of scores
   once a score of 3 has been reached, game ends and winner is congratulated
*/ 
function game() {
    // initialize player and computer scores
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        // initialize selections and play round
        let playerSelection = prompt("Please select rock, paper, or scissor.");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        results = playRound(playerSelection, computerSelection);

        // check who wins round and update score
        if (results[0] === "Draw") {
            console.log("It's a draw!");
        } else if (results[0] === 'Player') {
            playerScore++;
            console.log(`${results[0]} wins! ${results[1]} triumphs over ${results[2]}. The score is Player ${playerScore} - ${computerScore} Computer.`);
        } else {
            computerScore++;
            console.log(`${results[0]} wins! ${results[1]} triumphs over ${results[2]}. The score is Player ${playerScore} - ${computerScore} Computer.`);
        }
        

        // check if anyone has won the best of 5
        if (playerScore === 3) {
            console.log("Player has won the best of five.");
        } else if (computerScore === 3) {
            console.log("Computer has won the best of five.");
        }
    }
}

// play game
game();