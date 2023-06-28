import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    // Game ends!
    if (isCorrect) {
      console.log('Congrats, you win!');
      // We dont take input anymore
      window.removeEventListener('keyup', handleKeyup);
    }

    if (turn > 5) {
      console.log('Unlucky! Out of guesses.');
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup); // cleanup function to unattach
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
}
