import { manageFriends } from "../manageFriends";

describe("manageFriends", () => {
  let state;

  beforeEach(() => {
    state = {
      friends: [
        {
          name: "Avi",
          hometown: "NYC",
          id: 100,
        },
      ],
    };
  });

  it("returns the existing state if the action's type doesn't match a type in the reducer", () => {
    const action = { type: "Random Action Type" };

    const newState = manageFriends(state, action);

    expect(newState).toEqual({
      friends: [
        {
          name: "Avi",
          hometown: "NYC",
          id: 100,
        },
      ],
    });
  });

  it("adds the friend when type is 'friends/add' and the action has a payload property with a name, hometown and id", () => {
    const action = {
      type: "friends/add",
      payload: {
        name: "Joe",
        hometown: "Boston",
        id: 101,
      },
    };

    const newState = manageFriends(state, action);

    expect(newState).toEqual({
      friends: [
        {
          name: "Avi",
          hometown: "NYC",
          id: 100,
        },
        {
          name: "Joe",
          hometown: "Boston",
          id: 101,
        },
      ],
    });
  });

  it("removes the friend when action type is 'friends/remove' and the action has a property of the friends id to be removed", () => {
    const action = {
      type: "friends/remove",
      payload: { id: 100,
      }
    };

    const newState = manageFriends(state, action);

    expect(newState).toEqual({
      friends: [],
    });
  });

  it("adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object", () => {
    const action = {
      type: "friends/add",
      payload: {
        name: "Joe",
        hometown: "Boston",
        id: 101,
      },
    };

    const newState = manageFriends(state, action);

    expect(newState).not.toBe(state);
  });
});
