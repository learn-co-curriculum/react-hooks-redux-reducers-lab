const initialState = { numberOfPresents: 0 };

let action = {
    type: "presents/increase",
  };
export function managePresents(state = initialState, action) {

   switch(action.type) {
    case "presents/increase":
      return {numberOfPresents:  initialState.numberOfPresents + 1}
      default:
        return state
   }
   
}
