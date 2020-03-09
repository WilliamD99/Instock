import React from "react";
import "./styles/main.css";
import Location from "./components/Location";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Modal />
      <Product />
      <Inventory />
      <Location />
    </div>
  );
}
export default App;
