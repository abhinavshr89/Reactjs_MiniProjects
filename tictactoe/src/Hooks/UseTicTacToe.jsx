import { useState } from "react";

// Helper function to create the initial board
const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);
  const [winningCells, setWinningCells] = useState([]);
  
  // Winning combinations for the Tic-Tac-Toe game
  const WINNING_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  // Function to calculate the winner
  const calculateWinner = (board) => {
    for (let pattern of WINNING_PATTERNS) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return 'X' or 'O'
      }
    }
    return null; // No winner
  };

  // Handle click on a cell
  const handleClick = (index) => {
    // Check if the game is already won or the cell is already clicked
    if (calculateWinner(board) || board[index]) return;

    // Update the board with the current player's move
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  // Reset the game to its initial state
  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  // Get the status message to display
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every(cell => cell !== null)) {
      return "It's a draw!";
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return { board, handleClick, calculateWinner, resetGame, getStatusMessage };
};

export default useTicTacToe;
