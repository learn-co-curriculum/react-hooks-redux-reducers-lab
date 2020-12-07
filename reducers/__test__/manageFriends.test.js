import { manageFriends } from "../manageFriends";

describe("manageFriends", () => {
  let state = {
    friends: [
      {
        name: "Avi",
        hometown: "NYC",
        id: 100,
      },
    ],
  };

  it("returns the existing state if the action's type doesn't match a type in the reducer", () => {
    expect(manageFriends(state, { type: "Random Action Type" })).toEqual(state);
  });

  it("adds the friend when type is 'friends/add' and the action has a payload property with a name, hometown and id", () => {
    expect(
      manageFriends(state, {
        type: "friends/add",
        payload: {
          name: "Joe",
          hometown: "Boston",
          id: 101,
        },
      })
    ).toEqual({
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
    let state = {
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
        {
          name: "Steven",
          hometown: "Philadephia",
          id: 102,
        },
      ],
    };

    expect(
      manageFriends(state, {
        type: "friends/remove",
        payload: 101,
      })
    ).toEqual({
      friends: [
        {
          name: "Avi",
          hometown: "NYC",
          id: 100,
        },
        {
          name: "Steven",
          hometown: "Philadephia",
          id: 102,
        },
      ],
    });
  });

  it("adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object", () => {
    let state = {
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
        {
          name: "Steven",
          hometown: "Philadephia",
          id: 102,
        },
      ],
    };
    manageFriends(state, { type: "friends/remove", id: 101 });
    expect(state).toEqual({
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
        {
          name: "Steven",
          hometown: "Philadephia",
          id: 102,
        },
      ],
    });
  });
});
