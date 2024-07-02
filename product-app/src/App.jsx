import React from "react";
import { useRef } from "react";
// Watched 2:44:28

function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "BoiTso";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write BoiTso</button>
    </>
  );
}

export default App;
