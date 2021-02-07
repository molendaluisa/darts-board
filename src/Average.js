import React from "react";
import "./Average.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Average(props) {
  let p = props.player1.avg;
  if (props.player1.currentPlayer === "turn-wrapper") {
    p = props.player2.avg;
  }
  return (
    <div className="Average">
      <div className="row">
        <div className="col avg-num">
          <span>{p}</span>
        </div>
      </div>
      <div className="row">
        <div className="col avg-label">
          <span>Average</span>
        </div>
      </div>
    </div>
  )
}