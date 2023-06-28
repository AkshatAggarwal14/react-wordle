export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <h1>You Win!</h1>
          <p className="solution green">{solution}</p>
          <p>You found the solution in {turn} guess(es)! :D</p>
          <button
            className="reset-button"
            onClick={() => window.location.reload(false)}
          >
            Reset
          </button>
        </div>
      ) : (
        <div>
          <h1>Nevermind!</h1>
          <p className="solution red">{solution}</p>
          <p>Better Luck Next Time! :D</p>
          <button
            className="reset-button"
            onClick={() => window.location.reload(false)}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
