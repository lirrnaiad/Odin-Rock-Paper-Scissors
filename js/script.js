function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            return "rock";
            break;
    
        case 2:
            return "paper";
            break;

        case 3:
            return "scissors";
            break;
    }
}

function getPlayerChoice() {
    let choice = prompt("Your move?");
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            return "You lose! " + computerSelection + " beats " + playerSelection;
        } 
    
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
                return "You win! " + playerSelection + " beats " + computerSelection;
            }

    else if (playerSelection === computerSelection) {
        return "Tie!";
    }

}

for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
