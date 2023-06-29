const letters = [
  'qwertyuiop'.split(''),
  'asdfghjkl'.split(''),
  '⌫zxcvbnm↵'.split(''),
];

const letterNames = letters.map((letterRow) => {
  return letterRow.map((letter) => {
    let letterName = null;
    switch (letter) {
      case '↵': {
        letterName = 'Enter';
        break;
      }
      case '⌫': {
        letterName = 'Backspace';
        break;
      }
      default: {
        letterName = letter;
      }
    }
    return { key: letterName, symbol: letter };
  });
});

export default letterNames;
