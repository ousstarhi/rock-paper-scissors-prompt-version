
// The choices available in the game
const choices = ["rock", "paper", "scissors"];

// Return a random choice from the choices array
function computerPlay(arr) {
    return arr[Math.floor(Math.random() * 3)];
}

// Play 1 round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === choices[1]) {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === choices[2]) {
            return "You Win! Rock beats Scissors";
        } else {
            return "It's a tie!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === choices[0]) {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === choices[2]) {
            return "You Lose! Scissors beats Paper";
        } else {
            return "It's a tie!";
        }
    } else {
        if (computerSelection === choices[0]) {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === choices[1]) {
            return "You Win! Scissors beats Paper";
        } else {
            return "It's a tie!";
        }
    }
}

// Play 5 rounds and returns the results at the end
function game() {
    // Initialize the scores
    let playerScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Ask the user to enter his choice and store it in a variable
        let playerSelection;
        do {
            playerSelection = prompt("Rock, Paper, Scissors").toLocaleLowerCase();
            if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                alert("You must enter a valid choice!");
            }
        }
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");

        // Call the computerPlay function and store its result in computerSelection
        const computerSelection = computerPlay(choices);

        // Play 1 round
        const result = playRound(playerSelection, computerSelection);

        // Show the result after each round
        alert(result);

        // Update the scores according to the result
        if (result.indexOf("Win") !== -1) {
            playerScore++;
        } else if (result.indexOf("Lose") !== -1) {
            computerScore++;
        }
    }

    // Show the final scores after 5 rounds
    if (playerScore > computerScore) {
        alert(`Well done, you beat the computer!
        Your score: ${playerScore}
        Computer score: ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`You lost the game, Try again!
        Your score: ${playerScore}
        Computer score: ${computerScore}`);
    } else {
        alert(`It's a tie!
        Your score: ${playerScore}
        Computer score: ${computerScore}`);
    }
}
game();