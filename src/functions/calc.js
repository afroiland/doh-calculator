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

  // who wins race under current conditions?
  for (let i = 0; i < 50; i++) {
    tempOppLife -= (tempSoldiers - oppBlockers);
    tempSoldiers -= oppBlockers;
    tempLife -= (tempOppPower + tempOppEvasivePower);

    if (tempLife === 0) {
      console.log("opp wins race");
      break;
    }
    if (tempOppLife === 0) {
      console.log("we win race");
      break;
    }
  }
    



  // Might move the following conditional
  if (oppLife <= soldiers - oppBlockers) {
    results.attackRecommendation = "everything";
  }

  return results;
}
