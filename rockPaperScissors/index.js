const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoisces = document.querySelectorAll("button");
let userChoice;
let computerChoise;

possibleChoisces.forEach((possibleChoisce) =>
  possibleChoisce.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoise();
    getResult();
  })
);

function generateComputerChoise() {
  const randomNumer = Math.floor(Math.random() * 3) + 1;
  // albo urzyc posibleChoise.length
  // console.log(randomNumer)
  if (randomNumer === 1) {
    computerChoise = "rock";
  }
  if (randomNumer === 2) {
    computerChoise = "paper";
  }
  if (randomNumer === 3) {
    computerChoise = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoise;
}

function getResult() {
  if (computerChoise === userChoice) {
    result = "its a draw!";
  }
  if (computerChoise === "rock" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerChoise === "rock" && userChoice === "scissor") {
    result = "you lost!";
  }
  if (computerChoise === "paper" && userChoice === "scissor") {
    result = "you win!";
  }
  if (computerChoise === "paper" && userChoice === "rock") {
    result = "you lost!";
  }
  if (computerChoise === "scissor" && userChoice === "rock") {
    result = "you win!";
  }
  if (computerChoise === "scissor" && userChoice === "paper") {
    result = "you lost!";
  }

  resultDisplay.innerHTML = result;
}
