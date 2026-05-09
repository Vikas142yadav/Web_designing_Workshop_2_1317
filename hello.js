import React, { useState } from "react";
import ReactDOM from "react-dom/client";

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
    <div style={styles.container}>
      <div style={styles.counterBox}>
        <h1 style={styles.heading}>
          React Counter
          <br />
          Application
        </h1>

        <h2 style={styles.count}>{count}</h2>

        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={increment}>
            Increment (+)
          </button>

          <button style={styles.button} onClick={decrement}>
            Decrement (-)
          </button>
        </div>

        <button style={styles.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

// CSS Styles
const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial",
  },

  counterBox: {
    width: "420px",
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "40px",
  },

  count: {
    fontSize: "70px",
    marginBottom: "35px",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },

  button: {
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    padding: "12px 22px",
    fontSize: "20px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

// Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);