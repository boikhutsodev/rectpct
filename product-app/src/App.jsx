import React from "react";

// Watched 1:59:57
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={subtract}>-</button>
    </>
  );
};

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
