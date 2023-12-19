import React, {useState} from "react";
import '../css/App.css';
import Header from "./Header";
import Board from "./Board";


function App() {  

const [boardLength, setBoardLength] = useState(5);
const [randomBallsCount, setRandomBallsCount] = useState(3);
const [totalBallsRemoved, setTotalBallsRemoved] = useState(0);
const [removedBallsCount, setRemovedBallsCount] = useState(3);

const handleTableSizeChange = (event) => {
  setBoardLength(parseInt(event.target.value, 10));
};

const handleBallsQtyChange = (event) => {
  setRandomBallsCount(parseInt(event.target.value, 10));
};

const handleRemovedBallsQtyChange = (event) => {
  setRemovedBallsCount(parseInt(event.target.value, 10));
};

  return <div>
            <Header
                handleTableSizeChange={handleTableSizeChange}
                handleBallsQtyChange={handleBallsQtyChange}
                handleRemovedBallsQtyChange={handleRemovedBallsQtyChange}
            />

            <Board 
              randomBallsCount={randomBallsCount}
              totalBallsRemoved={totalBallsRemoved}
              boardLength={boardLength}
              removedBallsCount={removedBallsCount}
            />
        </div>
}

export default App;