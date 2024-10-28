// src/App.jsx
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function App() {
  const [difficulty, setDifficulty] = useState("medium");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-bold text-neutral-700 mb-10 text-center">
        Trivia Game
      </h1>
      <div className="flex flex-col space-y-4 items-center">
        <label className="text-neutral-900 text-lg font-semibold mb-4">
          Select Difficulty:
          <div className="relative mt-2">
            <select className="block appearance-none w-full border border-gray-300 bg-white text-gray-700 py-3 px-4 pr-10 rounded-md font-medium outline-none">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
              <IoChevronDownOutline
                className="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </div>
          </div>
        </label>
        <Link
          to={`/game?difficulty=${difficulty}`}
          className="bg-gray-200 text-neutral-900 transition-all duration-300 px-6 py-3 rounded-lg font-medium transform hover:scale-105"
        >
          Start Game
        </Link>
        <Link
          to="/leaderboard"
          className="bg-gray-200 text-neutral-900 transition-all duration-300 px-6 py-3 rounded-lg font-medium transform hover:scale-105"
        >
          Leaderboard
        </Link>
      </div>
    </div>
  );
}

export default App;
