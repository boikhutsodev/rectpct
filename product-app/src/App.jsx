import React from "react";

// Watched 1:14:57
const handleClick = (a, b) => {
  console.log(a + b);
};

const Button = () => {
  return <button onClick={() => handleClick(4, 3)}>Click</button>;
};

function App() {
  return (
    <>
      <Button />
    </>
  );
}

export default App;
