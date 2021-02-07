import React from "react";
import './TripleArea.css';

export default function TripleArea(props) {
  return (
    <div className="TripleArea">
      <b className="b20 red" onClick={() => props.handleShot(60)}></b>
      <b className="b1 green" onClick={() => props.handleShot(3)}></b>
      <b className="b18 red" onClick={() => props.handleShot(54)}></b>
      <b className="b4 green" onClick={() => props.handleShot(12)}></b>
      <b className="b13 red" onClick={() => props.handleShot(39)}></b>
      <b className="b6 green" onClick={() => props.handleShot(18)}></b>
      <b className="b10 red" onClick={() => props.handleShot(30)}></b>
      <b className="b15 green" onClick={() => props.handleShot(45)}></b>
      <b className="b2 red" onClick={() => props.handleShot(8)}></b>
      <b className="b17 green" onClick={() => props.handleShot(51)}></b>
      <b className="b3 red" onClick={() => props.handleShot(9)}></b>
      <b className="b19 green" onClick={() => props.handleShot(57)}></b>
      <b className="b7 red" onClick={() => props.handleShot(21)}></b>
      <b className="b16 green" onClick={() => props.handleShot(48)}></b>
      <b className="b8 red" onClick={() => props.handleShot(24)}></b>
      <b className="b11 green" onClick={() => props.handleShot(33)}></b>
      <b className="b14 red" onClick={() => props.handleShot(42)}></b>
      <b className="b9 green" onClick={() => props.handleShot(27)}></b>
      <b className="b12 red" onClick={() => props.handleShot(36)}></b>
      <b className="b5 green" onClick={() => props.handleShot(15)}></b>
    </div>
  )
}