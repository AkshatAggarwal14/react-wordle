import { useState } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]); // guess => array (initially 6 undefined values)
  const [history, setHistory] = useState([]); // history => string {for no duplication}
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); // {a: 'green'}...

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
  const addGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };

      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.color === 'green') {
          newKeys[letter.key] = 'green';
          return;
        }

        // dont make it yellow if already green
        if (letter.color === 'yellow' && currentColor !== 'green') {
          newKeys[letter.key] = 'yellow';
          return;
        }

        if (
          letter.color === 'grey' &&
          currentColor !== 'green' &&
          currentColor !== 'yellow'
        ) {
          newKeys[letter.key] = 'grey';
          return;
        }
      });

      return newKeys;
    });

    // reset currentGuess once this turn is over!
    setCurrentGuess('');
  };

  // handle keyup events, submit guess on "enter"
  const handleKeyup = ({ key }) => {
    // destructure event here!

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

      const formattedGuess = formatGuess();
      addGuess(formattedGuess);
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

  return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys };
};

export default useWordle;
