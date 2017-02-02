import { managePresents } from '../src/reducers/managePresents';
import { manageFriends } from '../src/reducers/manageFriends';
import sinon        from 'sinon';

describe('managePresents', function() {

  let state = {numberOfPresents: 0, friends: []}

  it("returns the existing state if the action's type doesn't match a type in the reducer", function() {
    expect(managePresents(state, {type: 'Random Action Type'})).toEqual(state);
  })

  it("increases the number of presents if there the action's type is 'INCREASE'", function(){
    expect(managePresents(state, {type: "INCREASE"})).toEqual({numberOfPresents: 1});
  })

  it("adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object", function(){
    managePresents(state, {type: "INCREASE"})
    expect(state).toEqual({numberOfPresents: 0, friends: []})
  })
})

describe('manageFriends', function() {
  let state = {numberOfPresents: 0, friends: [{name: 'Avi', hometown: 'NYC', id: 100}]}

  it("returns the existing state if the action's type doesn't match a type in the reducer", function() {
    expect(manageFriends(state, {type: 'Random Action Type'})).toEqual(state);
  })

  it("adds the friend when type is 'ADD_FRIEND' and the action has a payload property with the friend", function(){
    expect(manageFriends(state, {type: "ADD_FRIEND", payload: {name: 'Joe', hometown: 'Boston', id: 101}})).toEqual({numberOfPresents: 0, friends: [{name: 'Avi', hometown: 'NYC', id: 100}, {name: 'Joe', hometown: 'Boston', id: 101}]});
  })

  it("removes the friend when action type is 'REMOVE_FRIEND' and the action has a payload property of the friend's id to be removed", function(){
    let state = {numberOfPresents: 0, friends: [{name: 'Avi', hometown: 'NYC', id: 100}, {name: 'Joe', hometown: 'Boston', id: 101}, {name: 'Steven', hometown: 'Philadephia', id: 102}]}
    expect(manageFriends(state, {type: "REMOVE_FRIEND", payload: 101})).toEqual({numberOfPresents: 0, friends: [{name: 'Avi', hometown: 'NYC', id: 100}, {name: 'Steven', hometown: 'Philadephia', id: 102}]});
  })

  it("adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object", function(){
    let state = {numberOfPresents: 0, friends: [{name: 'Avi', hometown: 'NYC', id: 100}, {name: 'Joe', hometown: 'Boston', id: 101}, {name: 'Steven', hometown: 'Philadephia', id: 102}]}
    manageFriends(state, {type: "REMOVE_FRIEND", payload: 'Joe'})
    expect(state).toEqual({numberOfPresents: 0, friends: [{name: 'Avi', hometown: 'NYC', id: 100}, {name: 'Joe', hometown: 'Boston', id: 101}, {name: 'Steven', hometown: 'Philadephia', id: 102}]})
  })
})
