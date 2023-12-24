import React, {useState} from "react";
import Cell from "./Cell";

function Board(props){

    const rows = props.boardLength;
  
    const [selectedValue, setSelectedValue] = useState('');

    function  handleSelect(event) {
    setSelectedValue(event.target.value);
  }
  
  const cells = Array.from({ length: rows ** 2 }, (_, index) => (
    <Cell
      key={index}
      selectedValue={selectedValue}
      handleSelect={handleSelect}
    />
  ));

  return (
    <div className="container" style={{width: props.totalWidth}}>
      {/* <p>boardLength: {props.boardLength}</p>
      <p>randomBallsCount: {props.randomBallsCount}</p>
      <p>removedBallsCount: {props.removedBallsCount}</p> */}

      {cells}
    </div>
  );
}

export default Board;