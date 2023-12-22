import React from "react";

function Header(props){
	
    return (
        <div className="App">
          <header className="App-header">
            <h1>BALLS</h1>
            <h2>CHOOSE GAME SETTINGS</h2>
          </header>
          <div className="beginning">
					<div className="tableSize">
						<div className="tableSizeTitle">TABLE SIZE</div>
						<div className="select">
							<select id="tableSizeSelect" onChange={props.handleTableSizeChange}>
								<option value disabled defaultValue>select</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
							</select>
						</div>
					</div>
					<div className="ballsQty">
						<div className="tableSizeTitle" >BALLS QUANTITY</div>
						<div className="select">
							<select id="ballsQtySelect" onChange={props.handleBallsQtyChange}>
								<option value="select" disabled defaultValue>select</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
					</div>
					<div className="removedBallsQty">
						<div className="removedTitle">REMOVED BALLS QUANTITY</div>
						<div className="select">
							<select id="removedQtySelect" onChange={props.handleRemovedBallsQtyChange}>
								<option value="select" disabled defaultValue>select</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
					</div>
                <div className="startGame"><button id="myButton">START GAME</button></div>
			</div>
        </div>
	);
}

export default Header;


