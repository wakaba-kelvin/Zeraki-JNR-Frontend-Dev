import React from 'react';
import './SchoolDtailModal.css';

const SchoolDetailsModal = ({ isOpen, onClose, school }) => {
  if (!school) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h2>School Details</h2>
          <p><strong>School Name:</strong> {school.schoolName}</p>
          <p><strong>County:</strong> {school.county}</p>
          <p><strong>Cheques:</strong> {school.cheques}</p>
          <p><strong>Type:</strong> {school.type}</p>
          <p><strong>Product:</strong> {school.product}</p>
          <p><strong>Total Collections:</strong> {school.Collections}</p>
          <p><strong>Number of Invoices:</strong> {school.Invoices}</p>
          <button className="button is-light" onClick={onClose}>Close</button>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default SchoolDetailsModal;
