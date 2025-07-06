const options = ["Rock", "Paper", "Scissors"];

const getRandomComputerResult = () => {
  const index = Math.floor(Math.random() * options.length);
  return options[index]; 
}

console.log(getRandomComputerResult(options));
