import React from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import { RecoilRoot } from "recoil";
const TheApp = () => {
  return (
    <RecoilRoot>
      <WelcomeScreen />
    </RecoilRoot>
  );
};

export default TheApp;
