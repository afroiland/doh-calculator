import React, { Component } from 'react';
import Counter from './counter';

class Main extends Component {
  state = {
    life: 0,
    oppLife: 0,
    lands: 0,
    lifelinkPower: 0,
    nonLifelinkPower: 0,
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
        <Counter name='life' value={this.state.life} handleChange={this.handleChange} />
        <Counter name='oppLife' value={this.state.oppLife} handleChange={this.handleChange} />
        <Counter name='lands' value={this.state.lands} handleChange={this.handleChange} />
        <Counter name='lifelinkPower' value={this.state.lifelinkPower} handleChange={this.handleChange} />
        <Counter name='nonLifelinkPower' value={this.state.nonLifelinkPower} handleChange={this.handleChange} />
        <Counter name='reclamations' value={this.state.reclamations} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default Main;