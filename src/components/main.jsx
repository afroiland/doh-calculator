import React, { Component } from 'react';
import Counter from './counter';

class Main extends Component {
  state = {
    Life: 0,
    oppLife: 0,
    lands: 0,
    nonLifelinkPower: 0,
    lifelinkPower: 0,
    reclamations: 0
  }

  handleChange = (name, value) => {
    // console.log("name: ", name);
    // console.log("value: ", value);
    this.setState({ [name] : value });
  };

  render() {
    return (
      <div>
        <Counter name='Life' value={this.state.Life} handleChange={this.handleChange} />
        <Counter name='Opponent Life' value={this.state.oppLife} handleChange={this.handleChange} />
        <Counter name='Lands' value={this.state.lands} handleChange={this.handleChange} />
        <Counter name='Lifelink Power' value={this.state.lifelinkPower} handleChange={this.handleChange} />
        <Counter name='Non-Lifelink Power' value={this.state.nonLifelinkPower} handleChange={this.handleChange} />
        <Counter name='Reclamations' value={this.state.reclamations} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default Main;