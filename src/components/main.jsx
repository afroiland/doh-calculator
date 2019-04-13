import React, { Component } from 'react';
import Counter from './counter';

class Main extends Component {
  state = {
    life: 0,
    oppLife: 0,
    lands: 0,
    nonLifelinkPower: 0,
    lifelinkPower: 0
  }
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Main;