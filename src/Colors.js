import React, { Component } from "react";

import "./Colors.css";

import { picker } from "./helper";

class Colors extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = { initialColor: picker(this.props.colors) };
    this.handleColor = this.handleColor.bind(this);
  }

  pickColor() {
    let newColor;

    do {
      newColor = picker(this.props.colors);
    } while (newColor === this.state.initialColor);
    this.setState({ initialColor: newColor });
  }

  handleColor(e) {
    this.pickColor();
  }

  render() {
    return (
      <div
        className="Colors"
        style={{ backgroundColor: this.state.initialColor }}
        onClick={this.handleColor}
      >
        <div className="Colors-text">{this.state.initialColor}</div>
      </div>
    );
  }
}

export default Colors;
