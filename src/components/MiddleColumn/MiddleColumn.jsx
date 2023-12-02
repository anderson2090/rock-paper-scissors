import React from "react";
import Hand from "../Hand/Hand";
import styles from "./MiddleColumn.module.css";
import Button from "../Button/Button";
import { useRecoilState } from "recoil";
import { isPlayingStateAtom } from "../atoms/atoms";
const MiddleColumn = () => {
  const [isPlaying, setPlaying] = useRecoilState(isPlayingStateAtom);

  return (
    <div className={styles.main}>
      <Hand />
      {!isPlaying && (
        <Button
          text={"Start"}
          clickHandler={() => {
            setPlaying(true);
          }}
        />
      )}
    </div>
  );
};

export default MiddleColumn;
