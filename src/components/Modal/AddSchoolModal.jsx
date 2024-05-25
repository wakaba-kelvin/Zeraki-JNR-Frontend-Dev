import React, { useState } from 'react';
import './AddSchoolModal.css'; 

const AddSchoolModal = ({ isOpen, onClose, onSubmit }) => {
  const [schoolName, setSchoolName] = useState('');
  const [county, setCounty] = useState('');
  const [type, setType] = useState('');
  const [cheques, setCheques] = useState('');
  const [product, setProduct] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [collections, setCollections] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/Schools', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          SchoolName: schoolName,
          County: county,
          Type: type,
          Cheques: cheques,
          Product: product,
          ContactInfo: contactInfo,
          RegistrationDate: registrationDate,
          Collections: collections // Add Collections field
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add new school');
      }
  
      const newSchool = await response.json();
  
      onSubmit(newSchool);
  
      setSchoolName('');
      setCounty('');
      setType('');
      setCheques('');
      setProduct('');
      setContactInfo('');
      setRegistrationDate('');
      setCollections('');
  
      onClose();
    } catch (error) {
      console.error('Error adding new school:', error);
    }
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
            <div className="field">
              <label className="label">Contact Info</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Registration Date</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  value={registrationDate}
                  onChange={(e) => setRegistrationDate(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Collections</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={collections}
                  onChange={(e) => setCollections(e.target.value)}
                  required
                />
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
