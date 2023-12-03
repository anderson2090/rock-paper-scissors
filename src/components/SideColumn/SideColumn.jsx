import React from "react";
import styles from "./SideColumn.module.css";
import { useRecoilState } from "recoil";
import { computerChoiceAtom, userChoiceAtom } from "../atoms/atoms";

const choiceText = (id, choice) => {
  if (id === "user") {
    return `You chose ${choice}`;
  } else {
    return `The computer chose ${choice}`;
  }
};

const SideColumn = ({ id, imgSrc, imgAlt, choice }) => {
  return (
    <div className={styles.main}>
      <p className={styles.text}>{choice}</p>

      <img className={styles.img} src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default SideColumn;
