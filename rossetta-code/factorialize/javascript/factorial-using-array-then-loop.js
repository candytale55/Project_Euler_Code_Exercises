// Not efficient. See comments below: 

function factorial(num) {
  let array = [];
  let result = 1;
  for (let i = 0; i<num; i++){
    array.push(num-i);
  }
  for (let i=0; i<array.length; i++){
    result = result * array[i];
  }
  return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(10)); // 3628800


/*
Not Efficient for Simple Use
- You're doing two passes (one to build the array, one to multiply).
- It uses more memory (array storage) and adds overhead.
- For just calculating a factorial, this is overkill.

When This Approach Might Make Sense:
1. Teaching/Visualization:
- You're learning how loops and arrays work. Useful to understand how the values are built up.
- You want to visualize or debug the factorial process step by step.

2. Functional Programming Prep
- If you wanted to later use reduce() instead of the second loop:   
  return array.reduce((acc, val) => acc * val, 1);
*/

function factorial(num) {
  let array = [];
  for (let i = 0; i<num; i++){
    array.push(num-i);
  }
  return array.reduce((acc, val) => acc * val, 1);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(10)); // 3628800

/*
3. Custom Array Transformations
- If you needed to do additional operations (e.g., filtering or modifying specific terms before multiplication).
*/
