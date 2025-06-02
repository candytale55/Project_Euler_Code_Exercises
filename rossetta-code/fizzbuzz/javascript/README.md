# FizzBuzz – Rosetta Code Solutions

> Different implementations of the classic FizzBuzz problem, showcasing a variety of JavaScript techniques and styles.

## Problem Description

Print the numbers from 1 to 100 with the following rules:

- For numbers divisible by **3**, print `"Fizz"` instead.
- For numbers divisible by **5**, print `"Buzz"` instead.
- For numbers divisible by **both 3 and 5**, print `"FizzBuzz"`.

---

## Solutions

### `fizzbuzz-array-from-map.js`
Uses `Array.from()` with an index-based map function = functional approach that builds the entire result in one expression.

### `fizzbuzz-building-w-strings.js`
Builds output strings conditionally for each number, allowing flexible logic composition before deciding what to print.

### `fizzbuzz-classic-if-else-push.js`
A straightforward solution using a `for` loop, `if/else` statements, and `.push()` to collect the results into an array.

### `fizzbuzz-map-with-offset.js`
Uses a spread-and-map pattern (`[...Array(100).keys()].map(i => i + 1)`) to generate numbers from 1 to 100 and apply the FizzBuzz logic.

### `fizzbuzz-nested-ternary.js`
Uses nested ternary operators inside a loop to decide the FizzBuzz output for each number. Compact but less readable.

---

## Solution Comparison

| Solution                        | Readability | Conciseness | Use Case                      |
|--------------------------------|-------------|-------------|-------------------------------|
| `fizzbuzz-classic-if-else-push.js`  | High        | Medium      | Clear, beginner-friendly       |
| `fizzbuzz-array-from-map.js`          | Medium-High | Medium      | Functional, clean style        |
| `fizzbuzz-map-with-offset.js`         | Medium      | Medium      | Intermediate, uses `.keys()`   |
| `fizzbuzz-nested-ternary.js`          | Low         | High        | Very concise, less readable    |
| `fizzbuzz-building-w-strings.js`      | Medium      | Medium      | Flexible, easy to extend       |

### My Personal Take and Recommendations

As I explored these different ways to solve FizzBuzz, I found myself drawn mostly to two approaches for real projects:

- The **classic-if-else-push** approach feels super clear and straightforward. It’s easy to follow, easy to debug, and anyone on a team can quickly understand what’s happening. It’s the kind of code I’d write if I want maximum clarity and maintainability.

- The **array-from-map** approach is elegant and modern. It avoids mutation and embraces a functional style, which I really like for keeping code concise but still readable. It’s a bit more “advanced,” but it feels clean and expressive, especially when working in modern JavaScript environments.

For practical use, these two strike the best balance between readability, maintainability, and style. The other versions are fun to explore and great exercises, but might be harder to maintain or less intuitive in a team setting.
