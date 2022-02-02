function getRandom() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    if (getRandom() === 0) return "Rock";
    else if (getRandom() === 1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === "rock") {
        if (computer === "scissors") return "You Win! Rock beats Scissors";
        else if (computer === "paper") return "You Lose! Paper beats Rock";
        else if (computer === "rock") return "It's a Draw";
        else return "Something Went Wrong";
    } else if (player === "paper") {
        if (computer === "rock") return "You Win! Paper beats Rock";
        else if (computer === "scissors") return "You Lose! Scissors beats Paper";
        else if (computer === "paper") return "It's a Draw";
        else return "Something Went Wrong";
    } else if (player === "scissors") {
        if (computer === "paper") return "You Win! Scissors beats Paper";
        else if (computer === "rock") return "You Lose! Rock beats Scissors";
        else if (computer === "scissors") return "It's a Draw";
        else return "Something Went Wrong";
    } else {
        return "That's not a valid choice";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));