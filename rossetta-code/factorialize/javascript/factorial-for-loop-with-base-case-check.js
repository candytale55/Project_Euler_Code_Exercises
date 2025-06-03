// I think this was my very first attempt. The explicit check was unnecessary

function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1){
    return 1
  }
  else {
    for (let i=1; i<=n ;i++){
      result*= i;
    } 
  }
  return result;
}


console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(10)); // 3628800



// The check for 0! and 1! is for handling edge cases explicitly.
// Mathematically, 0! = 1 and 1! = 1, so you shortcut the loop here.
// However, the loop itself already handles these cases correctly:
// - For n = 0, the loop doesn’t run, so result stays 1.
// - For n = 1, the loop runs once, multiplying result by 1.
// Thus, the explicit check is not strictly necessary but is fine to keep.
