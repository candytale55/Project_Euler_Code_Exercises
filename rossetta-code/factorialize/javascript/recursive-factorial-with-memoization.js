const memo = {};  // to store previous computed factorials

function factorial(n) {
  if (n in memo) return memo[n];   // Checks if we've already computed this factorial
  if (n === 0) return 1;           // base case: factorial(0) is 1
  memo[n] = n * factorial(n - 1);  // recursive call
  return memo[n];   
}


/* 
Good if: 
- You're calling factorial(n) multiple times with overlapping values 
  (e.g., in a loop or inside another recursive function like calculating combinations).
- You're solving dynamic programming problems where subproblems repeat.
- Performance matters, and avoiding repeated computation is key.


NOT if you're just computing factorial(n) once — the overhead of memoization doesn't help and may even slow things down.
 */
