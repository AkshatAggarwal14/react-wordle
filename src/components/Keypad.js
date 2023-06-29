import KeyRow from './KeyRow';
import letterNames from '../data/letterNames';

export default function Keypad({ usedKeys, handleKeyup }) {
  return (
    <div className="keypad">
      {letterNames.map((row, index) => {
        return (
          <KeyRow
            key={index}
            usedKeys={usedKeys}
            handleKeyup={handleKeyup}
            row={row}
          />
        );
      })}
    </div>
  );
}
