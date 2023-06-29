import Key from './Key';

export default function KeyRow({ row, usedKeys, handleKeyup }) {
  return (
    <div className="keyrow">
      {row.map((letter, index) => {
        const color = usedKeys[letter.key];
        return (
          <Key
            key={index}
            color={color}
            value={letter.key}
            symbol={letter.symbol}
            onClick={() => handleKeyup(letter)}
          />
        );
      })}
    </div>
  );
}
