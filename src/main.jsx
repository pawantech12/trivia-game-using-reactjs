// src/main.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Main = () => {
  const [highScores, setHighScores] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/game",
      element: <Game setHighScores={setHighScores} />,
    },
    {
      path: "/leaderboard",
      element: <Leaderboard highScores={highScores} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />

    <ToastContainer
      position="bottom-right" // Set position to bottom-right
      autoClose={3000} // Automatically close after 3 seconds
      limit={1}
      hideProgressBar={false} // Show progress bar
      newestOnTop={false} // Display newest on top
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>
);
