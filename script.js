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

// console.log(getComputerChoice());

// Get user input
function getHumanChoice() {
    const choice = prompt("Enter Your Choice(Rock, Paper, Scissor): ");
    return choice;
}

// console.log(getHumanChoice());


// Declare humanScore and computerScore as global variables to keep track of score
let humanScore = 0;
let computerScore = 0;


// Play a single round
function playRound(humanChoice, computerChoice) {
    let h = humanChoice.trim().toLowerCase();
    let c = computerChoice;
    
    if (h === c) {
        console.log(`Draw! Both chose ${h.charAt(0).toUpperCase() + h.slice(1)}`);
        return;
    }

    // Winning Conditions for human
    if (
        h == 'rock' && c == 'scissor' ||
        h == 'paper' && c == 'rock' ||
        h == 'scissor' && c == 'paper'
    ) {
        humanScore++;
        console.log(`You win! ${h.charAt(0).toUpperCase() + h.slice(1)} beats ${c.charAt(0).toUpperCase() + c.slice(1)}`);
    } else {
        computerScore++;
        console.log(`You lose! ${c.charAt(0).toUpperCase() + c.slice(1)} beats ${h.charAt(0).toUpperCase() + h.slice(1)}`);
    }
    
}

// playRound(getHumanChoice(), getComputerChoice());

/*
Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
*/