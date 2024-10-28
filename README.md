# Quiz Game - ReactJS

Welcome to the **Quiz Game** repository! This project is a dynamic, interactive quiz game built with ReactJS, providing users with challenging questions fetched from the Open Trivia Database API. With features like score tracking, a timer, and toast notifications, this game offers an engaging experience for players while allowing them to test their knowledge.


## 🚀 Demo

Check out the live demo here: [Demo Link](https://trivia-game-using-reactjs.vercel.app/)

## 📌 Features

- **Dynamic Questions**: Fetches questions from the [Open Trivia Database API](https://opentdb.com/), based on the user-selected difficulty level.
- **Timer Functionality**: Each question is time-bound, adding a challenging layer to the game.
- **Score Saving & Leaderboard**: Stores the player’s high scores in local storage, sorted in descending order, and prevents saving duplicate scores.
- **User Feedback with Toasts**: Provides toast notifications for actions like saving scores and handling errors.
- **Responsive Design**: Built using Tailwind CSS to ensure a seamless experience across all device sizes.
- **Back Navigation**: Easily return to the previous screen with a single click.


## 🛠️ Tech Stack

- **Frontend**: ReactJS, React Router, Tailwind CSS
- **Utilities**: Axios (for API calls), React-Toastify (for toast notifications)
- **API**: Open Trivia Database API


## 📂 Project Structure

```
/src
├── components
│   ├── Game.js          # Core game component
│   ├── Question.js      # Renders questions and answer choices
│   ├── Timer.js         # Timer functionality for each question
│   ├── Leaderboard.js   # Displays high scores
│
├── main.jsx             # Router and Toast configuration
└── App.js               # Main app file
```


## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pawantech12/trivia-game-using-reactjs.git
   cd trivia-game-using-reactjs
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:

   ```bash
   npm run dev
   ```

4. **Access the game** at `http://localhost:5173` in your browser.


## 📖 Usage

1. **Select Difficulty**: Users can choose the difficulty level for the quiz.
2. **Answer Questions**: Each question has multiple choices. Select the correct answer within the time limit.
3. **Save Score**: At the end of the game, save your score to see if you’ve made it to the leaderboard. Duplicate scores are restricted from being saved.
4. **Leaderboard**: View the top 5 high scores, saved locally.

## 📈 Future Enhancements

- **Improved Question Types**: Include different question formats (e.g., true/false).
- **Customizable Timer**: Allow users to set custom time limits for each question.
- **Backend Integration**: Move the leaderboard to a backend database for shared score tracking across sessions.
- **Enhanced UI**: Animations and design enhancements for a more engaging experience.


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/YourFeature`).
3. Commit your changes.
4. Push to the branch.
5. Create a pull request.

## 📄 License

This project is licensed under the MIT License.

## 👋 Contact

Feel free to reach out if you have any questions or feedback!

- **LinkedIn**: [Linkedin](https://www.linkedin.com/in/pawan-kumavat-11b105297/)
- **Email**: pawankumavat042@gmail.com

Enjoy playing the quiz game, and happy coding!
