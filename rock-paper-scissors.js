
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

// function to play round and determine winner based on RPS game rules
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return "Player wins! Rock beats scissor.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer wins! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "Computer wins! Scissor beats paper.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player wins! Paper beats rock.";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "Player wins! Scissor beats paper.";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "Computer wins! Rock beats scissor.";
    }
}
