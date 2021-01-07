import React from "react";

export class NumberInput extends React.Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
        type="number"
        min={2}
        max={155}
      />
    );
  }
}