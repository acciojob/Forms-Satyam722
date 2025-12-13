import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        width: "350px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "left"
      }}
    >
      {children}
    </div>
  );
};

export default Card;
