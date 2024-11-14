function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("Enter a choice (rock, paper, scissors)")
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); // Assume humanChoice will be rock, paper or scissors (uppercase, lowercase or both) and no exit (null)
        if (humanChoice == computerChoice) {
            return "Draw"
        } else if (humanChoice == "rock" && computerChoice == 'paper') {
            computerScore += 1;
            return "You lose! Paper beats Rock"
        } else if (humanChoice == "paper" && computerChoice == 'scissors') {
            computerScore += 1;
            return "You lose! Scissors beats Paper"
        } else if (humanChoice == "scissors" && computerChoice == 'rock') {
            computerScore += 1;
            return "You lose! Rock beats Scissors"
        } else if (humanChoice == "paper" && computerChoice == 'rock') {
            humanScore += 1;
            return "You win! Paper beats Rock"
        } else if (humanChoice == "scissors" && computerChoice == 'paper') {
            humanScore += 1;
            return "You win! Scissors beats Paper"
        } else if (humanChoice == "rock" && computerChoice == 'scissors') {
            humanScore += 1;
            return "You win! Rock beats Scissors"
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection) 
    }
    
}

playGame()