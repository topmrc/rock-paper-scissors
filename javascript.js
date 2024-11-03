function getComputerChoice() {
    let choice;
    const election = Math.floor(Math.random() * 3);

    console.log(election)

    if (election === 0) {
        choice = "rock";
    }
    else if (election === 1) {
        choice = "paper";
    }
    else if (election === 2) {
        choice = "scissors";
    }

    console.log(choice);
    return choice;
}

getComputerChoice();