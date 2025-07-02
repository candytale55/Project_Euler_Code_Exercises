// Function to create a counter starting from a given number
function createCounter(start) {
  // Initialize 'count' with the starting value provided
  let count = start;

  // Return an inner function that will increment and return 'count'
  return function() {
    // Increase 'count' by 1 each time this function is called
    count += 1;

    // Return the updated count value
    return count;
  };
}

// Create a new counter starting at 5
const counter = createCounter(5);

// Each call to 'counter()' increases and returns the new count
console.log(counter()); // Outputs 6
console.log(counter()); // Outputs 7
console.log(counter()); // Outputs 8
