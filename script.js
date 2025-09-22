// console.log("hello, World!");

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
// function getHumanChoice(name) {
//     // const choice = prompt("Enter Your Choice(Rock, Paper, Scissors): ");
//     return name;
// }


// function playGame(name) {
    // Declare humanScore and computerScore as global variables to keep track of score
    let humanScore = 0;
    let computerScore = 0;
    let draws = 0;
    // const rounds = 5;

    let runningScore = document.createElement('div');
    runningScore.id = "current_score";
    document.body.appendChild(runningScore);
    runningScore.textContent = `Human: ${humanScore}, Computer: ${computerScore}, Draws: ${draws}`


    // Play a single round
    // function playRound(humanChoice, computerChoice) {
    function playRound(name) {
        // let humanScore = 0;
        // let computerScore = 0;
        // let draws = 0;


        // let h = humanChoice.trim().toLowerCase();
        let h = name;
        // let c = computerChoice;
        let c = getComputerChoice();
    
        if (h === c) {
            draws++;
        }

        // Winning Conditions for human
        else if (
            h == 'rock' && c == 'scissors' ||
            h == 'paper' && c == 'rock' ||
            h == 'scissors' && c == 'paper'
        ) {
            humanScore++;
        } else {
            computerScore++;
        }

        // console.log("Human: " + humanScore + ", Computer: " + computerScore + ", Draws: " + draws);

        let runningScore = document.getElementById("current_score");
        // if (!runningScore) {
        //     runningScore = document.createElement('div');
        //     runningScore.id = "current_score";
        //     document.body.appendChild(runningScore);
        // }
        runningScore.textContent = `Human: ${humanScore}, Computer: ${computerScore}, Draws: ${draws}`
         

    }


    // play multiple rounds
    // for (let i = 1; i <= rounds; i++) {
    //     alert(`Round ${i}`);
        // playRound(getHumanChoice(), getComputerChoice());
    // }
    // playRound(name, getComputerChoice());


    // Find Winner
    // console.log("Human: " + humanScore + ", " + "Computer: " + computerScore);
    // if (humanScore > computerScore) {
    //     alert(`Human: ${humanScore} Computer: ${computerScore}` + "\nYou Win!"); 
    // } else if (humanScore < computerScore) {
    //     alert(`Human: ${humanScore} Computer: ${computerScore}` + "\nYou Lose!")
    // } else {
    //     alert(`Human: ${humanScore} Computer: ${computerScore}` + "\nIt's a Draw!!")
    // }
// }

// playGame();

/*
For now, remove the logic that plays exactly five rounds.

Create three buttons, one for each selection. 
Add an event listener to the buttons that call your playRound function with the 
correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

Add a div for displaying results and change all of your console.logs into DOM methods.

Display the running score, and announce a winner of the game once one player reaches 5 points.

You will likely have to refactor (rework/rewrite) your original 
code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
*/