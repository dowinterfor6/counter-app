import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = count;
  });

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <label className="counter-container">
        Count: &nbsp;
        <div id="count">{count}</div> &nbsp;
        <button id="counter-button" onClick={handleButtonClick}>
          +
        </button>
      </label>
    </div>
  )
}

export default App;