export function calc(state) {
  console.log("state: ", state);

  let { life, oppLife, lands, reclamations, soldiers, oppBlockers, oppPower, oppEvasivePower } = state;

  let results = {
    productionCapacity: Math.floor((lands / 4) * (1 + reclamations)),
    productionRecommendation: 0,
    attackRecommendation: "nothing"
  };
  
  // loop through X turns and crunch nums
  for (let i = 0; i < 50; i++) {
    if (oppLife <= soldiers - oppBlockers) {
      results.attackRecommendation = "everything";
      break;
    } else {
      results.attackRecommendation = "???";
    }
  }

  // TODO: insert some logic for displaying singular or plural of soldier; could do this in result-display.jsx
  return results;
}
