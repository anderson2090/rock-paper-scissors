import React from "react";
import styles from "./SideColumn.module.css";

const SideColumn = ({ character, imgSrc, imgAlt, choice, points }) => {
  return (
    <div className={styles.main}>
      <p className={styles.text} style={{textDecoration:"underline"}}>{choice}</p>
      <p className={styles.text}>{`Points: ${points}`}</p>
      <p className={styles.text}>{character}</p>
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default SideColumn;
