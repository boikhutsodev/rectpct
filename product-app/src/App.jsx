function App() {
  const userInfo = [
    {
      username: "BoiTso",
      email: "boitso@gmail.com",
      location: "RSA",
    },
    {
      username: "Thabo",
      email: "thabo@gmail.com",
      location: "LESOTHO",
    },
    {
      username: "Bryan",
      email: "bryan@gmail.com",
      location: "USA",
    },
  ];

  return (
    <>
      {userInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
