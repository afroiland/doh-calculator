import React, { Component } from 'react';
import Counter from './counter';

class Main extends Component {
  state = {
    life: 0,
    oppLife: 0,
    lands: 0,
    nonLifelinkPower: 0,
    lifelinkPower: 0,
    reclamations: 0
  }
  render() {
    return (
      <div>
        <Counter name = 'life' value = {this.state.life} />
        <Counter name = 'oppLife' value = {this.state.oppLife} />
        <Counter name = 'lands' value = {this.state.lands} />
        <Counter name = 'nonLifelinkPower' value = {this.state.nonLifelinkPower} />
        <Counter name = 'lifelinkPower' value = {this.state.lifelinkPower} />
        <Counter name = 'reclamations' value = {this.state.reclamations} />
      </div>
    );
  }
}

export default Main;