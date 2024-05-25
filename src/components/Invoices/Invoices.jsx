import React, { useEffect, useState } from 'react';
import './Invoices.css';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [schools, setSchools] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState({
    id: '',
    schoolName: '',
    amountDue: '',
    dueDate: ''
  });
  const [filteredSchools, setFilteredSchools] = useState([]);

  useEffect(() => {
    fetchInvoices();
    fetchSchools();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await fetch('http://localhost:3000/Invoice');
      const data = await response.json();
      const validInvoices = data.filter(invoice => invoice.id !== null && invoice.id !== "");
      validInvoices.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      setInvoices(validInvoices);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  const fetchSchools = async () => {
    try {
      const response = await fetch('http://localhost:3000/Schools');
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentInvoice({ ...currentInvoice, [name]: value });
    filterSchools(value);
  };

  const filterSchools = (searchTerm) => {
    const filtered = schools.filter(school => school.SchoolName.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredSchools(filtered);
  };

  const handleAddInvoice = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/Invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentInvoice)
      });
      const newInvoice = await response.json();
      setInvoices([...invoices, newInvoice]);
      setCurrentInvoice({ id: '', schoolName: '', amountDue: '', dueDate: '' });
    } catch (error) {
      console.error('Error adding invoice:', error);
    }
  };

  const handleEditInvoice = (invoice) => {
    setIsEditing(true);
    setCurrentInvoice(invoice);
  };

  const handleUpdateInvoice = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/Invoice/${currentInvoice.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentInvoice)
      });
      const updatedInvoice = await response.json();
      setInvoices(invoices.map(inv => (inv.id === updatedInvoice.id ? updatedInvoice : inv)));
      setIsEditing(false);
      setCurrentInvoice({ id: '', schoolName: '', amountDue: '', dueDate: '' });
    } catch (error) {
      console.error('Error updating invoice:', error);
    }
  };

  const handleDeleteInvoice = async (id) => {
    try {
      await fetch(`http://localhost:3000/Invoice/${id}`, {
        method: 'DELETE'
      });
      setInvoices(invoices.filter(invoice => invoice.id !== id));
    } catch (error) {
      console.error('Error deleting invoice:', error);
    }
  };

  return (
    <div>
      <form onSubmit={isEditing ? handleUpdateInvoice : handleAddInvoice}>
        <input
          type="text"
          name="schoolName"
          placeholder="School Name"
          value={currentInvoice.schoolName}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amountDue"
          placeholder="Amount Due"
          value={currentInvoice.amountDue}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={currentInvoice.dueDate}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'} Invoice</button>
      </form>
      <ul>
        {filteredSchools.map((school, index) => (
          <li key={index}>{school.SchoolName}</li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>School Name</th>
            <th>Amount Due</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={invoice.id}>
              <td>{index + 1}</td>
              <td>{invoice.schoolName}</td>
              <td>{invoice.amountDue}</td>
              <td>{invoice.dueDate}</td>
              <td>
                <button className="edit" onClick={() => handleEditInvoice(invoice)}>Edit</button>
                <button className="delete" onClick={() => handleDeleteInvoice(invoice.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;
