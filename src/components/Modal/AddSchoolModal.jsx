import React, { useState } from 'react';

const AddSchoolModal = ({ isOpen, onClose, onSubmit }) => {
  const [schoolName, setSchoolName] = useState('');
  const [county, setCounty] = useState('');
  const [type, setType] = useState('');
  const [cheques, setCheques] = useState('');
  const [product, setProduct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ schoolName, county, type, cheques, product });
    setSchoolName('');
    setCounty('');
    setType('');
    setCheques('');
    setProduct('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">School Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">County</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Type</label>
              <div className="control">
                <select
                  className="input"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                  <option value="IGCSE">IGCSE</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="label">Cheques</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={cheques}
                  onChange={(e) => setCheques(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Product</label>
              <div className="control">
                <select
                  className="input"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  required
                >
                  <option value="">Select Product</option>
                  <option value="Zeraki Analytics">Zeraki Analytics</option>
                  <option value="Zeraki Finance">Zeraki Finance</option>
                  <option value="Zeraki Timetable">Zeraki Timetable</option>
                </select>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
              </div>
              <div className="control">
                <button type="button" className="button" onClick={onClose}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default AddSchoolModal;
