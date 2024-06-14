function App() {
  // eg 1
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {numbers.map((number) => (
        <ul key={Math.random() * 10}>
          <li>{number}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
