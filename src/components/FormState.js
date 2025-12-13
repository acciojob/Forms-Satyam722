import React, { useState } from "react";
import Card from "./Card";

const FormState = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Full Name: ${fullName}
Email: ${email}
Password: ${password}
Confirm Password: ${confirmPassword}
    `);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <h3>Form Using useState</h3>

        <input id="full_name" value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Full Name" /><br /><br />

        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" /><br /><br />

        <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /><br /><br />

        <input id="password_confirmation" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
