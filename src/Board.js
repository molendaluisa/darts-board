import React, { useState } from "react";
import './Board.css';
import './Modal.css';
import OuterRing from "./OuterRing";
import DoubleArea from "./DoubleArea";
import TripleArea from "./TripleArea";
import OuterSingleArea from "./OuterSingleArea";
import InnerSingleArea from "./InnerSingleArea";
import BullsArea from "./BullsArea";
import Scoreboard from "./ScoreBoard"
import Average from "./Average";
import Throw from "./Throw";
import Header from "./Header";
import Menu from "./Menu";
import Modal from "react-modal";


Modal.setAppElement('#root')

export default function Board() {
  const [modal, setModal] = useState(true);
  const [dart1, setDart1] = useState(0);
  const [dart2, setDart2] = useState(0);
  const [dart3, setDart3] = useState(0);
  const [player1, setPlayer1] = useState({
    name: "Luisa",
    count: 0,
    sum: 0,
    avg: 0,
    currentPlayer: "turn-wrapper"
  });
  const [player2, setPlayer2] = useState({
    name: "Ale",
    count: 0,
    sum: 0,
    avg: 0,
    currentPlayer: "turn-wrapper hide"
  });

  function handleShot(value) {
    if (dart1 === 0) {
      setDart1(value);
    } else if (dart2 === 0) {
      setDart2(value);
    } else {
      setDart3(value);
    }
  }

  function handleNext(currentPlayer) {
    var p = player1;
    if (currentPlayer === "player2") {
      p = player2;
    }
    let rCount = p.count + 3;
    let rSum = p.sum + dart1 + dart2 + dart3;

    if (rSum < 501) {
      let selectingObject = {
        ...p,
        count: rCount,
        sum: rSum,
        avg: Math.round(rSum / (rCount / 3)),
        currentPlayer: "turn-wrapper hide"
      }

      if (currentPlayer === "player1") {
        setPlayer1(selectingObject);
        setPlayer2({ ...player2, currentPlayer: "turn-wrapper" });
      } else {
        setPlayer2(selectingObject);
        setPlayer1({ ...player1, currentPlayer: "turn-wrapper" });
      }
    } else if (rSum === 501) {
      alert(`GAME OVER. ${p.name} is the winner`);
    } else {
      setPlayer1({ ...player1, currentPlayer: currentPlayer === "player1" ? "turn-wrapper hide" : "turn-wrapper" });
      setPlayer2({ ...player2, currentPlayer: currentPlayer === "player1" ? "turn-wrapper" : "turn-wrapper hide" });

      alert("NO SCORE");
    }
    setDart1(0);
    setDart2(0);
    setDart3(0);
  }

  function start() {
    setPlayer1({
      name: prompt("Insert Player 1"),
      count: 0,
      sum: 0,
      avg: 0,
      currentPlayer: "turn-wrapper"
    });
    setPlayer2({
      name: prompt("Insert Player 2"),
      count: 0,
      sum: 0,
      avg: 0,
      currentPlayer: "turn-wrapper hide"
    });
  }

  return (
    <div className="Board" onClick={() => setModal(false)}>
      <Header start={start} />
      <div className="middle-section">
        <div className="container">
          <OuterRing />
          <DoubleArea handleShot={handleShot} />
          <OuterSingleArea handleShot={handleShot} />
          <TripleArea handleShot={handleShot} />
          <InnerSingleArea handleShot={handleShot} />
          <BullsArea handleShot={handleShot} />
        </div>
        <div className="scores">
          <Scoreboard player1={player1} player2={player2} handleNext={handleNext} />
          <Throw dart1={dart1} dart2={dart2} dart3={dart3} />
          <Average player1={player1} player2={player2} />
        </div>
      </div>
      <Modal isOpen={modal}>
        <Menu />
      </Modal>
    </div >
  );
}

