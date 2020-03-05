import React from "react";
import "./styles/main.css";
import Location from "./components/Location";
import Modal from "./components/Modal";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Modal />
      <Location />
    </div>
  );
}
export default App;
