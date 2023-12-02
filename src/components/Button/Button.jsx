import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, clickHandler }) => {
  return (
    <div className={styles.main} onClick={clickHandler}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Button;
