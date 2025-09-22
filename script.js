let humanScore = 0;
let computerScore = 0;
let draws = 0;

let runningScore = document.createElement('div');
runningScore.id = "current_score";
document.body.appendChild(runningScore);
runningScore.textContent = `Human: ${humanScore}, Computer: ${computerScore}, Draws: ${draws}`


// Get the computer to pick rock, paper or scissors randomly
function getComputerChoice() {
    const random_number = Math.random();
    if (random_number < 1 / 3) {
        return "rock";
    } else if (random_number < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Play the game when button is clicked
function playRound(name) {

    let h = name;
    let c = getComputerChoice();
    
    if (h === c) {
        draws++;
    }

    // Scoring conditions for human
    else if (
        h == 'rock' && c == 'scissors' ||
        h == 'paper' && c == 'rock' ||
        h == 'scissors' && c == 'paper'
    ) {
        humanScore++;
    } else {
        computerScore++;
    }

    let runningScore = document.getElementById("current_score");   
    runningScore.textContent = `Human: ${humanScore}, Computer: ${computerScore}, Draws: ${draws}`
         
}


  

