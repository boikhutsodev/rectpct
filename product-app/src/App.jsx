import React from "react";

// Watched 2:27:32
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Hello");
    document.title = `Increment (${value})`;
  }, [value]);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  );
}

export default App;
