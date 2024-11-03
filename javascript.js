function getComputerChoice() {
    let choice;
    const election = Math.floor(Math.random() * 3);

    if (election === 0) {
        choice = "Rock";
    }
    else if (election === 1) {
        choice = "Paper";
    }
    else if (election === 2) {
        choice = "Scissors";
    }

    console.log(`Computer: ${choice}`);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    console.log(`User: ${choice}`);

    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        return choice;
    }
    else  {
        console.log("Invalid answer. Try again");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    else if ((humanChoice === "Rock" && computerChoice === "Scissors") || 
    (humanChoice === "Scissors" && computerChoice === "Paper") || 
    (humanChoice === "Paper" && computerChoice === "Rock")) {
        humanScore += 1
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else {
        computerScore += 1
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for (i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Your score ${humanScore}. Computer score ${computerScore}`);
        if (humanScore === 3 || computerScore === 3){
            break
        }
    }

    if (humanScore > computerScore) {
        console.log("You win! User WIN")
    }
    else {
        console.log("You lose! Computer WIN")
    }
}

playGame();