import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0
  }
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default Counter; 