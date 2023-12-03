import { selector } from "recoil";
import {
  computerChoiceAtom,
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
