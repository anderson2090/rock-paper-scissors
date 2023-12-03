import React from "react";
import SideColumn from "../SideColumn/SideColumn";
import MiddleColumn from "../MiddleColumn/MiddleColumn";
import styles from "./WelcomeScreen.module.css";
import guy from "../../images/guy.png";
import computer from "../../images/the-computer.png";
import { useRecoilState } from "recoil";
import { computerChoiceAtom, userChoiceAtom } from "../atoms/atoms";
const WelcomeScreen = () => {
  const [userChoice, setUserChoice] = useRecoilState(userChoiceAtom);
  const [computerChoice, setComputerChoice] =
    useRecoilState(computerChoiceAtom);

  return (
    <div className={styles.main}>
      <SideColumn
        id={"user"}
        imgSrc={guy}
        imgAlt={"A guy"}
        choice={userChoice}
      />
      <MiddleColumn />
      <SideColumn
        id={"computer"}
        imgSrc={computer}
        imgAlt={"The Computer"}
        choice={computerChoice}
      />
    </div>
  );
};

export default WelcomeScreen;
