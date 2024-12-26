const options = ["rock", "paper", "scissors"]

function isWin(player, computer) {
    if ((player == "rock" && computer == "scissors") || (player == "scissors" && computer == "paper") || player == "paper" && computer == "rock") {
        return true
    }
    return false
}

function play() {
    let userInt = prompt("Enter you choice 0 for rock, 1 for paper and 2 for scissors: ")
    let userChoice = options[userInt];

    let number = Math.floor(Math.random() * 3)
    let computerChoice = options[number]

    if (userChoice == computerChoice) {
        return "It's a draw";
    }

    if (isWin(userChoice, computerChoice)) {
        console.log(`You choose ${userChoice} and computer choose ${computerChoice}, you won`);
    }
    
    console.log(`You choose ${userChoice} and computer choose ${computerChoice}, you lost`);
}

play()