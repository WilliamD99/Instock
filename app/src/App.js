import React from "react";
import "./styles/main.css";
import Location from "./components/Location";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Inventory from "./components/Inventory";

function App() {
  return (
    <div className="App">
      <Header />
      <Modal />
      <Location />
      <Inventory />
    </div>
  );
}
export default App;
