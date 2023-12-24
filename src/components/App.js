import React, {useState, useEffect} from "react";
import '../css/App.css';
import Header from "./Header";
import Board from "./Board";
import Score from "./Score";

function App() {  

const [boardLength, setBoardLength] = useState(5);
const [randomBallsCount, setRandomBallsCount] = useState(3);
const [totalBallsRemoved, setTotalBallsRemoved] = useState(0);
const [removedBallsCount, setRemovedBallsCount] = useState(3);
const [cellWidth, setCellWidth] = useState(53);
const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // Update cellWidth based on window.innerWidth
    if (window.innerWidth >= 1366) {
      setCellWidth(53); // Set a default value for larger screens
    } else if (window.innerWidth >= 768) {
      setCellWidth(53); // Adjust this value for medium-sized screens
    } else {
      setCellWidth(53); // Adjust this value for smaller screens
    }
  }, []);

  

const totalWidth = boardLength * cellWidth;

const handleTableSizeChange = (event) => {
  setBoardLength(parseInt(event.target.value, 10));
};

const handleBallsQtyChange = (event) => {
  setRandomBallsCount(parseInt(event.target.value, 10));
};

const handleRemovedBallsQtyChange = (event) => {
  setRemovedBallsCount(parseInt(event.target.value, 10));
};

const startGame = () => {
  setGameStarted(true)
};

const renderBoard = gameStarted && (
  <Board
    boardLength={boardLength}
    totalWidth={totalWidth}
    randomBallsCount={randomBallsCount}
    removedBallsCount={removedBallsCount}
  />
);

  return <div>
            <Header
              handleTableSizeChange={handleTableSizeChange}
              handleBallsQtyChange={handleBallsQtyChange}
              handleRemovedBallsQtyChange={handleRemovedBallsQtyChange}
              startGame={startGame}
            />
             <Score 
              totalBallsRemoved={totalBallsRemoved}
             />
             {renderBoard}
        </div>
}

export default App;