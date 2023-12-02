import React from "react";
import Hand from "../Hand/Hand";
import styles from "./MiddleColumn.module.css";
const MiddleColumn = () => {
  return (
    <div className={styles.main}>
      <Hand />
    </div>
  );
};

export default MiddleColumn;
