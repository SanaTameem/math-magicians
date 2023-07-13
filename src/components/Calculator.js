import React from 'react';
import Btn from './Btn';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <input className="input" type="number" />
      <div className="button-row">
        <Btn text="AC" />
        <Btn text="+/-" />
        <Btn text="%" />
        <Btn text="/" />
      </div>
      <div className="button-row">
        <Btn text="7" />
        <Btn text="8" />
        <Btn text="9" />
        <Btn text="x" />
      </div>
      <div className="button-row">
        <Btn text="4" />
        <Btn text="5" />
        <Btn text="6" />
        <Btn text="-" />
      </div>
      <div className="button-row">
        <Btn text="1" />
        <Btn text="2" />
        <Btn text="3" />
        <Btn text="+" />
      </div>
      <div className="button-row">
        <Btn text="0" />
        <Btn text="." />
        <Btn text="=" />
      </div>
    </div>
  );
}

export default Calculator;
