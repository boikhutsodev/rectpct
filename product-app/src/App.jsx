import React from "react";

// Watched 1:14:57

const differentStyle = {
  color: "blue",
  fontSize: "50px",
  textDecoration: "underline",
  background: "lightGreen",
};

function App() {
  return (
    <>
      <h1
        style={{
          color: differentStyle.color,
          background: differentStyle.background,
          fontSize: differentStyle.fontSize,
        }}
      >
        Hello I am Boikhutso
      </h1>
    </>
  );
}

export default App;
