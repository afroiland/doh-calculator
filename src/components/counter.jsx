import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0
  }
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default Counter; 