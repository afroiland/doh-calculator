import React, { Component } from 'react';

class Display extends Component {
  render() {
    console.log("this.props: ", this.props);
    let { productionCapacity, productionRecommendation, attackRecommendation } = this.props.displayValues;
    return (
      <div style={{textAlign: 'center'}}>
        {/* <p>You have {this.props.displayValues.soldiers} soldiers.</p> */}
        <p>You can make {productionCapacity} {productionCapacity === 1 ? "soldier" : "soldiers"} each turn.</p>
        <p>The calculator recommends making {productionRecommendation} {productionRecommendation === 1 ? "soldier" : "soldiers"} this 
          turn and attacking with {attackRecommendation}.</p>
      </div>
    );
  }
}
 
export default Display;