// HEAD RECURSION

function factorial(n) {
  if (n === 0) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive step (head recursion)
}

/*   
Classic recursive approach.  Great for learning and small inputs.
- Each function call waits for the next call to return before doing the multiplication.
- The call stack builds up until the base case (n === 0) is reached,
then the results are computed as the stack unwinds.

⚠️ Can cause stack overflow for large n.
*/


// TAIL RECURSION

function factorial(n, result = 1) {
  if (n === 0) {
    return result; // Base case
  }
  return factorial(n - 1, result * n); // Tail-recursive call
}

/*
This version performs the multiplication *before* the recursive call
by carrying an accumulator (`result`) through each call.
This avoids having to wait for all recursive calls to return.

- More memory-efficient in languages with Tail Call Optimization (TCO).
⚠️ JavaScript does not reliably optimize tail calls, so stack overflow is still possible for large n.
- Still useful for understanding how tail recursion differs from head recursion.
*/


console.log(factorial(0));  // 1
console.log(factorial(1));  // 1
console.log(factorial(3));  // 6
console.log(factorial(5));  // 120
console.log(factorial(10)); // 3628800

