import React from "react";
import './Board.css';
import OuterRing from "./OuterRing";
import DoubleArea from "./DoubleArea";
import TripleArea from "./TripleArea";
import OuterSingleArea from "./OuterSingleArea";
import InnerSingleArea from "./InnerSingleArea";
import Lines from "./Lines";
import BullsArea from "./BullsArea";

function App() {
  return (
    <div className="Board">
      <OuterRing />
      <DoubleArea />
      <OuterSingleArea />
      <TripleArea />
      <InnerSingleArea />
      <BullsArea />
      <Lines />
    </div>
  );
}

export default App;
