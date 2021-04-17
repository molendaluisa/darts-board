import React, { useState } from "react";
import SelectPlayers from "./SelectPlayers";
import './ClassicType.css';

export default function ClassicType() {
  const [selectPlayers, setSelectPlayers] = useState(false);

  return (
    <div className="ClassicType">
      {selectPlayers ? null :
        <div>
          <h1>Choose a max score</h1>
          <div className="modal-container">
            <div className="bubble" onClick={() => setSelectPlayers(true)}>
              <h2>301</h2>
            </div>
            <div className="bubble" onClick={() => setSelectPlayers(true)}>
              <h2>501</h2>
            </div>
            <div className="bubble" onClick={() => setSelectPlayers(true)}>
              <h2>701</h2>
            </div>
            <div className="bubble" onClick={() => setSelectPlayers(true)}>
              <h2>901</h2>
            </div>
          </div>
        </div>
      }
      {selectPlayers ? <SelectPlayers /> : null}
    </div>
  )
}