//  for classic factorial calculation, there’s no strong reason to prefer a while loop over a for loop. 

function factorial(n) {
  let i = n;
  let solution = 1;
  while (i>0){
    solution *= i;
    i--;
  }
  return solution;
}

console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(10)); // 3628800



/*
For simple counting loops like factorials, a for loop is usually preferred because:
 - It's more compact and easier to read.
 - The loop variable is scoped inside the loop.
 - It's the common practice in most JavaScript codebases.
*/ 

/*
When Would while Be Better? 
- You don't know in advance how many times you'll loop.
- The exit condition isn't based on a simple counter.
- You're doing something more dynamic or waiting for a state change.

Suppose you're writing a factorial function that keeps asking the user for a valid number until they enter a positive integer, and then calculates the factorial.  
Suppose  you are trying to simulate a recursive process using a stack or queue, and your loop continues as long as there are "pending multiplications" in the stack.
*/
