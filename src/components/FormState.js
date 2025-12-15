// FormState.js
import React, { useState } from 'react';
import Card from './Card';

function FormState() {
  // 1. Initialize state for all form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // 2. Generic change handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Use the name attribute to update the corresponding state property
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("FormState Data:", formData);
    alert(`useState Form Submitted! Name: ${formData.fullName}`);
    
    // Note: State handling is better for validation and enabling/disabling buttons
  };

  return (
    <Card title="Section 3: Form Handling with useState (Controlled)">
      {/* Required form id="info-form" */}
      <form id="info-form" onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="full_name">Full Name:</label>
          <input 
            type="text" 
            id="full_name" 
            name="fullName" // Use 'name' to match the state property
            value={formData.fullName} // 4. Attach value to state
            onChange={handleChange} // 5. Attach change handler
            style={{ width: '100%', padding: '8px' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input 
            type="password" 
            id="password_confirmation" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit
        </button>
      </form>
    </Card>
  );
}

export default FormState;
