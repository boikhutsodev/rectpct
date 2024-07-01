import React from "react";

// Watched 2:19:47
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Popy", ratings: 6 },
    { id: 2, title: "Atlas", ratings: 9 },
    { id: 3, title: "Hall pass", ratings: 4 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) =>
        m.id === 3 ? { ...movies, title: "John Wick 4", ratings: 10 } : m
      )
    );
  };

  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}

export default App;
