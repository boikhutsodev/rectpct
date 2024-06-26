import User from "./User";
import React from "react";

// Watched 1:14:57

function App() {
  return (
    <>
      <User
        img="https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=400"
        name="Boikhutso WebDev"
        age={18}
        hobbies={["Coding ", "Reading ", "Sleeping ", "Recording "]}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora
          repellendus officiis corrupti magni accusantium cum est error repellat
          eos. Nihil aspernatur sapiente architecto accusamus. Dicta, temporibus
          molestiae. Laboriosam, nihil.
        </p>
        <h1>Hello I am a children</h1>
      </User>
    </>
  );
}

export default App;
