import React from "react";
import "./Average.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Average(props) {
  
  return (
    <div className="Average">
      <div className="row">
        <div className="col avg-num">
          <span>{props.player1.avg}</span>
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