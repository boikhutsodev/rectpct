import React from "react";

// Watched 2:19:47
import { useState } from "react";

function App() {
  const [movie, setMovies] = useState({
    title: "Mathwetwe",
    retings: 8,
  });

  const handleClick = () => {
    const copyMovie = {
      ...movie,
      retings: 10,
    };
    setMovies(copyMovie);
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Rating: {movie.retings}</p>
      <button onClick={handleClick}>Change Ratings</button>
    </>
  );
}

export default App;
