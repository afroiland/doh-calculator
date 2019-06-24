export function calc(state) {
  let { life, oppLife, lands, reclamations, soldiers, oppBlockers, oppPower, oppEvasivePower } = state;

  let results = {
    productionCapacity: Math.floor((lands / 4) * (1 + reclamations)),
    raceResult: "either player might win"
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
      results.raceResult = "we will win";
      break;
    }

    tempLife += tempSoldiers;
    tempSoldiers -= oppBlockers;

    tempSoldiers < 0 && (tempSoldiers = 0);

    tempSoldiers += results.productionCapacity;
    tempLife -= (tempOppPower + tempOppEvasivePower);

    if (tempLife < 1) {
      console.log("opp wins race in " + i + " turns");
      results.raceResult = "the opponent will win";
      break;
    }    
  }

  if (oppLife <= soldiers - oppBlockers) {
    results.raceResult = "we will win"
  }

  return results;
}
