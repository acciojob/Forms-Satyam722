import React from "react";
import Card from "./Card";

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <h3>Form Layout</h3>

        <input id="full_name" type="text" placeholder="Full Name" /><br /><br />
        <input id="email" type="email" placeholder="Email" /><br /><br />
        <input id="password" type="password" placeholder="Password" /><br /><br />
        <input id="password_confirmation" type="password" placeholder="Confirm Password" /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
