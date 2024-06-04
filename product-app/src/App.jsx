function App() {
  const myName = "Boi Tso";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <>
      <h1>{myName}</h1>
      <p>2 + 2 = {2 * 3}</p>
      <p>My Friends List: {["Thabo", "Lebo", "Karabo"]}</p>
      <p>2 * 5 = {multiply(2, 5)}</p>
      <p className={specialClass}>Be you!</p>
    </>
  );
}

export default App;
