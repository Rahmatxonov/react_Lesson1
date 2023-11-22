import React from "react";
import "./modal.css";
function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="btnX" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="title">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            voluptatum!
          </p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancelBtn">
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
