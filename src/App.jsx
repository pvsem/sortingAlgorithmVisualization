import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import * as sortMethods from "./utils";

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export class App extends React.Component {
  state = {
    entries: '',
    entriesArr: [],
    sortMethod: "bubbleSort",
  };

  handleEntriesChange = (e) => {
	const entries = e.target.value ? Number(e.target.value) : ''
    this.setState({ entries });
  };

  handleStartClick = (e) => {
	e.preventDefault();
	if(this.state.entries < 2 || this.state.entries > 155){
		alert('Value should be in 2-155 range!')
		return;
	}
    const entriesArr = Array.from({ length: this.state.entries }).map(() => ({
      value: randomInteger(1, 800),
      isActive: false,
    }));
	this.setState({ entriesArr });
  };

  handleSortClick = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      entriesArr: sortMethods[state.sortMethod](state.entriesArr.concat()),
    }));
  };

  handleSortChange = (e) => {
	  this.setState({sortMethod: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <Header
		  sortMethod={this.state.sortMethod}
		  onSortMethodChange={this.handleSortChange}
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
