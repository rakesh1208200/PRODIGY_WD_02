import React, { useState, useEffect } from "react";
import "../styles.css";  // Import the CSS file

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="timer">{formatTime(time)}</h1>
      <div className="buttons">
        <button onClick={() => setRunning(true)} className="start">Start</button>
        <button onClick={() => setRunning(false)} className="stop">Stop</button>
        <button onClick={() => { setTime(0); setRunning(false); }} className="reset">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
