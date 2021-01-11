import React from "react";

export class Unit extends React.Component {
  render() {
    return (
      <div style={{ height: `${this.props.value}px`, backgroundColor: this.props.color }} className="unit"></div>
    );
  }
}
