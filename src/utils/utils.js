export const determineWinner = (userChoiceC, computerChoiceC) => {
  if (userChoiceC != null && computerChoiceC != null) {
    const userChoice = userChoiceC.toLowerCase();
    const computerChoice = computerChoiceC.toLowerCase();

    console.log(`User Choice ${userChoice}`);
    console.log(`Computer Choice ${computerChoice}`);
    if (userChoice === computerChoice) {
      return "tie";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "user";
    } else {
      return "computer";
    }
  }
};

export const computersChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
