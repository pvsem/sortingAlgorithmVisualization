import React from "react";

export class Select extends React.Component {
  render() {
    return (
      <select value={this.props.value} onChange={this.props.onChange}>
        <option value="bubbleSort">Bubble sort</option>
        <option value="insertionSort">Insertion sort</option>
        <option value="selectionSort">Selection sort</option>
        <option value="heapSort">Heap sort</option>
        <option value="mergeSort">Merge sort</option>
        <option value="quickSort">Quick sort</option>
      </select>
    );
  }
}
