import { selector } from "recoil";
import {
  computerChoiceAtom,
  computerPointsStateAtom,
  userChoiceAtom,
  userPointsStateAtom,
} from "../atoms/atoms";
import { determineWinner } from "../../utils/utils";

export const determineWinnerSelector = selector({
  key: "determineWinnerSelector",
  get: ({ get }) => {
    const userChoice = get(userChoiceAtom);
    const computerChoice = get(computerChoiceAtom);

    return determineWinner(userChoice, computerChoice);
  },
});

export const winnerStringSelector = selector({
  key: "winnerString",
  get: ({ get }) => {
    const winner = get(determineWinnerSelector);

    if (winner === "user") {
      return "The User Wins!";
    } else if (winner === "computer") {
      return "The Computer Wins!";
    } else if (winner === "tie") {
      return "It's a tie";
    } else {
      return "";
    }
  },
});

export const userPointsSelector = selector({
  key: "userPointsSelector",
  get: ({ get }) => {
    let userPoints = get(userPointsStateAtom);
    const winner = get(determineWinnerSelector);

    if (winner === "user") {
      userPoints++;
    }

    return userPoints;
  },
});

export const computerPointsSelector = selector({
  key: "computerPointsSelector",
  get: ({ get }) => {
    let computerPoints = get(computerPointsStateAtom);
    const winner = get(determineWinnerSelector);

    if (winner === "computer") {
      computerPoints++;
    }

    return computerPoints;
  },
});

export const gameWinnerSelector = selector({
  key: "gameWinnerSelector",
  get: ({ get }) => {
    const userPoints = get(userPointsSelector);
    const computerPoints = get(computerPointsSelector);

    if (userPoints >= 5) {
      return "The User wins the game!";
    } else if (computerPoints >= 5) {
      return "The Computer wins the game!";
    } else {
      return null;
    }
  },
});
