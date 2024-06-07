function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {numbers.map((number) => (
        <ul>
          <li>{number}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
