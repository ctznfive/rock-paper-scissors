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

function calcScore(result) {
    if (result.includes("Win")) return 1;
    else if (result.includes("Lose")) return -1;
    else return 0;
}

function printScore(score) {
    if (score > 0) return "You're a winner!";
    else if (score < 0) return "You're a loser!";
    else return "It's a Draw!";
}

function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("What do you choose?",
         "Rock, Paper or Scissors");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection)
        console.log(result);

        score += calcScore(result);
    }

    console.log(printScore(score));
}

game();