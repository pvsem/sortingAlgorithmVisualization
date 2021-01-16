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
    entries: "",
    entriesArr: [],
    sortMethod: "bubbleSort",
  };

  handleEntriesChange = (e) => {
    const entries = e.target.value ? Number(e.target.value) : "";
    this.setState({ entries });
  };

  handleStartClick = (e) => {
    e.preventDefault();
    if (this.state.entries < 2 || this.state.entries > 155) {
      alert("Value should be in 2-155 range!");
      return;
    }
    const entriesArr = Array.from({ length: this.state.entries }).map(() => ({
      value: randomInteger(1, 800),
      color: "#0088cc",
    }));
    if (this.state.sortMethod === "quickSort") {
      this.generator = entriesArr;
    } else {
      this.generator = sortMethods[this.state.sortMethod](entriesArr);
    }
    this.setState({ entriesArr });
  };

  handleSortClick = (e) => {
    e.preventDefault();
    const { entriesArr, sortMethod } = this.state;
	const [lastArrFromGenerator] = Array.from(this.generator).slice(-1);
	console.log(lastArrFromGenerator)
    if (sortMethod === "quickSort") {
      this.generator = sortMethods[this.state.sortMethod](
        entriesArr,
        0,
        entriesArr.length - 1
      );
      this.setState({
        entriesArr: this.generator.map((item) => ({
          ...item,
          color: "green",
        })),
      });
    } else {
      if (!Array.isArray(this.generator)) {
        if (lastArrFromGenerator) {
          if (entriesArr) {
            this.setState({
              //if sort is clicked after next step take last value (arr) from generator
              entriesArr: lastArrFromGenerator.map((item) => ({
                ...item,
                color: "green",
              })),
            });
          }
        }
      } else {
        this.setState({
          entriesArr: this.generator.map((item) => ({
            ...item,
            color: "green",
          })),
        });
      }
    }
  };

  handleSortChange = (e) => {
    this.setState({ sortMethod: e.target.value });
  };

  handleNextStepClick = (e) => {
    e.preventDefault();
    const { value: entriesArr, done } = this.generator.next();
    if (entriesArr) {
      this.setState({
        entriesArr: done
          ? entriesArr.map((item) => ({
              ...item,
              color: "green",
            }))
          : entriesArr,
      });
    }
  };

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
          onNextStepClick={this.handleNextStepClick}
        />
        <Footer />
      </div>
    );
  }
}
