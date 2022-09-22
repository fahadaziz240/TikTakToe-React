import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import "./components/Board.css";
import { ResetButton } from "./components/ResetButton";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const WIN_CON = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGame] = useState(false);
  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updateBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScore({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScore({ ...scores, xScore });
      }
    }
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CON.length; i++) {
      const [x, y, z] = WIN_CON[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGame(true);
        console.log(board[x]);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGame(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard scores={scores} Xplaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
