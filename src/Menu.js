import React, { useState } from "react";
import './Menu.css';
import Modal from "./Modal";

export default function Menu() {
  const [wrapper, setWrapper] = useState(true);

  function handleWrapper(event) {
    event.preventDefault();
    setWrapper(false);
  }

  return (
    <div className="Menu">
      {wrapper ? <div className="overlay" onClick={handleWrapper}></div> : null}
      {wrapper ? <Modal /> : null}
    </div >
  );
}