import React from "react";
import Hand from "../Hand/Hand";
import styles from "./MiddleColumn.module.css";
import Button from "../Button/Button";
const MiddleColumn = () => {
  return (
    <div className={styles.main}>
      <Hand />
      <Button text={"Start"} />
    </div>
  );
};

export default MiddleColumn;
