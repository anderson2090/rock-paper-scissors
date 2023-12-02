import React from "react";
import styles from "./Button.module.css";
const Button = ({ text }) => {
  return (
    <div className={styles.main}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Button;
