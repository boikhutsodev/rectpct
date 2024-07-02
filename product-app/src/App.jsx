import React from "react";

// Watched 2:44:28
import { createContext } from "react";

import ComponentC from "./ComponentC";

// Contex API
export const Data = createContext();

function App() {
  const name = "BoikhutsoDev";
  const age = 25;
  const title = "Wap Developer";
  return (
    <>
      <Data.Provider value={[name, age, title]}>
        <ComponentC />
      </Data.Provider>
    </>
  );
}

export default App;
