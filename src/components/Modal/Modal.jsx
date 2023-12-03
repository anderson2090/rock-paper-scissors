import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  computerChoiceAtom,
  computerPointsStateAtom,
  userChoiceAtom,
  userPointsStateAtom,
} from "../atoms/atoms";
const Modal = ({ gameWinner }) => {
  const [userPoints, setUserPoints] = useRecoilState(userPointsStateAtom);
  const [computerPoints, setComputerPoints] = useRecoilState(
    computerPointsStateAtom
  );

  const [userChoice, setUserChoice] = useRecoilState(userChoiceAtom);
  const [computerChoice, setComputerChoice] =
    useRecoilState(computerChoiceAtom);

  const clickHandler = () => {
    setUserPoints(0);
    setComputerPoints(0);
    setUserChoice(null);
    setComputerChoice(null);
  };

  return (
    <div className={styles.main}>
      {gameWinner}
      <Button text="Reset" clickHandler={clickHandler} />
    </div>
  );
};

export default Modal;
