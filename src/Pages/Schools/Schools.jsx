import React, { useState } from 'react';
import AddSchoolModal from '../../components/Modal/AddSchoolModal';

const SignupComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitSignup = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Signups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add new school');
      }

      console.log('New school added successfully');
    } catch (error) {
      console.error('Error adding new school:', error);
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Add School</button>
      <AddSchoolModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitSignup} />
    </div>
  );
};

export default SignupComponent;
