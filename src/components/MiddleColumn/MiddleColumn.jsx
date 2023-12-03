import React from "react";
import Hand from "../Hand/Hand";
import styles from "./MiddleColumn.module.css";
import Button from "../Button/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { isPlayingStateAtom } from "../atoms/atoms";
import { determineWinnerSelector } from "../selectors/selectors";
const MiddleColumn = () => {
  const [isPlaying, setPlaying] = useRecoilState(isPlayingStateAtom);
  const winner = useRecoilValue(determineWinnerSelector);
  return (
    <div className={styles.main}>
      {isPlaying && (
        <>
          {!winner && <p className={styles.text}>Choose One</p>}

          <p className={styles.text}>{winner}</p>
        </>
      )}
      <Hand />
      {!isPlaying && (
        <Button
          text={"Start"}
          clickHandler={() => {
            setPlaying(true);
          }}
        />
      )}
      {isPlaying && (
        <>{!winner && <p className={styles.text}>First to 5 points wins.</p>}</>
      )}
    </div>
  );
};

export default MiddleColumn;
