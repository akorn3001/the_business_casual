import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="delete-modal">
          <span>{this.props.dangerText}</span>
          <hr />
          <div className="modal-buttons">
            <button className="danger-button modal-btn" onClick={this.props.dangerClick}>Yes</button>
            <button className="safety-button modal-btn" onClick={this.props.safetyClick}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
