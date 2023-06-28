export default function Keypad({ usedKeys }) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

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
