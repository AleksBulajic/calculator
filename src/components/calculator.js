import React ,{useState} from "react";
import "./calculator.css";

function Calculator() {
 

    
  return (
    <div className="calculator container">
      <form className="calculator-inpits">
        first number: <input type="text"></input>
        Second number: <input type="text"></input>
      </form>
      <div className="button-container">
      <button type="submit" className="multiply-button" >Multiply</button>
      <button type="submit" className="divide-button" >Divide</button>
      <button type="submit" className="add-button" >Add</button>
      <button type="submit" className="substract-button" >Subtract</button>
      </div>
      <p className="result">
        result:
          <span className="result"></span>
      </p>
    </div>
  );
}

export default Calculator;
