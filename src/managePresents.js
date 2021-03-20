// export function managePresents(state = { numberOfPresents: 0 }, action) {
//   if (action.type === "presents/increase") {
//     return { numberOfPresents: state.numberOfPresents + 1 };
//   }
//   return;
// }

export function managePresents(state = { numberOfPresents: 0 }, action) {
  switch (action.type) {
    case "presents/increase":
      return { numberOfPresents: state.numberOfPresents + 1 };
    default:
      return state;
  }
}
