import React from "react";

// Watched 2:19:47
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(["Thabo", "Zoka", "Thato"]);

  const addOne = () => {
    setFriends([...friends, "Boikhutso"]);
  };
  const removeOne = () => {
    setFriends(friends.filter((f) => f !== "Zoka"));
  };
  const updateOne = () => {
    setFriends(friends.map((f) => (f === "Thabo" ? "Thabo Moc" : f)));
  };

  return (
    <>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </>
  );
}

export default App;
