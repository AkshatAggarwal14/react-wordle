import { useState } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]); // guess => array
  const [history, setHistory] = useState([]); // history => string {for no duplication}
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess => [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: 'grey' };
    });

    // find green letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        l.color = 'green';
        solutionArray[i] = null; // for easy yellow color handling
      }
    });

    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
        l.color = 'yellow';
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };

  // add guess, check correct, update turn
  const addGuess = () => {};

  // handle keyup events, submit guess on "enter"
  // destructure event here!
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      // only add if turn < 5
      if (turn > 5) {
        console.log('you used all your guesses');
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log('you have already tried that word');
        return;
      }
      // check word is 5 chars long
      if (currentGuess.length !== 5) {
        console.log('word must be 5 chars long');
        return;
      }

      const formatted = formatGuess();
      console.log(formatted);
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
