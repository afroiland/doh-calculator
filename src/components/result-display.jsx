import React, { Component } from 'react';

class Display extends Component {
  render() {
    console.log("this.props: ", this.props);
    return (
      <div style={{textAlign: 'center'}}>
        {/* <p>You have {this.props.displayValues.soldiers} soldiers.</p> */}
        <p>You can make {this.props.displayValues.productionCapacity} soldiers each turn.</p>
        <p>The calculator recommends making {this.props.displayValues.productionRecommendation} soldiers 
          this turn and attacking with {this.props.displayValues.attackRecommendation}.</p>
      </div>
    );
  }
}
 
export default Display;