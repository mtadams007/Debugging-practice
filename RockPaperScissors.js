let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
  return array[(Math.floor(Math.random()*3)) ];
}


function checkInput(input, computerChoices) {
  if (input === "quit") {
    gameOver = true;
  }

  let computerChoice = randomFrom(computerChoices);

  if(computerChoice === "rock" && input === "scissors"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice === "scissors" && input === "paper"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice === "paper" && input === "rock"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice === input) {
    alert("You win!");
    return false;
  } else if (input === "quit") {
      return true;
  } else {
    alert("Tie game!");
    return false;
  }
}

function start(gameOver, computerChoices) {
  // debugger;
  while (!gameOver){
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.").toLowerCase();
    gameOver = checkInput(playerInput, computerChoices);
    // playerInput = "paper";

  }
}




start(gameOver, computerChoices)
