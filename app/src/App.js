import React from "react";
import "./styles/main.css";
import Location from "./components/Location";
import Modal from "./components/Modal";
import $ from "jquery";

function App() {
  function revealModal() {
    let modal = $("#modal");
    modal.fadeIn("slow", () => {
      modal.css({ display: "flex", "flex-direction": "column" });
    });
  }
  return (
    <div className="App">
      <button className="test-button" onClick={revealModal}>
        Click me
      </button>
      <Modal></Modal>
      <Location />
    </div>
  );
}

export default App;
