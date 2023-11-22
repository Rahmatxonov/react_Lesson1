import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Modal from "./components/modalka/modal";
import Random from "./components/random/random";

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
      <h2 className="randomTitle">Random Images</h2>
      <div className="image-container">
        <Random />
      </div>
    </div>
  );
}

export default App;
