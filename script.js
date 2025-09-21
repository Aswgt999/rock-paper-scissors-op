console.log("hello, World!");

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


// Get user input
function getHumanChoice() {
    const choice = prompt("Enter Your Choice(Rock, Paper, Scissors): ");
    return choice;
}


function playGame() {
    // Declare humanScore and computerScore as global variables to keep track of score
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    // Play a single round
    function playRound(humanChoice, computerChoice) {
        let h = humanChoice.trim().toLowerCase();
        let c = computerChoice;
    
        if (h === c) {
            return;
        }

        // Winning Conditions for human
        if (
            h == 'rock' && c == 'scissor' ||
            h == 'paper' && c == 'rock' ||
            h == 'scissor' && c == 'paper'
        ) {
            humanScore++;
        } else {
            computerScore++;
        }
    }


    // play multiple rounds
    for (let i = 1; i <= rounds; i++) {
        alert(`Round ${i}`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    // Find Winner
    console.log(humanScore + " " + computerScore);
    if (humanScore > computerScore) {
        alert(`Human: ${humanScore} Computer: ${computerScore}` + "\nYou Win!"); 
    } else if (humanScore < computerScore) {
        alert(`Human: ${humanScore} Computer: ${computerScore}` + "\nYou Lose!")
    } else {
        alert(`Human: ${humanScore} Computer: ${computerScore}` + "\nIt's a Draw!!")
    }
}

// playGame();