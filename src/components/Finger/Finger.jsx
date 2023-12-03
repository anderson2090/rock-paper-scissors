import React from "react";
import styles from "./Finger.module.css";
import stylesRed from "./FingerRed.module.css";
import VerticleLine from "../VerticleLine/VerticleLine";
import { useRecoilState } from "recoil";
import { isPlayingStateAtom, userChoiceAtom } from "../atoms/atoms";
const Finger = ({ pImgSrc, pImgAlt, sImgSrc, sImgAlt, text }) => {
  const [isPlaying, setPlaying] = useRecoilState(isPlayingStateAtom);
  const [userChoice, setUserChoice] = useRecoilState(userChoiceAtom);

  const clickHandler = () => {
    if (isPlaying) {
      setUserChoice(text);
    }
  };

  return (
    <div
      className={`${!isPlaying ? styles.main : stylesRed.main}`}
      onClick={clickHandler}
    >
      <VerticleLine height={20} />
      <img className={styles.imgOne} src={pImgSrc} alt={pImgAlt} />
      <VerticleLine height={20} />
      <VerticleLine height={40} />
      <VerticleLine height={20} />
      <VerticleLine height={20} />
      <VerticleLine height={20} />
      <img className={styles.imgTwo} src={sImgSrc} alt={sImgAlt} />
      <p className={styles.text}>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </p>
    </div>
  );
};

export default Finger;
