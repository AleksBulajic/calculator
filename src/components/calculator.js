import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleMultiple = () => {
    //? parseFloat() turn the string into a number
    const value1 = parseFloat(num1);
    const value2 = parseFloat(num2);
    //? isNaN ckecks if somethin is not a number  by puting "!" in front of the isNaN() if it is a number it will be true and if its somethign else its false
    if (!isNaN(value1) && !isNaN(value2)) {
      setResult((value1 * value2).toString());
      console.log(result);
    } else {
      setResult("Invalid input");
      console.log(result);
    }
  };

  const handleDivide = () => {
    const value1 = parseFloat(num1);
    const value2 = parseFloat(num2);

    if (!isNaN(value1) && !isNaN(value2)) {
      setResult((value1 / value2).toString());
      console.log(result);
    } else {
      setResult("Invalid input");
      console.log(result);
    }
  };
  const handleAdd = () => {
    const value1 = parseFloat(num1);
    const value2 = parseFloat(num2);

    if (!isNaN(value1) && !isNaN(value2)) {
      setResult((value1 + value2).toString());
      console.log(result);
    } else {
      setResult("Invalide input");
      console.log(result);
    }
  };
  const handleSub = () => {
    const value1 = parseFloat(num1);
    const value2 = parseFloat(num2);
    if (!isNaN(value1) && !isNaN(value2)) {
      let sub = (value1 - value2).toString();
      setResult(sub);
    } else {
      setResult("Invalide input");
    }
  };
  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  return (
    <div className="calculator">
      <form className="calculator-inpits">
        first number:{" "}
        <input
          value={num1}
          onChange={handleNum1Change}
          type="text"
          className="first-num"
        />
        Second number:{" "}
        <input
          value={num2}
          onChange={handleNum2Change}
          type="text"
          className="second-num"
        />
      </form>
      <div className="button-container">
        <button
          type="button"
          onClick={handleMultiple}
          className="multiply-button"
        >
          Multiply
        </button>
        <button onClick={handleDivide} type="button" className="divide-button">
          Divide
        </button>
        <button onClick={handleAdd} type="button" className="add-button">
          Add
        </button>
        <button onClick={handleSub} type="button" className="subtract-button">
          Subtract
        </button>
      </div>
      <p className="result">
        result: <span className="result">{result}</span>
      </p>
    </div>
  );
}

export default Calculator;
