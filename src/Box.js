import React, { Component } from "react";
import Colors from "./Colors";

import "./Box.css";

class Box extends Component {
  static defaultProps = {
    numBoxes: 30,
    colors: [
      "#c1f6e7",
      "#ffcbcb",
      "#bb7171",
      "#4e3440",
      "#fff78f",
      "#22b9ca",
      "#eadca6",
      "#e4007c",
      "#89a3b2",
      "#801336",
      "#bfcd7e",
      "#6c5ce7",
      "#76a21e"
    ]
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Colors colors={this.props.colors} />
    ));
    return <div className="BoxContainer">{boxes} </div>;
  }
}
export default Box;
