function getRandom() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    if (getRandom() === 0) return "Rock";
    else if (getRandom() === 1) return "Paper";
    else return "Scissors";
}
