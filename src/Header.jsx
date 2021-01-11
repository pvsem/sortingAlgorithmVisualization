import React from "react";
import { Button, NumberInput, Select } from "./components";

export class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <label>
            {" "}
            Pick sorting method -&gt;
            <Select
              value={this.props.sortMethod}
              onChange={this.props.onSortMethodChange}
            />
          </label>
          <NumberInput
            placeholder="How many entries? (2-155)"
            value={this.props.entries}
            onChange={this.props.onEntriesChange}
          />
          <Button onClick={this.props.onStartClick} label="Start" />
        </header>
        <hr></hr>
      </React.Fragment>
    );
  }
}
