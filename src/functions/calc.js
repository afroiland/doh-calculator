export function calc(state) {
  console.log("state: ", state);

  let response = '';
  if (state.oppLife <= (state.soldiers - state.oppBlockers)) {
    response = "You should probably attack.";
  } else{
    response = "Use your best judgment."
  }



  return response;
}