
const action = {
       type: "friends/add",
       payload: {
         name: "Chrome Boi",
         homewtown: "NYC",
         id: 1
       }
     }
export function manageFriends(state = {friends: []}, action) {
  switch(action.type) {
    case "friends/add":
      return {
        friends: [...state.friends, action.payload]
      };
     case "friends/remove":
  return {
    friends: state.friends.filter((friend) => friend.id !== action.payload.id)
  };

    default:
      return state;
  }
}
