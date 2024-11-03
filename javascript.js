humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    let choice;
    const election = Math.floor(Math.random() * 3);

    console.log(election)

    if (election === 0) {
        choice = "Rock";
    }
    else if (election === 1) {
        choice = "Paper";
    }
    else if (election === 2) {
        choice = "Scissors";
    }

    console.log(choice);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    console.log(choice);

    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        return choice;
    }
    else  {
        console.log("Invalid answer");
    }
}

function playRound(humanChoice, computerChoice) {
    

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);