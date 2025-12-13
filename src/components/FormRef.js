import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const fullNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Full Name: ${fullNameRef.current.value}
Email: ${emailRef.current.value}
Password: ${passwordRef.current.value}
Confirm Password: ${confirmPasswordRef.current.value}
    `);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <h3>Form Using useRef</h3>

        <input id="full_name" ref={fullNameRef} type="text" placeholder="Full Name" /><br /><br />
        <input id="email" ref={emailRef} type="email" placeholder="Email" /><br /><br />
        <input id="password" ref={passwordRef} type="password" placeholder="Password" /><br /><br />
        <input id="password_confirmation" ref={confirmPasswordRef} type="password" placeholder="Confirm Password" /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
