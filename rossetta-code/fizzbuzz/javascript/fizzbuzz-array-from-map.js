function fizzBuzz() {

  // Create an array of length 100 and map over it using only the index `i` (ignore the actual value with `_`)
  return Array.from({ length: 100 }, (_, i) => {
    const num = i + 1; // Convert 0–99 to 1–100 to match the FizzBuzz range
    return (num % 3 === 0 && num % 5 === 0) ? "FizzBuzz" :
           (num % 3 === 0) ? "Fizz" :
           (num % 5 === 0) ? "Buzz" :
           num;
  });
}

console.log(fizzBuzz());
