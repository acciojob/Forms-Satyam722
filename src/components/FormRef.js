// FormRef.js
import React, { useRef } from 'react';
import Card from './Card';

function FormRef() {
  // 1. Create a ref for each input field
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // 2. Handler function to read refs on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Access current values using the .current.value property of the refs
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
    
    console.log("FormRef Data:", formData);
    alert(`useRef Form Submitted! Name: ${formData.fullName}`);
    
    // Note: Refs are not ideal for input validation or instant feedback
  };

  return (
    <Card title="Section 2: Form Handling with useRef">
      {/* Required form id="info-form" */}
      <form id="info-form" onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="full_name">Full Name:</label>
          {/* 3. Attach the ref to the input element */}
          <input type="text" id="full_name" name="full_name" ref={fullNameRef} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" ref={emailRef} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" ref={passwordRef} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input type="password" id="password_confirmation" name="password_confirmation" ref={confirmPasswordRef} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit
        </button>
      </form>
    </Card>
  );
}

export default FormRef;
