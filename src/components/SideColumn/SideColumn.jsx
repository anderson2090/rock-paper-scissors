import React from "react";
import styles from "./SideColumn.module.css";
const SideColumn = ({ imgSrc, imgAlt }) => {
  return (
    <div className={styles.main}>
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default SideColumn;
