import React, { Component } from "react";
import "./Confirm.css";
//import modelInstance from "../data/DisplayModel";

class Confirm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="confirmText">Your submission was successful!
        <div className="confirmText2">The text that will be sumbmitted is:
          <div className="confirmText3">{localStorage.getItem("message")}</div>
        </div>
      </div>
    );
  }
}

export default Confirm;
