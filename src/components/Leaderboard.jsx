// src/components/Leaderboard.jsx
import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

const Leaderboard = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem("highScores")) || [];
    setHighScores(scores.sort((a, b) => b - a).slice(0, 5));
  }, []);

  return (
    <div className=" w-full max-w-lg mx-auto flex flex-col justify-center h-screen">
      <button
        onClick={() => window.history.back()}
        className="mb-5 bg-gray-200 px-4 py-2 rounded-md self-start font-medium hover:bg-gray-300 transition-all duration-300 flex items-center gap-2"
      >
        <MdKeyboardBackspace />
        Back
      </button>
      <div className=" p-5 bg-white rounded-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-3 text-neutral-700">
          Leaderboard
        </h2>
        <ul className="mt-3">
          {highScores.length > 0 ? (
            highScores.map((score, index) => (
              <li
                key={index}
                className="border-b py-2 flex justify-between hover:bg-gray-100 px-4 cursor-pointer"
              >
                <span className="font-semibold text-neutral-700">
                  Rank {index + 1}:
                </span>
                <span className="text-neutral-700 text-lg font-medium">
                  {score}
                </span>
              </li>
            ))
          ) : (
            <li className="text-center">No scores yet!</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
