import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Modal from "./components/modalka/modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div className="openModal">
        <h1 className="openModalTitle">Hello world</h1>
        <button
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Open
        </button>
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </div>
  );
}

export default App;
