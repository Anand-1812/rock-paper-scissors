const options = ["rock", "paper", "scissors"]

function isWin(player, computer) {
    return (
        (player == "rock" && computer == "scissors") || 
        (player == "scissors" && computer == "paper") || 
        (player == "paper" && computer == "rock")
    );
}

function play(userChoice) {

    let gameResult;

    let number = Math.floor(Math.random() * 3)
    let computerChoice = options[number]

    console.log(document.querySelector(".img2").setAttribute("src", `./images/${computerChoice}.png `))

    if (userChoice === computerChoice) {
        gameResult = "It's a draw";
    } else if (isWin(userChoice, computerChoice)) {
        gameResult = `You won!`;
    } else {
        gameResult  = `You Lost!`;
    }

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    const para = document.createElement("p");
    para.textContent = gameResult;
    resultContainer.appendChild(para);
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