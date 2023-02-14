import React from "react";

function GameResult({ guesses, answer }) {
  const latestGuess = guesses[guesses.length - 1];

  if (latestGuess === answer) {
    return (
      <div className="happy banner">
        <p>
          <b>Congratulations!</b> Got it in <b>{guesses.length} guesses</b>.
        </p>
      </div>
    );
  } else if (guesses.length === 6) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <b>{answer}</b>.
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default GameResult;
