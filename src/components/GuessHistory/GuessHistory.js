import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import GameResult from "../GameResult/GameResult";

function GuessHistory({ guesses, setGuesses, answer, setNewAnswer }) {
  const emptyGuessesGrid = Array(NUM_OF_GUESSES_ALLOWED).fill("");

  const [guessesGrid, setGuessesGrid] = React.useState(emptyGuessesGrid);

  const validatedGuesses = guesses.map((guess) => {
    return checkGuess(guess, answer);
  });

  const updateGuessesGrid = () => {
    const latestValidatedGuesses = validatedGuesses.slice(
      -NUM_OF_GUESSES_ALLOWED
    );
    const newGuessesGrid = [...guessesGrid];
    latestValidatedGuesses.forEach((validatedGuess, index) => {
      newGuessesGrid[index] = validatedGuess;
    });
    setGuessesGrid(newGuessesGrid);
  };

  const restartGame = () => {
    setGuesses([]);
    setGuessesGrid(emptyGuessesGrid);
    setNewAnswer();
  };

  React.useEffect(() => {
    updateGuessesGrid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guesses]);

  return (
    <>
      <div className="guess-results">
        <h2>Guesses</h2>
        {guessesGrid.map((guess, index) => {
          return (
            <p key={index} className="guess">
              <Guess guess={guess} />
            </p>
          );
        })}

        {guesses.length > 0 && (
          <button onClick={restartGame}>Restart game</button>
        )}

        <GameResult guesses={guesses} answer={answer} />
      </div>
    </>
  );
}

export default GuessHistory;
