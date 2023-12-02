import React from "react";
import Finger from "../Finger/Finger";
import styles from "./Hand.module.css";
const Hand = () => {
  return (
    <div className={styles.main}>
      <Finger />
      <Finger />
      <Finger />
    </div>
  );
};

export default Hand;
