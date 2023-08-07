import React, { useState } from "react";
import './counter.css'

function Counter() {
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    const add = result + 1;
    setResult(add);
  };

  const handleSubtraction = () => {
    const sub = result - 1;
    setResult(sub);
  };

  return (
    <div className="counter-container">
      <div className="buttons-counter">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
      </div>
      <p className="result-counter">
        Clicks: <span className="span-counter">{result}</span>
      </p>
    </div>
  );
}

export default Counter;
