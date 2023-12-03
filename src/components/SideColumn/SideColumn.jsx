import React from "react";
import styles from "./SideColumn.module.css";

const SideColumn = ({ character, imgSrc, imgAlt, choice, points }) => {
  return (
    <div className={styles.main}>
      <p className={styles.text}>{choice}</p>
      <p className={styles.text}>{points}</p>
      <p className={styles.text}>{character}</p>
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default SideColumn;
