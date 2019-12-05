import React, { Component } from 'react';

const displayNames = {
  life: "Life",
  oppLife: "Opponent's Life",
  lands: "Lands",
  soldiers: "Soldiers",
  oppBlockers: "Opponent's Blockers",
  oppPower: "Total Opponent Power",
  oppEvasivePower: "Opponent Evasive Power",
  reclamations: "Reclamations"
}

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{marginRight: 10}}>{displayNames[this.props.name]}</span>
        <button onClick={() => this.handleButtonClick(this.props.name, this.props.value, 'decrementBy1')}>-1</button>
        <button onClick={() => this.handleButtonClick(this.props.name, this.props.value, 'decrementBy5')}>-5</button>
        <button onClick={() => this.handleButtonClick(this.props.name, this.props.value, 'incrementBy5')}>+5</button>
        <button onClick={() => this.handleButtonClick(this.props.name, this.props.value, 'incrementBy1')}>+1</button>
        <span style={{display: 'inline-block', width: 30, textAlign: 'right'}}>{this.props.value} </span>
        <br />
        <br />
      </div>
    );
  }

  handleButtonClick = (name, value, typeOfChange) => {
    let newValue;
    switch (typeOfChange) {
      case 'decrementBy1':
        newValue = value===0 ? 0 : value -1;
        this.props.handleChange(name, newValue);
        break;
      case 'decrementBy5':
        newValue = value<=5 ? 0 : value -5;
        this.props.handleChange(name, newValue);
        break;
      case 'incrementBy5':
        newValue = value + 5;
        this.props.handleChange(name, newValue);
        break;
      case 'incrementBy1':
        newValue = value + 1;
        this.props.handleChange(name, newValue);
        break;
      default:
    }
  }
}

export default Counter;
