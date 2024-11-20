function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)]
}

let humanScore = 0;
let computerScore = 0;


function playGame() {

    function checkWinner() {
        if(humanScore == 5) {
            displayResult.textContent = `You win! Your score: ${humanScore}  Computer score: ${computerScore}`
            return 
        } else if (computerScore == 5) {
            displayResult.textContent = `You lose! Your score: ${humanScore}  Computer score: ${computerScore}`
            return 
        } else {
            displayResult.textContent = `Your score: ${humanScore}  Computer score: ${computerScore}`
        }
    }

    function playRound (humanChoice, computerChoice) {
        
        if (humanChoice == computerChoice) {
            displayResult.textContent = `Draw! Your score: ${humanScore}  Computer score: ${computerScore}`
        } else if (humanChoice == "rock" && computerChoice == 'scissors'||
                humanChoice == "paper" && computerChoice == 'rock'||
                humanChoice == "scissors" && computerChoice == 'paper') {
            humanScore += 1
            checkWinner()
            
        } else {
            computerScore += 1;
            checkWinner()
            
        }  
    }

        
    const displayResult = document.querySelector("div")
    displayResult.textContent = ""

    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    document.body.appendChild(rock);
    document.body.appendChild(paper)
    document.body.appendChild(scissors)

    rock.textContent = "Rock"
    paper.textContent = "Paper"
    scissors.textContent = "Scissors"

    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

    
}

playGame()

    
    
     
