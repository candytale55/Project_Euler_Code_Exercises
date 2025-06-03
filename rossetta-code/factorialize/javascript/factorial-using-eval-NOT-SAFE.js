// ⚠️ Factorial using eval() – NOT recommended in production code.
// This version dynamically creates a string like "1*2*3*...*n" 
//  and evaluates it as JavaScript code.

function factorial(n) {
  return eval(Array(n).fill().map((_, i) => i + 1).join('*')) || 1;
}

/* 
  
  Risks:
  - Security vulnerabilities if `n` were derived from user input
  - Slower execution (JavaScript engines can't optimize it)
  - Harder to debug and maintain
  
  Only safe here because `n` is fully controlled and numeric.
 */


// Better to use: 

function factorial(n) {
  if (n === 0) return 1;
  return [...Array(n).keys()].map(i => i + 1).reduce((a, b) => a * b);
}


console.log(factorial(0));  // 1
console.log(factorial(1));  // 1
console.log(factorial(3));  // 6
console.log(factorial(5));  // 120
console.log(factorial(10)); // 3628800
