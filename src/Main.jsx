import "./App.css";
import React from "react";
import { Unit, Button } from "./components";

export class Main extends React.Component {
  render() {
    return (
      <main className="App-main">
        {this.props.entriesArr.length ? (
          <div className="sort-buttons">
          <Button onClick={this.props.onSortClick} label="Sort!" />
          <Button onClick={this.props.onNextStepClick} label="Next step" />
          </div>
        ) : null}
        <div id="fld" className="field">
          {this.props.entriesArr.map((item, index) => (
            <Unit key={index} value={item.value} color={item.color} />
          ))}
        </div>
      </main>
    );
  }
}