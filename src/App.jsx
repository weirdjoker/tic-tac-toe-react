import React from 'react';
import Game from './Game';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="App min - h- screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 ">
      <ErrorBoundary>
        <h1 className='text-4xl font-bold text-white mb-8'>Tic-Tac-Toe</h1>
        <Game />
      </ErrorBoundary>
    </div>
  );
}

export default App;


