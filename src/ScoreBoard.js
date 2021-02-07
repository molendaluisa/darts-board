import React from "react";
import "./ScoreBoard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ScoreBoard(props) {

  return (
    <div className="ScoreBoard">
      

      {/* top */}
    <div className="row">
      <div className="col-1"></div>
      <div className="col-7 top"></div>
      <div className="col-3 top">
        <span>Score</span>
      </div>
      <div className="col-1"></div>
    </div>



    {/* player1 */}
    <div className="row player1">
      <div className="col-1 darts-count">
        <span>{props.player1.count}</span>
      </div>
      <div className="col-7 name">
        <span>{props.player1.name}</span>
      </div>
      <div className="col-3 score">
        <span>{501 - props.player1.sum}</span>
      </div>
      <div className="col-1">
        <div className={props.player1.currentPlayer} onClick={() => props.handleNext("player1")}>
          <div className="turn"></div>
        </div>
      </div>
    </div>

    {/* player 2 */}
    <div className="row player2">
      <div className="col-1 darts-count">
        <span>{props.player2.count}</span>
      </div>
      <div className="col-7 name">
        <span>{props.player2.name}</span>
      </div>
      <div className="col-3 score">
        <span>{501 - props.player2.sum}</span>
      </div>
      <div className="col-1">
        <div className={props.player2.currentPlayer}  onClick={() => props.handleNext("player2")}>
          <div className="turn"></div>
        </div>
      </div>
    </div>



    {/* bottom */}
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10 bottom">
        <span>World Championship</span>
      </div>
      <div className="col-1"></div>
    </div>
    </div>
  )
}