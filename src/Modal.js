import React, { useState } from "react";
import ClassicType from "./ClassicType";
import SelectPlayers from "./SelectPlayers";
import './Modal.css';

export default function Modal() {
  const [classic, setClassic] = useState(false);
  const [selectPlayers, setSelectPlayers] = useState(false);

  return (
    <div className="Modal">
      <div className="modal-wrapper">
        {(classic || selectPlayers) ? null :
          <div><h1>Choose a Game</h1>
            <div className="modal-container">
              <div className="card classic" onClick={() => setClassic(true)}>
                <h2>Classic</h2>
              </div>
              <div className="card around" onClick={() => setSelectPlayers(true)}>
                <h2>Around the Board</h2>
              </div>
              <div className="card random" onClick={() => setSelectPlayers(true)}>
                <h2>Random Shoot</h2>
              </div>
            </div>
          </div>
        }
        {classic ? <ClassicType selectPlayers={selectPlayers} setSelectlayers={setSelectPlayers} /> : null}
        {selectPlayers ? <SelectPlayers /> : null}
      </div>
    </div >
  );
}