import React from "react";
import { Button } from "./components";
import { NumberInput } from "./components";

export class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Button onClick={this.props.onStartClick} label="Start" />
          <NumberInput
            placeholder="How many entries? (1-155)"
            value={this.props.entries}
            onChange={this.props.onEntriesChange}
          />
        </header>
        <hr></hr>
      </React.Fragment>
    );
  }
}
