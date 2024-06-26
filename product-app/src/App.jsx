import React from "react";

// Watched 1:14:57
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // }
  // return <InvalidPassword />;
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};
function App() {
  return (
    <>
      <Password isValid={false} />
    </>
  );
}

export default App;
