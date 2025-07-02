
// Example array of objects (inventory of stationery items)
let inventory = [
  { name: 'pen', quantity: 30 },
  { name: 'pencil', quantity: 50 },
  { name: 'notebook', quantity: 20 },
  { name: 'eraser', quantity: 1 }
];

/**
 * Finds the index of a product in the inventory array by its name.
 * 
 * @param {string} name - The name of the product to search for.
 * @returns {number} - The index of the product if found, or -1 if not found.
 */

const findProductIndex = (name) => {
  // Use .findIndex to locate the index of the object with the matching name
  const index = inventory.findIndex(product => product.name === name);

  // Log the result
  console.log(`Index of "${name}":`, index);

  return index; // Optional: return the index in case you want to use it
};

// Test the function with existing and non-existing items
findProductIndex("pencil"); // Output: Index of "pencil": 1
findProductIndex("paper");  // Output: Index of "paper": -1 (not found)
