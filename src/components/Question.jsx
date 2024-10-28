// src/components/Question.js
import React from "react";

const Question = ({ question, handleAnswer }) => {
  const {
    question: questionText,
    correct_answer,
    incorrect_answers,
  } = question;
  const options = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="mt-5 p-5 border rounded-lg shadow-lg bg-white">
      <h2
        className="text-xl mb-3 font-semibold"
        dangerouslySetInnerHTML={{ __html: questionText }}
      ></h2>
      <div className="flex flex-col">
        {options.map((option, index) => (
          <button
            key={index}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 mb-2 rounded transition-all duration-300 transform hover:scale-105"
            onClick={() => handleAnswer(option === correct_answer)}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
