import React from "react";
import './BullsArea.css';

export default function BullsArea(props) {
  return (
    <div className="BullsArea">
      <div className="bull-ring" onClick={() => props.handleShot(25)}></div>
      <div className="bulls-eye" onClick={() => props.handleShot(50)}></div>
    </div>
  )
}