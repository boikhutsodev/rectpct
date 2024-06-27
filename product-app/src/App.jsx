import React from "react";

// Watched 1:14:57
const handleClick = () => {
  console.log("Clicked");
};

const Button = () => {
  return <button onClick={handleClick}>Click</button>;
};

function App() {
  return (
    <>
      <Button />
    </>
  );
}

export default App;
