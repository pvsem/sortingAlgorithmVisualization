import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import {bubbleSort} from './utils'

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export class App extends React.Component {
  state = {
    entries: null,
    entriesArr: [],
  };

  handleEntriesChange = (e) => {
    this.setState({ entries: Number(e.target.value) });
  };

  handleStartClick = (e) => {
    e.preventDefault();
    const entriesArr = Array.from({ length: this.state.entries }).map(() => ({
      value: randomInteger(1, 800),
      isActive: false,
    }));
    this.setState({ entriesArr });
  };

  handleSortClick = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      entriesArr: state.entriesArr.concat().sort((a, b) => a.value - b.value),
    }));
  };

  render() {
    return (
      <div className="App">
        <Header
          entries={this.state.entries}
          onEntriesChange={this.handleEntriesChange}
          onStartClick={this.handleStartClick}
        />
        <Main
          entriesArr={this.state.entriesArr}
          onSortClick={this.handleSortClick}
        />
        <Footer />
      </div>
    );
  }
}
