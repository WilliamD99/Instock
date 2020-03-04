import React from "react";
import "./styles/main.css";
import Location from "./components/Location";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      <Location />
    </div>
  );
}
export default App;
