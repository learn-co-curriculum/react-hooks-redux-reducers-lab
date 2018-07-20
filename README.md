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

This function will be our reducer, and its job is to return to us a new state.

## Instructions

1. In `managePresents.js`, write a function called `managePresents` that takes
in an action and the previous state as its argument. Actions passed into this
reducer only have a _type_ attribute, so they would look something like this:

```js
action = {
  type: "INCREASE"
}
```

2. In `manageFriends.js` write a function called `manageFriends` that takes in an
action and the previous state as its argument.  Here, our action will also have
an additional attribute called `friend`, sometimes an action contains multiple
attributes for producing a new state.

```js
action = {
  type: "ADD_FRIEND",
  friend: "Chrome Boi"
}
```

3. Both reducers should be pure functions.  This means that the functions cannot
change any object defined outside of the functions.  It also means that given an
input, the reducers will always return the same output.

## A Note on the Object Spread Operator

![future](https://media.giphy.com/media/l0CRCmMBYQbL7dCmI/giphy.gif)

**Note that the object spread operator is incorporated into standard JavaScript,
and is instead proposed for future versions of JS.  We can only use it here
because of configurations set up in our .babelrc file.  Although it isn't
fully adopted yet, if you want to write some futuristic code, feel free. It is
good to be familiar with it as it can make reducers a look a lot cleaner!**


As the Redux documentation notes:

>Since one of the core tenets of Redux is to never mutate state, you'll often
find yourself using `Object.assign()` to create copies of objects with new or
updated values.

If you remember, `Object.assign` is a function that takes any number of
arguments. It works by copying over from left to right the properties in each
object passed as an argument.  Let's go over an example:

```javascript
let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
// if scooby had a birthday, we could write:
let olderDog = Object.assign({}, dog, {age: dog.age + 1})
```

Translating this to English would be something like, "Start with a new empty
object, copy over everything from the original `dog`, then overwrite the `age`
property with a new value."

>While effective, using Object.assign() can quickly make simple reducers
difficult to read given its rather verbose syntax.

>An alternative approach is to use the object spread syntax proposed for the
next versions of JavaScript which lets you use the spread (...) operator to copy
enumerable properties from one object to another in a more succinct way

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

<p class='util--hide'>View <a href='https://learn.co/lessons/redux-reducer'>Redux Reducer</a> on Learn.co and start learning to code for free.</p>
