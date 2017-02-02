export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      // ES5 way:
      // return Object.assign(
      //   {},
      //   state,
      //   {friends: state.friends.concat([action.payload])}
      //  );
      return {
        ...state,
        friends: [...state.friends, action.payload]
      }
    case "REMOVE_FRIEND":
      let indexToRemove = state.friends.findIndex( friend =>
        friend.id === action.payload );

      // ES5 way
      // let newFriends = state.friends.slice(0, indexToRemove)
      //   .concat(state.friends.slice(indexToRemove + 1));
      let newFriends = [
        ...state.friends.slice(0, indexToRemove),
        ...state.friends.slice(indexToRemove + 1)
      ]

      // ES5 way
      // return Object.assign({}, state, {friends: newFriends});
      return {...state, friends: newFriends};
    default:
      return state;

  }
}
