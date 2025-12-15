// Card.js
import React from 'react';

/**
 * A simple wrapper component to style and structure the form content.
 * @param {object} props - Component props.
 * @param {ReactNode} props.children - The content to be wrapped.
 * @param {string} props.title - The title for the card.
 */
const Card = ({ children, title }) => {
  return (
    <div 
      className="card" 
      style={{ 
        padding: '20px', 
        margin: '20px auto', 
        maxWidth: '400px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' 
      }}
    >
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Card;
