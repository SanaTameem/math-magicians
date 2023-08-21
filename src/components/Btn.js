import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Btn.css';

function Btn({ text, handleInput }) {
  const buttonClass = text === '0' ? 'btn zero-btn' : 'btn';
  const colorful = ['÷', 'x', '+', '-', '='].includes(text) ? 'colorful' : '';
  return (
    <button type="button" className={`${buttonClass} ${colorful}`} onClick={handleInput}>{text}</button>
  );
}
Btn.propTypes = {
  text: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};
export default Btn;
