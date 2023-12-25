import React, { useState, useEffect } from "react";
import '../css/App.css';
import Header from "./Header";
import Board from "./Board";
import Score from "./Score";

function App() {

  useEffect(() => {
    if (window.innerWidth >= 1366) {
      setCellWidth(53);
    } else if (window.innerWidth >= 768) {
      setCellWidth(53);
    } else {
      setCellWidth(53);
    }
  }, []);

  const [boardLength, setBoardLength] = useState(5);
  const [randomBallsCount, setRandomBallsCount] = useState(3);
  const [totalBallsRemoved, setTotalBallsRemoved] = useState(0);
  const [removedBallsCount, setRemovedBallsCount] = useState(3);
  const [cellWidth, setCellWidth] = useState(53);
  const [gameStarted, setGameStarted] = useState(false);
  const [newBLength, setNewBLength] = useState('');
  const [newRndmBCount, setewRndmBCount] = useState('');
  const [newRemovedBalls, setNewRemovedBalls] = useState('');

  const totalWidth = boardLength * cellWidth;
  
  const handleSize = (event) => {
    setNewBLength(parseInt(event.target.value, 10));
  };
  
  const handleQty = (event) => {
    setewRndmBCount(parseInt(event.target.value, 10));
    alert(setNewRemovedBalls)
  };
  
  const handleRemQty = (event) => {
    setNewRemovedBalls(parseInt(event.target.value, 10));
  };
  
  const startGame = () => {   
    setBoardLength(newBLength);
    setRandomBallsCount(newRndmBCount);
    setRemovedBallsCount(newRemovedBalls);
    console.log("Start Game with:", newBLength, newRndmBCount, newRemovedBalls);
    setGameStarted(true);
  };

  return (
    <div>
      <Header
        boardLength={boardLength}
        handleSize={handleSize}
        handleQty={handleQty}
        handleRemQty={handleRemQty}
        startGame={startGame}
      />
      <Score totalBallsRemoved={totalBallsRemoved} />
      <Board
        key={`${boardLength}-${randomBallsCount}-${removedBallsCount}`}
        boardLength={boardLength}
        totalWidth={totalWidth}
        randomBallsCount={randomBallsCount}
        removedBallsCount={removedBallsCount}
      />
    </div>
  );
}

export default App;
