import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const res = await axios.get(
      "https://jkuat-tie-bookings-backend.herokuapp.com/"
    );
    setMessage(res.data.message);
  };

  useEffect(() => {
    if (!message) {
      fetchMessage();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
