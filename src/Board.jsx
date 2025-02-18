import React from 'react';
import Square from './Square';

// Board component to render the Tic Tac Toe board
function Board({ squares, xIsNext, onPlay }) {
  // Function to handle click events on squares
  function handleClick(i) {
    console.log("Square clicked:", i);
    // If the square is already filled or there's a winner, return early
    if (squares[i] || calculateWinner(squares)) {
      console.log("Square already filled or there's a winner");
      return;
    }
    // Create a copy of the squares array
    const nextSquares = squares.slice();
    // Set the value of the clicked square based on the current player
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    console.log("Next squares:", nextSquares);
    // Call the onPlay function passed as a prop to update the game state
    onPlay(nextSquares);
  }

  // Determine the winner
  const winner = calculateWinner(squares);
  // Set the status message
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Function to calculate the winner of the game
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
