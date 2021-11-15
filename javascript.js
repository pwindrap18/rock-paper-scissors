import capitalize from "./capitalize.js";

const computerPlay = () => {
  const rpc = ["rock", "paper", "scissors"];
  return rpc[Math.floor(Math.random() * rpc.length)];
};

const checkPlayerInput = (input) => {
  if (
    input.toLowerCase() === "rock" ||
    input.toLowerCase() === "paper" ||
    input.toLowerCase() === "scissors"
  ) {
    return input.toLowerCase();
  }
  let newInput = String(prompt("please choose rock paper or scissors!"));
  return checkPlayerInput(newInput);
};

const playRound = () => {
  let playerInput = String(prompt("choose rock paper scissors"));

  let player = checkPlayerInput(playerInput);
  let computer = computerPlay();
  const draw = "Its a draw!";
  const lose = `You lose! ${capitalize(computer)} beats ${capitalize(player)}`;
  const win = `You win! ${capitalize(player)} beats ${capitalize(computer)}`;

  if (player === "rock") {
    if (computer === "rock") {
      console.log(draw);
      return "draw";
    }
    if (computer === "paper") {
      console.log(lose);
      return "lose";
    }
    if (computer === "scissors") {
      console.log(win);
      return "win";
    }
  }

  if (player === "paper") {
    if (computer === "paper") {
      console.log(draw);
      return "draw";
    }
    if (computer === "scissors") {
      console.log(lose);
      return "lose";
    }
    if (computer === "rock") {
      console.log(win);
      return "win";
    }
  }

  if (player === "scissors") {
    if (computer === "scissors") {
      console.log(draw);
      return "draw";
    }
    if (computer === "rock") {
      console.log(lose);
      return "lose";
    }
    if (computer === "paper") {
      console.log(win);
      return "win";
    }
  }
};

const game = () => {
  let playerCounter = 0;
  let computerCounter = 0;

  while (playerCounter < 5 || computerCounter < 5) {
    let result = playRound();
    if (result === "win") {
      playerCounter++;
    }
    if (result === "lose") {
      computerCounter++;
    }
    console.log(
      `player score: ${playerCounter} - computer score: ${computerCounter}`
    );
    if (computerCounter === 5) {
      console.log(
        `computer wins with score ${playerCounter} - ${computerCounter}`
      );
      return;
    }

    if (playerCounter === 5) {
      console.log(
        `player wins with score ${playerCounter} - ${computerCounter}`
      );
      return;
    }
  }
};

game();
