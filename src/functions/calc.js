export function calc(state) {
  //console.log("state: ", state);

  let { life, oppLife, lands, reclamations, soldiers, oppBlockers, oppPower, oppEvasivePower } = state;

  let results = {
    productionCapacity: Math.floor((lands / 4) * (1 + reclamations)),
    productionRecommendation: 0,
    attackRecommendation: "nothing"
  };

  let tempLife = life;
  let tempOppLife = oppLife;
  let tempSoldiers = soldiers;
  let tempOppPower = oppPower;
  let tempOppEvasivePower = oppEvasivePower;

  for (let i = 0; i < 50; i++) {
    tempOppLife -= (tempSoldiers - oppBlockers) < 0 ? 0 : (tempSoldiers - oppBlockers);
    if (tempOppLife < 1) {
      console.log("we win race in " + (i + 1) + " turns");
      break;
    }
    tempLife += tempSoldiers;
    tempSoldiers -= oppBlockers;
    if (tempSoldiers < 0) {
      tempSoldiers = 0;
    }
    tempSoldiers += results.productionCapacity;
    tempLife -= (tempOppPower + tempOppEvasivePower);

    if (tempLife < 1) {
      console.log("opp wins race in " + i + " turns");
      break;
    }

    
    
  }

  if (oppLife <= soldiers - oppBlockers) {
    results.attackRecommendation = "everything";
  }

  return results;
}
