import React from "react";
import './OuterSingleArea.css';

export default function OuterSingleArea(props) {
  return (
    <div className="OuterSingleArea">
      <b className="b20 black" onClick={() => props.handleShot(20)}></b>
      <b className="b18 black" onClick={() => props.handleShot(18)}></b>
      <b className="b13 black" onClick={() => props.handleShot(13)}></b>
      <b className="b10 black" onClick={() => props.handleShot(10)}></b>
      <b className="b2 black" onClick={() => props.handleShot(2)}></b>
      <b className="b3 black" onClick={() => props.handleShot(3)}></b>
      <b className="b7 black" onClick={() => props.handleShot(7)}></b>
      <b className="b8 black" onClick={() => props.handleShot(8)}></b>
      <b className="b14 black" onClick={() => props.handleShot(14)}></b>
      <b className="b12 black" onClick={() => props.handleShot(12)}></b>
      <b className="b1 white" onClick={() => props.handleShot(1)}></b>
      <b className="b4 white" onClick={() => props.handleShot(4)}></b>
      <b className="b6 white" onClick={() => props.handleShot(6)}></b>
      <b className="b15 white" onClick={() => props.handleShot(15)}></b>
      <b className="b17 white" onClick={() => props.handleShot(17)}></b>
      <b className="b19 white" onClick={() => props.handleShot(19)}></b>
      <b className="b16 white" onClick={() => props.handleShot(16)}></b>
      <b className="b11 white" onClick={() => props.handleShot(11)}></b>
      <b className="b9 white" onClick={() => props.handleShot(9)}></b>
      <b className="b5 white" onClick={() => props.handleShot(5)}></b>
    </div>
  )
}