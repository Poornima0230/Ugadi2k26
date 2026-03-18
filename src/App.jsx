import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [start, setStarted] = useState(false);

  const message = `> Initializing Ugadi Protocol...\n> Loading Happiness... |||||||100%\n> Installing success... ||||| 100%\n> Removing negativity... |||||||100%\n\n> Dear ${
    name || "Friend"
  },\n> This is your fresh start.\n> New dreams unlocked.\n> New opportunities detected.\n\n> Status: You are going to shine this year ✨\n\n> Happy Ugadi 🌸`;

  useEffect(() => {
    if (!start) return;

    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;

      if (i > message.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [start, message]);

  return (
    <div className="container">
      {!start ? (
        <div className="terminal">
          <h1>Ugadi 2k26 Terminal</h1>
          <input
            type="text"
            placeholder="Enter Your Sweet Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-box"
          />

          <button onClick={() => setStarted(true)} className="button">
            Run Wish
          </button>
        </div>
      ) : (
        <div className="inside-container">
          <pre>{text}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
