import { managePresents } from "../managePresents";

describe("managePresents", () => {
  let state = { numberOfPresents: 0 };

  it("returns the existing state if the action's type doesn't match a type in the reducer", () => {
    expect(managePresents(state, { type: "Random Action Type" })).toEqual(
      state
    );
  });

  it("increases the number of presents if there the action's type is 'presents/increase'", () => {
    expect(managePresents(state, { type: "presents/increase" })).toEqual({
      numberOfPresents: 1,
    });
  });

  it("adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object", () => {
    managePresents(state, { type: "presents/increase" });
    expect(state).toEqual({ numberOfPresents: 0 });
  });
});
