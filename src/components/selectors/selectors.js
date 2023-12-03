import { selector } from "recoil";
import { computerChoiceAtom, userChoiceAtom } from "../atoms/atoms";
import { determineWinner } from "../../utils/utils";

export const determineWinnerSelector = selector({
  key: "determineWinnerSelector",
  get: ({ get }) => {
    const userChoice = get(userChoiceAtom);
    const computerChoice = get(computerChoiceAtom);

    return determineWinner(userChoice, computerChoice);
  },
});
