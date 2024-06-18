import React from 'react';
import useTicTacToe from '../Hooks/UseTicTacToe';

const TicTacToe = () => {
  const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();
  
  return (
    <div className="game">
      <div className="status">{getStatusMessage()}</div>
      <button className='reset-btn' onClick={resetGame}>Reset Game</button>

      <div className="board">
        {
          board.map((value, index) => {
            return (
              <button className='cell' key={index} onClick={() => handleClick(index)}>
                {value}
              </button>
            )
          })
        }
      </div>
    </div>
  );
};

export default TicTacToe;
