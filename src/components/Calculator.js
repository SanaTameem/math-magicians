import React, { useState } from 'react';
import Btn from './Btn';
import './Calculator.css';
import calculate from '../logic/calculate';
import './Navbar.css';

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = state;

  const handleInput = (e) => {
    const value = e.target.textContent;
    setState(calculate(state, value));
  };
  return (
    <div className="text-calc-container">
      <h2>Let&apos;s do some Math!</h2>
      <div className="calculator">
        <div className="input">{next || total || operation || 0 }</div>
        <div className="button-row">
          <Btn text="AC" handleInput={handleInput} />
          <Btn text="+/-" handleInput={handleInput} />
          <Btn text="%" handleInput={handleInput} />
          <Btn text="÷" handleInput={handleInput} />
        </div>
        <div className="button-row">
          <Btn text="7" handleInput={handleInput} />
          <Btn text="8" handleInput={handleInput} />
          <Btn text="9" handleInput={handleInput} />
          <Btn text="x" handleInput={handleInput} />
        </div>
        <div className="button-row">
          <Btn text="4" handleInput={handleInput} />
          <Btn text="5" handleInput={handleInput} />
          <Btn text="6" handleInput={handleInput} />
          <Btn text="-" handleInput={handleInput} />
        </div>
        <div className="button-row">
          <Btn text="1" handleInput={handleInput} />
          <Btn text="2" handleInput={handleInput} />
          <Btn text="3" handleInput={handleInput} />
          <Btn text="+" handleInput={handleInput} />
        </div>
        <div className="button-row">
          <Btn text="0" handleInput={handleInput} />
          <Btn text="." handleInput={handleInput} />
          <Btn text="=" handleInput={handleInput} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
