import React from "react";
import "./Throw.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Throw(props) {


  return (
    <div className="Throw">
      <div className="row">
        <div className="col-9">
          <div className="row top">
            <div className="col">
              <span>#1</span>
            </div>
            <div className="col">
              <span>#2</span>
            </div>
            <div className="col">
              <span>#3</span>
            </div>
          </div>
          <div className="row values">
            <div className="col">
              <span>{props.dart1}</span>
            </div>
            <div className="col">
              <span>{props.dart2}</span>
            </div>
            <div className="col">
              <span>{props.dart3}</span>
            </div>
          </div>
        </div>
        <div className="col-3 sum">
          <span>{props.dart1 + props.dart2 + props.dart3}</span>
        </div>
      </div>
    </div>
  )
}