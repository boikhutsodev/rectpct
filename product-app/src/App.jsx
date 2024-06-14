function App() {
  // eg 1
  const userInfo = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Thabo", age: 30 },
    { id: 3, name: "Mohau", age: 21 },
    { id: 4, name: "Bryen", age: 37 },
  ];
  return (
    <>
      {userInfo.map((user) => (
        <ul key={Math.random() * userInfo.length}>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
