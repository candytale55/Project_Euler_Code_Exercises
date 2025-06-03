// This version uses a `while` loop and a separate `counter` variable 
// that decrements from (n - 1) down to 1, multiplying `n` by each value.

function factorial(n) {
  let counter = n - 1;
  while (counter >= 1) {
    n *= counter;
    counter--;
  }
  return n;
}

console.log(factorial(0));  // 1
console.log(factorial(1));  // 1
console.log(factorial(3));  // 6
console.log(factorial(5));  // 120
console.log(factorial(10)); // 3628800

/*
A separate counter is useful when:
- You want manual control over iteration, instead of tightly scoped for logic.
- You're learning loop mechanics and want to separate the variable being updated (n) from the loop control.
- You're debugging or inspecting intermediate values during each iteration.
- You want to preserve n’s original value for later use (though that’s not the case here since n is modified directly).

For most real-world uses, a for loop is preferred for clarity.
*/
