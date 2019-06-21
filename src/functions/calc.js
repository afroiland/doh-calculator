export function calc(state) {
  console.log("state: ", state);
  let response = '';

  let productionCapacity = (state.lands / 4) * (1 + state.reclamations);
  console.log("productionCapacity: ", productionCapacity);

  let turnsToKillOpp = state.oppLife / (state.soldiers + productionCapacity);
  console.log("turnsToKillOpp: ", turnsToKillOpp);


  if (state.oppLife <= (state.soldiers - state.oppBlockers)) {
    response = "You should probably attack.";
  // } else {
  //   if ( ) {

  //   }

  } else {
    response = "Use your best judgment."
  }



  return response;
}
