import React from "react";

function Score(props){

    return(
        <div>
            <div id="score">
                <span>Max score: </span>
                <span id="maxScore"></span>
                <span>{props.totalBallsRemoved} points</span>
            </div>
            <div id="score">
                <span>Current score: </span>
                <span id="result"> {props.totalBallsRemoved} </span>
                <span> points</span>
            </div>
            <div className="reset_section">
                <a href="balls.html"><button id="resetGame" className="reset_button">RESET</button></a>
            </div>
        </div>
    );
}

export default Score;