import React from "react";
import './ClassicType.css';

export default function ClassicType() {
  return (
    <div className="ClassicType">
      <h1>Choose a max score</h1>
      <div className="modal-container">
        <div className="bubble">
          <h2>301</h2>
        </div>
        <div className="bubble">
          <h2>501</h2>
        </div>
        <div className="bubble">
          <h2>701</h2>
        </div>
        <div className="bubble">
          <h2>901</h2>
        </div>
      </div>
    </div>
  )
}