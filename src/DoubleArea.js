import React from "react";
import './DoubleArea.css';

export default function DoubleArea(props) {
  return (
    <div className="DoubleArea">
      <b className="b20 red" onClick={() => props.handleShot(40)}></b>
      <b className="b1 green" onClick={() => props.handleShot(2)}></b>
      <b className="b18 red" onClick={() => props.handleShot(36)}></b>
      <b className="b4 green" onClick={() => props.handleShot(8)}></b>
      <b className="b13 red" onClick={() => props.handleShot(26)}></b>
      <b className="b6 green" onClick={() => props.handleShot(12)}></b>
      <b className="b10 red" onClick={() => props.handleShot(20)}></b>
      <b className="b15 green" onClick={() => props.handleShot(30)}></b>
      <b className="b2 red" onClick={() => props.handleShot(4)}></b>
      <b className="b17 green" onClick={() => props.handleShot(34)}></b>
      <b className="b3 red" onClick={() => props.handleShot(6)}></b>
      <b className="b19 green" onClick={() => props.handleShot(38)}></b>
      <b className="b7 red" onClick={() => props.handleShot(14)}></b>
      <b className="b16 green" onClick={() => props.handleShot(32)}></b>
      <b className="b8 red" onClick={() => props.handleShot(16)}></b>
      <b className="b11 green" onClick={() => props.handleShot(22)}></b>
      <b className="b14 red" onClick={() => props.handleShot(28)}></b>
      <b className="b9 green" onClick={() => props.handleShot(18)}></b>
      <b className="b12 red" onClick={() => props.handleShot(24)}></b>
      <b className="b5 green" onClick={() => props.handleShot(10)}></b>
    </div>
  )
}