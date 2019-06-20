import React, { Component } from 'react';

class Counter extends Component {
  render() {
    //console.log("props: ", this.props);
    return (
      <div>
        <span>{this.props.name}</span>
        <button onClick={() => this.handleIncrement(this.props.name, this.props.value)}>+</button>
        <button onClick={() => this.handleDecrement(this.props.name, this.props.value)}>-</button>
        <span> {this.props.value} </span>
        <br />
        <br />
      </div>
    );
  }

  handleIncrement = (name, value) => {
    let newValue = value + 1;
    this.props.handleChange(name, newValue);
  }

  handleDecrement = (name, value) => {
    let newValue = value==0 ? 0 : value -1;
    this.props.handleChange(name, newValue);
  }
}

export default Counter;
