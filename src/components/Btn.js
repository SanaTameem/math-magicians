import React from 'react';
import PropTypes from 'prop-types';
import './Btn.css';

function Btn({ text }) {
  const buttonClass = text === '0' ? 'btn zero-btn' : 'btn';
  const colorful = ['/', 'x', '+', '-', '='].includes(text) ? 'colorful' : '';
  return (
    <button type="button" className={`${buttonClass} ${colorful}`}>{text}</button>
  );
}
Btn.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Btn;
