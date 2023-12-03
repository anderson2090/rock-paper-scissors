import React from "react";
import styles from "./SideColumn.module.css";
import { useRecoilState } from "recoil";
import { userChoiceAtom } from "../atoms/atoms";

const choiceText = (id, choice) => {
  if (id === "user") {
    return `You chose ${choice}`;
  }
};

const SideColumn = ({ id, imgSrc, imgAlt }) => {
  const [userChoice, setUserChoice] = useRecoilState(userChoiceAtom);
  return (
    <div className={styles.main}>
      {userChoice && (
        <p className={styles.text}>{choiceText(id, userChoice)}</p>
      )}
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default SideColumn;
