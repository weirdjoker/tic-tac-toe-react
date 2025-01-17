import React, { useState } from 'react';
import Board from './Board';

// Game component to manage the state and history of the game
export default function Game() {
  // State to keep track of the history of moves
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // State to keep track of the current step number
  const [stepNumber, setStepNumber] = useState(0);
  // State to keep track of which player's turn it is
  const [xIsNext, setXIsNext] = useState(true);
  // Get the current squares from the history
  const currentSquares = history[stepNumber];

  console.log("Game component rendered with state:", { history, stepNumber, xIsNext });

  // Function to handle a play (move)
  function handlePlay(nextSquares) {
    console.log("handlePlay called with nextSquares:", nextSquares);
    // Create a new history up to the current step
    const newHistory = history.slice(0, stepNumber + 1);
    // Update the history with the new squares
    setHistory([...newHistory, nextSquares]);
    // Update the step number
    setStepNumber(newHistory.length);
    // Toggle the player's turn
    setXIsNext(!xIsNext);
  }

  // Function to jump to a specific step in the history
  function jumpTo(step) {
    console.log("jumpTo called with step:", step);
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  // Function to reset the game to the initial state
  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  }

  // Map over the history to create a list of moves
  const moves = history.map((squares, move) => {
    const description = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div>
          <button onClick={resetGame}>Clear</button>
        </div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}