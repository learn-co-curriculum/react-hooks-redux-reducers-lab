import { managePresents } from "../managePresents";

describe("managePresents", () => {
  let state;

  beforeEach(() => {
    state = { numberOfPresents: 0 };
  });

  it("returns the existing state if the action's type doesn't match a type in the reducer", () => {
    const action = { type: "Random Action Type" };

    const newState = managePresents(state, action);

    expect(newState).toEqual({ numberOfPresents: 0 });
  });

  it("increases the number of presents if there the action's type is 'presents/increase'", () => {
    const action = { type: "presents/increase" };

    const newState = managePresents(state, action);

    expect(newState).toEqual({ numberOfPresents: 1 });
  });

  it("adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object", () => {
    const action = { type: "presents/increase" };

    const newState = managePresents(state, action);

    expect(newState).not.toBe(state);
  });
});
