import { atom } from "recoil";

export const isPlayingStateAtom = atom({
  key: "isPlayingStateAtom",
  default: false,
});

export const userChoiceAtom = atom({
  key: "userChoiceAtom",
  default: null,
});

export const computerChoiceAtom = atom({
  key: "computerChoiceAtom",
  default: null,
});

export const userPointsStateAtom = atom({
  key: "userPointsStateAtom",
  default: 0,
});

export const computerPointsStateAtom = atom({
  key: "computerPointsStateAtom",
  default: 0,
});
