import React from "react";

// Watched 1:14:57
const Movie = () => {
  const moveHandler = () => {
    console.log("You hoverd on me");
  };
  return (
    <>
      <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        a.
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <Movie />
    </>
  );
}

export default App;
