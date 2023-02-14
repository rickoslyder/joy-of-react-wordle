import React from "react";

function GuessForm({ handleSubmit, guess, setGuess, gameOver }) {
  return (
    <form onSubmit={handleSubmit} className="game-input-wrapper">
      <label className="game-input" htmlFor="game-input">
        Enter your guess:
      </label>
      <br />
      <input
        value={guess}
        className="game-input"
        id="game-input"
        type="text"
        disabled={gameOver}
        minLength={5}
        maxLength={5}
        onChange={(event) => setGuess(event.target.value.trim().toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
