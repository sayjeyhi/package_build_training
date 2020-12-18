import logo from "./logo.svg";
import "./App.css";
import { useSayHello, Button } from "training_package_jey_3";

function App({ id }) {
  useSayHello("JafarRezaei");

  return (
    <Button title="Test-Button" hasBorder isSwitch>
      {(isSwitched) => (isSwitched ? "Salam" : "Bye")}
    </Button>
  );
}

export default App;
