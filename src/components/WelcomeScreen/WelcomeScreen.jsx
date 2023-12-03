import React from "react";
import SideColumn from "../SideColumn/SideColumn";
import MiddleColumn from "../MiddleColumn/MiddleColumn";
import styles from "./WelcomeScreen.module.css";
import guy from "../../images/guy.png";
import computer from "../../images/the-computer.png";
const WelcomeScreen = () => {
  return (
    <div className={styles.main}>
      <SideColumn id={"user"} imgSrc={guy} imgAlt={"A guy"} />
      <MiddleColumn />
      <SideColumn id={"computer"} imgSrc={computer} imgAlt={"The Computer"} />
    </div>
  );
};

export default WelcomeScreen;
