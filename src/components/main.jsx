import React, { Component } from 'react';
import Counter from './counter';
import { calc } from '../functions/calc';
import Display from './result-display';

class Main extends Component {
  state = {
    life: 20,
    oppLife: 20,
    lands: 0,
    soldiers: 0,
    oppBlockers: 0,
    oppPower: 0,
    oppEvasivePower: 0,
    reclamations: 0
  }

  handleChange = (name, value) => {
    this.setState({ [name] : value });
  };

  reset = () => {
    this.setState({
      life: 20,
      oppLife: 20,
      lands: 0,
      soldiers: 0,
      oppBlockers: 0,
      oppPower: 0,
      oppEvasivePower: 0,
      reclamations: 0
    })
  }

  render() {
    return (
      <div style={{marginTop: 35}}>
        <div style={{display: 'flex'}}>
          <div style={{flexGrow: 1}}></div>
          <div style={{textAlign: 'right', marginRight: 150}}>
            <Counter name='life' value={this.state.life} handleChange={this.handleChange} />
            <Counter name='oppLife' value={this.state.oppLife} handleChange={this.handleChange} />
            <Counter name='lands' value={this.state.lands} handleChange={this.handleChange} />
            <Counter name='reclamations' value={this.state.reclamations} handleChange={this.handleChange} />
            <Counter name='soldiers' value={this.state.soldiers} handleChange={this.handleChange} />
            <Counter name='oppBlockers' value={this.state.oppBlockers} handleChange={this.handleChange} />
            <Counter name='oppPower' value={this.state.oppPower} handleChange={this.handleChange} />
            <Counter name='oppEvasivePower' value={this.state.oppEvasivePower} handleChange={this.handleChange} />
          </div>
          <div style={{flexGrow: 1}}></div>
        </div>
        <div>
          <p style={{textAlign: 'center'}}>
            <button onClick={() => this.reset()}>Reset All</button>
          </p>
          <Display displayValues = {calc(this.state)}/>
        </div>
      </div>
    );
  }
}

export default Main;