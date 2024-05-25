import React, { useState, useEffect } from 'react';
import AddSchoolModal from '../../components/Modal/AddSchoolModal';
import SchoolDetailsModal from '../../components/Modal/SchoolDetailsModal';
import './Schools.css';

const SignupComponent = () => {
  const [isAddSchoolModalOpen, setIsAddSchoolModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await fetch('http://localhost:3000/Schools');
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  const handleOpenAddSchoolModal = () => {
    setIsAddSchoolModalOpen(true);
  };

  const handleCloseAddSchoolModal = () => {
    setIsAddSchoolModalOpen(false);
  };

  const handleOpenDetailsModal = (school) => {
    setSelectedSchool(school);
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedSchool(null);
  };

  const handleSubmitSignup = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Schools', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add new school');
      }

      const newSchool = await response.json();
      setSchools([...schools, newSchool]);
      handleCloseAddSchoolModal();
    } catch (error) {
      console.error('Error adding new school:', error);
    }
  };

  return (
    <div className='schools'>
      <button onClick={handleOpenAddSchoolModal}>Add School</button>
      <AddSchoolModal isOpen={isAddSchoolModalOpen} onClose={handleCloseAddSchoolModal} onSubmit={handleSubmitSignup} />
      <SchoolDetailsModal isOpen={isDetailsModalOpen} onClose={handleCloseDetailsModal} school={selectedSchool} />
      <table className='tbl'>
        <thead>
          <tr>
            <th>#</th>
            <th>School Name</th>
            <th>County</th>
            <th>Cheques</th>
            <th>Type</th>
            <th>Product</th>
            <th>Registration Date</th>
            <th>Contact Info</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school, index) => (
            <tr key={school.ID}>
              <td>{school.ID}</td>
              <td>{school.SchoolName}</td>
              <td>{school.County}</td>
              <td>{school.Cheques}</td>
              <td>{school.Type}</td>
              <td>{school.Product}</td>
              <td>{school.registrationDate}</td>
              <td>{school.ContactInfo}</td>
              <td>{school.balance}</td>
              <td>
                <button onClick={() => handleOpenDetailsModal(school)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SignupComponent;
