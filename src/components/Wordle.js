import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup); // cleanup function to unattach
  }, [handleKeyup]);

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
    </div>
  );
}
