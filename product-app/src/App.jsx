import React from "react";

// Watched 1:14:57
const Card = () => {
  const items = ["", "Mac Book", "PlayStation 5", "XBox", "Headphones"];

  return (
    <>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}
      <ul>
        <h4>🤌 Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </>
  );
};
function App() {
  return (
    <>
      <Card />
    </>
  );
}

export default App;
