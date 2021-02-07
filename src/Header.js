import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1>Darts Game</h1>
      <button className="start-btn" onClick={props.start}>Start</button>
    </div>
  )
}