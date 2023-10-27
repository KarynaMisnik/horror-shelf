// InfoWindow.js
import React from 'react';

function InfoWindow({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>content will be here</h1>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default InfoWindow;
