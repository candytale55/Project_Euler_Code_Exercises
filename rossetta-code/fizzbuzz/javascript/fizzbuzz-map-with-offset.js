function fizzBuzz() {
  return [...Array(100).keys()].map(i => {
    const num = i + 1; // Convert 0–99 to 1–100 to match the required FizzBuzz range
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
  });
}

console.log(fizzBuzz());
