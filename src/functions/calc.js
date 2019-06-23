import { convertForDisplay } from "./convertForDisplay";

export function calc(state) {
  console.log("state: ", state);

  let results = {
    productionCapacity: Math.floor((state.lands / 4) * (1 + state.reclamations)),
    productionRecommendation: 0,
    attackRecommendation: "nothing"
  };
  
  // loop through X turns and crunch nums
  for (let i = 0; i < 50; i++) {

  }



  // numbersToCrunch.productionCapacity = (state.lands / 4) * (1 + state.reclamations);
  // console.log("numbersToCrunch.productionCapacity: ", numbersToCrunch.productionCapacity);
  
  // let turnsToKillOpp = state.oppLife / (state.soldiers + numbersToCrunch.productionCapacity);
  // console.log("turnsToKillOpp: ", turnsToKillOpp);

  //let turnsForOppToKillUs = state.life / (state.oppEvasivePower + ())  

  //return convertForDisplay(numbersToCrunch);

  return results;
}
