// Combines Array, map, and reduce
// Functional and elegant (but not necessarily faster)

function factorial(n) {
  if (n === 0) return 1;
  return [...Array(n).keys()].map(i => i + 1).reduce((a, b) => a * b);
}

console.log(factorial(0));  // 1
console.log(factorial(1));  // 1
console.log(factorial(3));  // 6
console.log(factorial(5));  // 120
console.log(factorial(10)); // 3628800
