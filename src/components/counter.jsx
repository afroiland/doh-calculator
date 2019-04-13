import React, { Component } from 'react';

class Counter extends Component {
  render() {
    //console.log("props: ", this.props);
    return (
      <div>
        <span>{this.props.name}</span>
        <span> {this.props.value} </span>
        <button onClick={() => this.handleIncrement()}>+</button>
        <button onClick={() => this.handleDecrement()}>-</button>
        <br />
        <br />
      </div>
    );
  }

  handleIncrement = () => {
    console.log('increment');
  }

  handleDecrement = () => {
    console.log('decrement');
  }
}

export default Counter;
