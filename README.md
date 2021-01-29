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
code in `/src/manageFriends.js` and `/src/managePresents.js`.

## Instructions

For this lab, you won't be able to run any code in the browser. Just run
`learn test` to check your code as you go!

1. In `managePresents.js`, write a function called `managePresents()` that takes
   in the previous state and an action as its argument. Set an default value for
   the state argument - an object with a key, `numberOfPresents`, assigned to
   `0`.

   Actions passed into this reducer will only have a _type_ attribute, so they
   would look something like this:

   ```js
   action = {
     type: "presents/increase",
   };
   ```

   If the reducer receives a `type` set to `"presents/increase"`, return a new state
   where the value of `numberOfPresents` is increased by one. Use the tests to
   guide you as you build out this reducer.

2. In `manageFriends.js`, write a function called `manageFriends` that takes in
   the previous state and an action as its argument. Here, the initial state
   should be an object with a key, `friends`, set to an empty array.

   This time, the reducer should be able to handle two actions, `"friends/add"`
   and `"friends/remove"`. When adding a friend, the action will include a
   `friend` key assigned to an object with `name`, `hometown`, and `id` keys.

   ```js
     action = {
       type: "friends/add",
       payload: {
         name: "Chrome Boi"
         homewtown: "NYC",
         id: 1
       }
     }
   ```

   When our reducer receives `"friends/add"`, it should return a new state with
   this friend object added to the `friends` array.

   When removing a friend, instead of an object, the action will include an `id` key
   with an integer. Find the friend with the matching `id` and remove them. Thought of
   in another way, the reducer is really returning a new state with an array of `friends`
   that includes everyone _except_ the removed friend.

   ```js
   action = {
     type: "friends/remove",
     payload: 1,
   };
   ```

Both reducers should be pure functions. This means that the functions cannot
change any object defined outside of the functions. It also means that given an
input, the reducers will always return the same output.

## Don't Mutate State

As the Redux documentation notes:

> In order to update values immutably, your code must make copies of existing
> objects/arrays, and then modify the copies. We can do this by hand using
> JavaScript's array / object spread operators, as well as array methods that
> return new copies of the array instead of mutating the original array.

Here's an example of creating a copy an object using the spread operator (`{...}`):

```javascript
let dog = { id: 1, name: "scooby", color: "brown", age: 4 };

let olderDog = { ...dog, age: dog.age + 1 };
```

This would translate to the same English, "Return a new object that contains all
the key-value pairs from `dog` copied over with the `age` key overwritten with a
new value".

As you're working through these tests, make sure your functions don't mutate
state!

## Resources

- [Mozilla Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Redux Docs: Object Spread Operator](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html)
- [Mozilla findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Redux Documentation](http://redux.js.org/docs/basics/Reducers.html)
