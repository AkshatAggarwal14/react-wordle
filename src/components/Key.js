export default function Key({ symbol, letterName, color, onClick }) {
  return (
    <button className={color} value={letterName} onClick={onClick}>
      {symbol}
    </button>
  );
}
