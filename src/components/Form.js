// Form.js
import React from 'react';
import Card from './Card';

function Form() {
  // Common form fields structure
  const formFields = (
    <>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" style={{ width: '100%', padding: '8px' }} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" style={{ width: '100%', padding: '8px' }} required />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" name="password_confirmation" style={{ width: '100%', padding: '8px' }} required />
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>
        Submit
      </button>
    </>
  );

  return (
    <Card title="Section 1: Form Layout (No Submission)">
      {/* Required form id="info-form" */}
      <form id="info-form" onSubmit={(e) => { e.preventDefault(); alert("Layout Form Submitted!"); }}>
        {formFields}
      </form>
    </Card>
  );
}

export default Form;
