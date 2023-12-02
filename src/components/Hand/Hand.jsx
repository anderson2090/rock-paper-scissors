import React from "react";
import Finger from "../Finger/Finger";
import styles from "./Hand.module.css";
import rock from "../../images/rock.png";
import rock2 from "../../images/rock2.png";
import paper from "../../images/paper.png";
import paper2 from "../../images/paper2.png";
import scissors from "../../images/scissors.png";
import scissors2 from "../../images/scissors2.png";
const Hand = () => {
  return (
    <div className={styles.main}>
      <Finger
        pImgSrc={rock2}
        pImgAlt={"A rock"}
        sImgSrc={rock}
        sImgAlt={"another rock"}
        text={"rock"}
      />
      <Finger
        pImgSrc={paper}
        pImgAlt={"A rock wrapped in a paper"}
        sImgSrc={paper2}
        sImgAlt={"another rock wrapped in a paper"}
        text={"Paper"}
      />
      <Finger
        pImgSrc={scissors}
        pImgAlt={"A Scissors"}
        sImgSrc={scissors2}
        sImgAlt={"another scissors"}
        text={"Scissors"}
      />
    </div>
  );
};

export default Hand;
