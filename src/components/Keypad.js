import { useState } from 'react';

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(
    'abcdefghijklmnopqrstuvwxyz'.split('')
  );

  return (
    <div className="keypad">
      {letters.map((letter) => {
        const color = usedKeys[letter];
        return (
          <div key={letter} className={color}>
            {letter}
          </div>
        );
      })}
    </div>
  );
}
