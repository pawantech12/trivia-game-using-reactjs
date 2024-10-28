// src/components/Timer.js
import React from "react";

const Timer = ({ timeLeft }) => {
  return (
    <div className="text-lg font-semibold bg-white p-3 rounded-lg shadow-md">
      Time Left: <span className="text-red-500">{timeLeft}</span> seconds
    </div>
  );
};

export default Timer;
