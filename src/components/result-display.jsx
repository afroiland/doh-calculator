import React, { Component } from 'react';

class Display extends Component {
  render() {
    let { productionCapacity, raceResult } = this.props.displayValues;
    return (
      <div style={{textAlign: 'center'}}>
        <p>We can make {productionCapacity} {productionCapacity === 1 ? "soldier" : "soldiers"} each turn.</p>
        <p>Under current conditions, {raceResult} a race.</p>
        {raceResult === "we will win" && <p>Let's make soldiers and attack.</p>}
        {raceResult === "the opponent will win" && <p>Let's leave our soldiers back to block.</p>}
      </div>
    );
  }
}
 
export default Display;