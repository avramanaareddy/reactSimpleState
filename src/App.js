import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = { counter: 0 };

  incrementCounter = () => this.setState({ counter: this.state.counter + 5 });
  decrementCounter = () => this.setState({ counter: this.state.counter - 5 });
  render() {
    return (
      <div className="App">
        <h1> Simple react state</h1>
        <h2>Counter Value=={this.state.counter}</h2>
        <button name="count" onClick={this.incrementCounter}>
          Increment
        </button>{" "}
        &nbsp;
        <button name="count" onClick={this.decrementCounter}>
          Decrement
        </button>
      </div>
    );
  }
}
