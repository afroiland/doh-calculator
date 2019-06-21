import React, { Component } from 'react';

const displayNames = {
  life: "Life",
  oppLife: "Opponent's Life",
  lands: "Lands",
  soldiers: "Soldiers",
  oppBlockers: "Opponent's Blockers",
  oppPower: "Opponent Power",
  oppEvasivePower: "Opponent Evasive Power",
  reclamations: "Reclamations"
}

class Counter extends Component {
  render() {
    //console.log("props: ", this.props);
    return (
      <div>
        <span style={{marginRight: 10}}>{this.getName(this.props.name)}</span>
        <button onClick={() => this.handleDecrement(this.props.name, this.props.value)}>-1</button>
        <button onClick={() => this.handleBigDecrement(this.props.name, this.props.value)}>-5</button>
        <button onClick={() => this.handleBigIncrement(this.props.name, this.props.value)}>+5</button>
        <button onClick={() => this.handleIncrement(this.props.name, this.props.value)}>+1</button>
        <span style={{display: 'inline-block', width: 30, textAlign: 'right'}}>{this.props.value} </span>
        <br />
        <br />
      </div>
    );
  }

  getName(name) {
    return displayNames[name];
  }

  handleBigDecrement = (name, value) => {
    let newValue = value<=5 ? 0 : value -5;
    this.props.handleChange(name, newValue);
  }

  handleDecrement = (name, value) => {
    let newValue = value===0 ? 0 : value -1;
    this.props.handleChange(name, newValue);
  }

  handleIncrement = (name, value) => {
    let newValue = value + 1;
    this.props.handleChange(name, newValue);
  }

  handleBigIncrement = (name, value) => {
    let newValue = value + 5;
    this.props.handleChange(name, newValue);
  }
}

export default Counter;
