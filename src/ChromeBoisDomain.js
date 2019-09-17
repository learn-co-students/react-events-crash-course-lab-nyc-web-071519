import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = event => {
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  };

  handleKeyDown = event => {
    switch (event.key) {
      case "a":
        resize("+");
      case "s":
        resize("-");
      default:
        break;
    }
  };

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={() => {
          toggleCycling();
        }}
        onKeyDown={this.handleKeyDown}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    );
  }
}
