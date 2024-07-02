import React from "react";
import { useContext } from "react";
import { Data, Data1 } from "./App";

const ComponentC = () => {
  const name = useContext(Data);
  const title = useContext(Data1);

  return (
    <>
      <h1>
        My name is: {name} & i am a {title} currently.
      </h1>
    </>
  );
};

export default ComponentC;
