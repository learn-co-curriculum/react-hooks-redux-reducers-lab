# Reducers Lab

![reduce](https://media.giphy.com/media/3o7TKwxYkeW0ZvTqsU/giphy.gif)

## Objectives

1. Write a reducer.
2. The reducer should be a pure function.
3. Write a reducer that takes an action(payload).

## Overview

Each year, around the holidays especially, we forget who we need to buy presents
for. Let's write a function that will help us manage our gift recipient list. We
should be able to add a person we need to buy a present for and remove people we
no longer like (or who give us socks every year!).

In this lab, we will focus on writing two reducers to help us handle this task.
Since we're drilling down into one concept, React is not set up in this lab, nor
is there an `index.html` file. Follow the instructions below and implement your
code in `src/reducers/manageFriends.js` and `src/reducers/managePresents.js`.

## Instructions

1. In `managePresents.js`, write a function called `managePresents()` that takes
   in the previous state and an action as its argument. Set an default value for
   the state argument - an object with a key, `numberOfPresents`, assigned to
   `0`.

   Actions passed into this reducer will only have a _type_ attribute, so they
   would look something like this:

      ```js
        action = {
          type: "INCREASE"
        }
      ```

   If the reducer receives a `type` set to `"INCREASE"`, return a new state
   where the value of `numberOfPresents` is increased by one. Use the tests to
   guide you as you build out this reducer.

2. In `manageFriends.js`, write a function called `manageFriends` that takes in
   the previous state and an action as its argument.  Here, the initial state
   should be an object with a key, `friends`, set to an empty array.

   This time, the reducer should be able to handle two actions, `"ADD_FRIEND"`
   and `"REMOVE_FRIEND"`. When adding a friend, the action will include a
   `friend` key assigned to an object with `name`, `hometown`, and `id` keys.

    ```js
      action = {
        type: "ADD_FRIEND",
        friend: {
          name: "Chrome Boi"
          homewtown: "NYC",
          id: 1
        }
      }
    ```

   When our reducer receives `"ADD_FRIEND"`, it should return a new state with
   this friend object added to the `friends` array.

   When removing a friend, instead of an object, the action will include an `id` key
   with an integer. Find the friend with the matching `id` and remove them. Thought of
   in another way, the reducer is really returning a new state with an array of `friends`
   that includes everyone _except_ the removed friend.

    ```js
      action = {
        type: "REMOVE_FRIEND",
        id: 1
      }
    ```

Both reducers should be pure functions.  This means that the functions cannot
change any object defined outside of the functions.  It also means that given an
input, the reducers will always return the same output.

## Don't Mutate State

As the Redux documentation notes:

> Since one of the core tenets of Redux is to never mutate state, you'll often
find yourself using `Object.assign()` to create copies of objects with new or
updated values.

If you remember, `Object.assign()` is a function that takes any number of
arguments. It works by copying over from left to right the properties in each
object passed as an argument.  Let's go over an example:

```js
let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
// if scooby had a birthday, we could write:
let olderDog = Object.assign({}, dog, {age: dog.age + 1})
```

Translating this to English would be something like, "Start with a new empty
object, copy over everything from the original `dog`, then overwrite the `age`
property with a new value."

## A Note on the Object Spread Operator

![future](https://media.giphy.com/media/l0CRCmMBYQbL7dCmI/giphy.gif)

While effective, using `Object.assign()` can quickly make simple reducers
difficult to read given its rather verbose syntax.

An alternative approach is to use the object spread syntax, which lets you use
the spread (...) operator to copy enumerable properties from one object to
another in a more succinct way

```javascript
let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};

let olderDog = {...dog, age: dog.age + 1}
```

This would translate to the same English, "Return a new object that contains all
the key-value pairs from `dog` copied over with the `age` key overwritten with a
new value".

## Resources

- [Mozilla Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Redux Docs: Object Spread Operator](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html)
- [Mozilla findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Redux Documentation](http://redux.js.org/docs/basics/Reducers.html)
