import { convertForDisplay } from "./convertForDisplay";

export function calc(state) {
  console.log("state: ", state);
  let numbersToCrunch = {
    soldiers: 0,
    productionCapacity: 0,
    productionRecommendation: 0,
    attackRecommendation: 0
  };

  let productionCapacity = (state.lands / 4) * (1 + state.reclamations);
  console.log("productionCapacity: ", productionCapacity);

  let turnsToKillOpp = state.oppLife / (state.soldiers + productionCapacity);
  console.log("turnsToKillOpp: ", turnsToKillOpp);

  //let turnsForOppToKillUs = state.life / (state.oppEvasivePower + ())


  // loop through X turns and crunch nums




  if (state.oppLife <= (state.soldiers - state.oppBlockers)) {
    numbersToCrunch.attackRecommendation = state.soldiers;
  // } else {
  //   if ( ) {

  //   }

  } else {
    numbersToCrunch.attackRecommendation = 0;
  }



  return convertForDisplay(numbersToCrunch);
}
