// First version: uses 'var', which is function-scoped and generally avoided in modern JavaScript.

function factorialize(num) {
  for (var result = 1; num > 0; num--) {
    result *= num;
  }
  return result;
}

// Even more minimal version using inline for-loop and single-letter variable.
// Still uses 'var', which is discouraged in modern code.

function factorial(n) {
  for (var r = 1; n > 0; n--) r *= n;
  return r;
}

// Modern version using 'let' instead of 'var'.
// Since 'let' is block-scoped, result must be declared outside the loop header.

function factorial(n) {
  let result = 1;
  for (; n > 0; n--) {
    result *= n;
  }
  return result;
}

// TESTS
console.log(factorialize(1));  // 1
console.log(factorialize(0));  // 1
console.log(factorialize(3));  // 6
console.log(factorialize(5));  // 120

