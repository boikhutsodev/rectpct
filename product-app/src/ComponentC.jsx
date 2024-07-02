import React from "react";
import { Data, Data1 } from "./App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          // return (
          //   <h1>
          //     My name is: {name} i am: {age} i would love to work as: {title}
          //   </h1>
          // );

          return (
            <Data1.Consumer>
              {(title) => {
                return (
                  <h1>
                    My name is {name} i am a {title} now
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
