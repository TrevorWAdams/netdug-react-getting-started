import React from 'react';

const buttonStyles = {
  border: "1px solid #eee",
  borderRadius: 6,
  color: "#FFFFFF",
  backgroundColor: "#008000",
  cursor: "pointer",
  fontSize: 15,
  padding: "3px 10px",
  margin: 10,
  width: 200
};

const ComponentStyledInline = () => {
  return (
    <div style={buttonStyles}>
      I am styled inline
    </div>
  );
};

export default ComponentStyledInline;