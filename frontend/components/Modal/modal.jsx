import React from 'react';

const Modal = (props) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <span>{props.dangerText}</span>
        <div className="modal-buttons">
          <button className="danger-button modal-btn" onClick={props.onDangerClick}>Yes</button>
          <button className="safety-button modal-btn" onClick={props.onSafetyClick}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
