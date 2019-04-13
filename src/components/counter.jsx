import React, { Component } from 'react';

class Counter extends Component {
  render() {
    //console.log("props: ", this.props);
    return (
      <div>
        <span>{this.props.name}</span>
        <span> {this.props.value} </span>
        <button>+</button>
        <button>-</button>
        <br />
        <br />
      </div>
    );
  }
}

export default Counter; 