const computerPlay = () => {
  const rpc = ["rock", "paper", "scissors"];
  return rpc[Math.floor(Math.random() * rpc.length)];
};

const playRound = (player, computer) => {
  const lower = player.toLowerCase();
  switch (lower === "rock") {
    case computer === "rock":
      return "its a draw";
    case computer === "paper":
      return "you lose";
    case computer === "scissors":
      return "you win";
  }
};

const playerSelect = "rock";
const computerSelect = computerPlay();
console.log(playRound(playerSelect, computerSelect));
