import React from "react";
import SideColumn from "../SideColumn/SideColumn";
import MiddleColumn from "../MiddleColumn/MiddleColumn";
import styles from "./WelcomeScreen.module.css";
import guy from "../../images/guy.png";
import computer from "../../images/the-computer.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { computerChoiceAtom, userChoiceAtom } from "../atoms/atoms";
import { userPointsSelector } from "../selectors/selectors";
const WelcomeScreen = () => {
  const [userChoice, setUserChoice] = useRecoilState(userChoiceAtom);
  const [computerChoice, setComputerChoice] =
    useRecoilState(computerChoiceAtom);
  const userPoints = useRecoilValue(userPointsSelector);

  return (
    <div className={styles.main}>
      <SideColumn
        character={"You"}
        imgSrc={guy}
        imgAlt={"A guy"}
        choice={userChoice}
        points={userPoints}
      />
      <MiddleColumn />
      <SideColumn
        character={"The Computer"}
        imgSrc={computer}
        imgAlt={"The Computer"}
        choice={computerChoice}
      />
    </div>
  );
};

export default WelcomeScreen;
