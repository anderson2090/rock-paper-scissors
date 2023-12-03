import React from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import Modal from "../Modal/Modal";
import { useRecoilValue } from "recoil";
import { gameWinnerSelector } from "../selectors/selectors";
const TheApp = () => {
  const gameWinner = useRecoilValue(gameWinnerSelector);

  return (
    <>
      {gameWinner && <Modal gameWinner={gameWinner} />}
      {!gameWinner && <WelcomeScreen />}
     
    </>
  );
};

export default TheApp;
