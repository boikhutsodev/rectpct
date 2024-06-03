import Add from "./components/Add";
import Greetings from "./components/Greetings";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>Slowly is the fastest way</h1>
      <Add />
      <Greetings />
    </Fragment>
  );
}

export default App;
