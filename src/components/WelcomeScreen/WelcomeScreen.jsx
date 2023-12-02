import React from "react";
import SideColumn from "../SideColumn/SideColumn";
import MiddleColumn from "../MiddleColumn/MiddleColumn";
import styles from "./WelcomeScreen.module.css";
const WelcomeScreen = () => {
  return (
    <div className={styles.main}>
      <SideColumn />
      <MiddleColumn />
      <SideColumn />
    </div>
  );
};

export default WelcomeScreen;
