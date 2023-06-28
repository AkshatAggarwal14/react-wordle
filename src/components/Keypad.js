export default function Keypad({ usedKeys, handleKeyup }) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const handleButtonClick = (value) => {
    handleKeyup({ key: value });
  };

  return (
    <div className="keypad">
      {letters.map((letter) => {
        const color = usedKeys[letter];
        return (
          <button
            key={letter}
            className={color}
            value={letter}
            onClick={() => handleButtonClick(letter)}
          >
            {letter}
          </button>
        );
      })}
      <button
        key="Enter"
        value="Enter"
        onClick={() => handleButtonClick('Enter')}
      >
        ↵
      </button>
      <button
        key="Backspace"
        value="Backspace"
        onClick={() => handleButtonClick('Backspace')}
      >
        ⌫
      </button>
    </div>
  );
}
