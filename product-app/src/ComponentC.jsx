import React from "react";
import { Data } from "./App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {([name, age, title]) => {
          return (
            <h1>
              My name is: {name} i am: {age} i would love to work as: {title}
            </h1>
          );
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
