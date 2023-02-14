import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessHistory from "../GuessHistory/GuessHistory";
import GuessForm from "../GuessForm/GuessForm";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

const getNewAnswer = () => {
  let answer = sample(WORDS);
  console.info({ answer });
  return answer;
};

/* This component should render a <form> tag, including a label and a text input.
The text input should be controlled by React state.
The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
The input should have a minimum and maximum length of 5.
When the form is submitted:
The entered value should be logged to the console (for now)
The input should be reset to an empty string. */

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [answer, setAnswer] = React.useState(() => getNewAnswer());

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guess.length < 5) {
      alert("Please enter a 5 letter word");
      return;
    }

    setGuess("");
    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <GuessHistory
        guesses={guesses}
        setGuesses={setGuesses}
        setNewAnswer={() => setAnswer(getNewAnswer())}
        answer={answer}
        setGameOver={setGameOver}
      />

      <GuessForm
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
        gameOver={gameOver}
      />
    </>
  );
}

export default Game;
