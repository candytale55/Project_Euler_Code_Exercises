# Closure Function Examples

This repository contains two simple JavaScript examples demonstrating **closure functions** and how they can be used to maintain private state between function calls.

---

## What are Closures?

A **closure** is a function that remembers the environment in which it was created. This means it can access variables defined outside its own scope, even after the outer function has finished executing.

Closures are useful for:

- Creating private variables that cannot be accessed directly from outside.
- Maintaining state between multiple calls without using global variables.
- Building functions with persistent data, like counters or trackers.

---

## Included Examples

### 1. `createCounter.js`

This function returns a counter function starting from a given number. Each time the returned function is called, the count increments by one and returns the updated value.

Example usage:

```js
const counter = createCounter(5);
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
````

### 2. `trackTotal.js`

This function returns a function that keeps track of a running total, starting from an initial value. Each time the returned function is called with a number, it adds that number to the total and returns the new sum.

Example usage:

```js
let track = trackTotal(1);
console.log(track(2)); // 3
console.log(track(3)); // 6
```

---

## Why Use These?

Both examples showcase how closures allow the returned functions to "remember" the internal variable (`count` or `total`) between calls without exposing them globally. This pattern is useful in many programming scenarios like counters, accumulators, or any feature that requires maintaining state in a controlled way.
