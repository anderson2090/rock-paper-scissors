import React from "react";
import styles from "./VerticleLine.module.css";
const VerticleLine = ({ height }) => {
  return <div className={styles.main} style={{ height: height }}></div>;
};

export default VerticleLine;
