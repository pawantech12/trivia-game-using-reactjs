// src/components/Game.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Question from "./Question";
import Timer from "./Timer";
import { MdKeyboardBackspace } from "react-icons/md";
import { toast } from "react-toastify";

const Game = ({ setHighScores }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [scoreSaved, setScoreSaved] = useState(false); // New state variable to track score save status
  const location = useLocation();
  const difficulty = new URLSearchParams(location.search).get("difficulty");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${difficulty}`
        );
        setQuestions(response.data.results);
      } catch (error) {
        console.log("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [difficulty]);

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameOver(true);
    }
  }, [timeLeft, isGameOver]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30); // Reset timer for the next question
    } else {
      setIsGameOver(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(30);
    setIsGameOver(false);
    setScoreSaved(false); // Reset the score saved flag on restart
  };

  const handleSaveScore = () => {
    if (scoreSaved) {
      toast.info("Score already saved!"); // Notify if the score was already saved
      return;
    }
    const newScores = JSON.parse(localStorage.getItem("highScores")) || [];
    newScores.push(score);
    localStorage.setItem("highScores", JSON.stringify(newScores));
    setHighScores(newScores.sort((a, b) => b - a).slice(0, 5));
    setScoreSaved(true); // Mark score as saved
    toast.success("Score saved!");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto h-screen px-5">
      <button
        onClick={() => window.history.back()}
        className="mb-5 bg-gray-200 px-4 py-2 rounded-md self-start font-medium hover:bg-gray-300 transition-all duration-300 flex items-center gap-2"
      >
        <MdKeyboardBackspace />
        Back
      </button>
      {isGameOver ? (
        <div className="w-[300px] text-center p-5 bg-white border border-gray-200 rounded-md">
          <h2 className="text-2xl font-bold text-neutral-700">Game Over!</h2>
          <p className="text-xl mt-2">Your Score: {score}</p>
          <div className="mt-4 space-x-4">
            <button
              onClick={handleSaveScore}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-medium transition-all duration-300"
            >
              Save Score
            </button>
            <button
              onClick={handleRestart}
              className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition-all duration-300"
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        <>
          <Timer timeLeft={timeLeft} />
          {questions.length > 0 && (
            <Question
              question={questions[currentQuestionIndex]}
              handleAnswer={handleAnswer}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Game;
