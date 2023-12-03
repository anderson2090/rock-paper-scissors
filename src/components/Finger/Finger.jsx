import React from "react";
import styles from "./Finger.module.css";
import stylesRed from "./FingerRed.module.css";
import VerticleLine from "../VerticleLine/VerticleLine";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  computerChoiceAtom,
  isPlayingStateAtom,
  userChoiceAtom,
} from "../atoms/atoms";
import { computersChoice } from "../../utils/utils";
import { determineWinnerSelector } from "../selectors/selectors";
const Finger = ({ pImgSrc, pImgAlt, sImgSrc, sImgAlt, text }) => {
  const [isPlaying, setPlaying] = useRecoilState(isPlayingStateAtom);
  const [userChoice, setUserChoice] = useRecoilState(userChoiceAtom);
  const [computerChoice, setComputerChoice] =
    useRecoilState(computerChoiceAtom);

  

  const clickHandler = () => {
    if (isPlaying) {
      setUserChoice(text);
      setComputerChoice(computersChoice());
      
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
