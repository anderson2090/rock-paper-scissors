export const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
};

export const computersChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
