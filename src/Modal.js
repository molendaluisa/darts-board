import React, { useState } from "react";
import ClassicType from "./ClassicType";
import './Modal.css';

export default function Modal() {
  const [classic, setClassic] = useState(false);

  return (
    <div className="Modal">
      <div className="modal-wrapper">
        {classic ? null :

          <div><h1>Choose a Game</h1>
            <div className="modal-container">
              <div className="card classic" onClick={() => setClassic(true)}>
                <h2>Classic</h2>
              </div>
              <div className="card around">
                <h2>Around the Board</h2>
              </div>
              <div className="card random">
                <h2>Random Shoot</h2>
              </div>
            </div>
          </div>}

        {classic ? <ClassicType /> : null}
      </div>
    </div >
  );
}