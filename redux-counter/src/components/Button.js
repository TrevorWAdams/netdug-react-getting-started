import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  border: '2px solid #000',
  borderRadius: 3,
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: 30,
  padding: '3px 10px',
  margin: 10,
  width: 50
};

const Button = ({ children, onClick }) =>
  <button style={buttonStyles} onClick={onClick}>
    {children}
  </button>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
