import React from "react";

// Watched 2:44:28
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <>
      {
        <ul>
          {data.map((item) => (
            <li key={Math.random()}>{item.title}</li>
          ))}
        </ul>
      }
    </>
  );
}

export default App;
