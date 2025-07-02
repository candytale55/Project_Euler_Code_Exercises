/*
The function trackTotal creates a way to keep track of a running total (a number that keeps increasing).
It starts with an initial number (called initialValue).
It then returns another function that, when called, adds a new number (increment) to the total and gives you the updated total.
*/


// Initialize the 'total' variable with the starting value passed as 'initialValue'
let total = initialValue;

// Return a new function that takes 'increment' as an argument
return function(increment) {
  // Add the 'increment' value to the 'total'
  total += increment;

  // Return the updated 'total'
  return total;
};
}

// Create a closure by calling 'trackTotal' with initial value 1
let track = trackTotal(1);

// Call the returned function with increment 2; logs 3 (1 + 2)
console.log(track(2));

// Call the returned function with increment 3; logs 6 (previous total 3 + 3)
console.log(track(3));
