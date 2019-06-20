import React, { Component } from 'react';

const displayNames = {
  life: "Life",
  oppLife: "Opponent's Life",
  lands: "Lands",
  lifelinkPower: "Lifelink Power",
  nonLifelinkPower: "Non-Lifelink  Power",
  reclamations: "Reclamations"
}

class Counter extends Component {
  render() {
    //console.log("props: ", this.props);
    return (
      <div>
        <span>{this.getName(this.props.name) + " "}</span>
        <button onClick={() => this.handleDecrement(this.props.name, this.props.value)}>-</button>
        <button onClick={() => this.handleIncrement(this.props.name, this.props.value)}>+</button>
        <span> {this.props.value} </span>
        <br />
        <br />
      </div>
    );
  }

  getName(name) {
    console.log("name: ", name);
    console.log("displayNames.name: ", displayNames[name]);
    return displayNames[name];
  }

  handleIncrement = (name, value) => {
    let newValue = value + 1;
    this.props.handleChange(name, newValue);
  }

  handleDecrement = (name, value) => {
    let newValue = value===0 ? 0 : value -1;
    this.props.handleChange(name, newValue);
  }
}

export default Counter;
