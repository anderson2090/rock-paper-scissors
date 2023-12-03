import React from "react";
import TheApp from "./components/TheApp/TheApp";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <TheApp />
      </RecoilRoot>
    </>
  );
};

export default App;
