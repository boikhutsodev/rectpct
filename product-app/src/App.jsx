import React from "react";

// Watched 1:14:57
const Copy = () => {
  const copyHandler = () => {
    console.log("Stop stealing my information");
  };

  return (
    <>
      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod fuga
        saepe, exercitationem quasi tempore explicabo quia accusamus. Velit,
        minima.
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <Copy />
    </>
  );
}

export default App;
