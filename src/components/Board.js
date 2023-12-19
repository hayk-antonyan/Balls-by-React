import React, {useState} from "react";
import Cell from "./Cell";


function Board(props){
    const rows = props.boardLength;
    const [selectedValue, setSelectedValue] = useState('');

    function  handleSelect(event) {
    setSelectedValue(event.target.value);
  }
    return ( 
        <div className="container">
          <p>boardLength: {props.boardLength}</p>
          <p>randomBallsCount: {props.randomBallsCount}</p>
          {/* <p>totalBallsRemoved: {props.totalBallsRemoved} </p> */}
          <p>removedBallsCount: {props.removedBallsCount}</p>

          <Cell 
            selectedValue={selectedValue}
            handleSelect={handleSelect}
          /><Cell /><Cell /><Cell />
          <Cell /><Cell /><Cell /><Cell />
          <Cell /><Cell /><Cell /><Cell />
          <Cell /><Cell /><Cell /><Cell />
          <Cell /><Cell /><Cell /><Cell />
          <Cell /><Cell /><Cell /><Cell />
          <Cell />
      </div>
    );
}

export default Board;