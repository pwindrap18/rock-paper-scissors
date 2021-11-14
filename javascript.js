const computerPlay = () => {
  const rpc = ["rock", "paper", "scissors"];
  return rpc[Math.floor(Math.random() * rpc.length)];
};

console.log(computerPlay());
