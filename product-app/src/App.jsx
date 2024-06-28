import React from "react";

// Watched 2:11:23
import { useState } from "react";
const Counter = () => {
  const [username, setUsername] = useState("Unknown");

  const changeName = () => {
    setUsername("BoikhutsoWebDev");
  };

  return (
    <>
      <h1>{username}</h1>
      <button onClick={changeName}>Change Name</button>
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
