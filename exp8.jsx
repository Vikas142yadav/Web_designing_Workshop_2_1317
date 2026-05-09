// App.js

import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-box">
        <h1>
          React Counter
          <br />
          Application
        </h1>

        <h2>{count}</h2>

        <div className="button-group">
          <button onClick={increment}>Increment (+)</button>

          <button onClick={decrement}>Decrement (-)</button>
        </div>

        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;


/* App.css */
//
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f4f4;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter-box {
  width: 420px;
  padding: 40px;
  background: white;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 40px;
}

h2 {
  font-size: 70px;
  margin-bottom: 35px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

button {
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 12px 22px;
  font-size: 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #0b5ed7;
}

.reset-btn {
  margin-top: 10px;
}


// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);