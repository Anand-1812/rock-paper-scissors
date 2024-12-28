const options = ["rock", "paper", "scissors"]

function isWin(player, computer) {
    if ((player == "rock" && computer == "scissors") || (player == "scissors" && computer == "paper") || player == "paper" && computer == "rock") {
        return true
    }
    return false
}

function play(userChoice) {

    const result = document.querySelector("#result");

    let gameResult;

    let number = Math.floor(Math.random() * 3)
    let computerChoice = options[number]

    if (userChoice == computerChoice) {
        console.log("It's a draw")
        gameResult = "It's a draw";
    }

    if (isWin(userChoice, computerChoice)) {
        gameResult = `You won!`;
    } else {
        gameResult  = `You Lost`;
    }

    const para = document.createElement("p");
    const node = document.createTextNode(gameResult);
    para.appendChild(node);
    const element = document.getElementById("result");

    element.appendChild(para);
 
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => {
    play("rock")
});


paper.addEventListener("click", (e) => {
    play("paper")
});


scissors.addEventListener("click", (e) => {
    play("scissors");
});