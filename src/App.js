import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('words')) {
      const dataList = localStorage.getItem('words').split(' ');
      const randomSolution =
        dataList[Math.floor(Math.random() * dataList.length)];
      setSolution(randomSolution);
    } else {
      fetch(
        'https://raw.githubusercontent.com/techtribeyt/Wordle/main/wordle_answers.txt'
      )
        .then((response) => response.text())
        .then((data) => data.split('\n'))
        .then((dataList) => {
          const randomSolution =
            dataList[Math.floor(Math.random() * dataList.length)];
          setSolution(randomSolution);
          localStorage.setItem('words', dataList.join(' '));
        });
    }
  }, []);

  return (
    <div>
      <h1>React Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
