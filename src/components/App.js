// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

// Define the common link styles for clarity
const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  padding: '8px',
  border: '1px solid blue',
  borderRadius: '4px',
};

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
        <h1>Form Handling Methods</h1>

        {/* Navigation Links */}
        <nav style={{ marginBottom: '20px' }}>
          {/* Section 1: Form Layout (No submission) */}
          <Link to="/" id="form-link" style={linkStyle}>
            Section 1: Layout
          </Link>
          
          {/* Section 2: Form with useRef */}
          <Link to="/useRef" id="form-ref-link" style={linkStyle}>
            Section 2: useRef
          </Link>

          {/* Section 3: Form with useState */}
          <Link to="/useState" id="form-state-link" style={linkStyle}>
            Section 3: useState
          </Link>
        </nav>

        {/* Routing Setup */}
        <Routes>
          {/* Route for Section 1 (Form Layout) - Use exact path for root */}
          <Route path="/" element={<Form />} /> 
          
          {/* Route for Section 2 (useRef) */}
          <Route path="/useRef" element={<FormRef />} />
          
          {/* Route for Section 3 (useState) */}
          <Route path="/useState" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
