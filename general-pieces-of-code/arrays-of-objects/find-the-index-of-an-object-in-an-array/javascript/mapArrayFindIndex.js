// Original inventory array
let inventory = [
  { name: 'pen', quantity: 30 },
  { name: 'pencil', quantity: 50 },
  { name: 'notebook', quantity: 20 },
  { name: 'eraser', quantity: 1 }
];

// Step 1: Create a Map where key is product name, value is its index
const inventoryIndexMap = new Map();

inventory.forEach((item, index) => {
  inventoryIndexMap.set(item.name, index);
});

/**
 * Looks up the index of a product by name using the Map.
 * 
 * @param {string} name - The name of the product.
 * @returns {number} - The index of the product, or -1 if not found.
 */
const findProductIndex = (name) => {
  if (inventoryIndexMap.has(name)) {
    const index = inventoryIndexMap.get(name);
    console.log(`Index of "${name}":`, index);
    return index;
  } else {
    console.log(`"${name}" not found in inventory.`);
    return -1;
  }
};

// Test the function
findProductIndex('pencil'); // Output: Index of "pencil": 1
findProductIndex('marker'); // Output: "marker" not found in inventory.



//  IF THERE'S A CHANGE TO THE INVENTORY

// Rebuild map after inventory changes
const rebuildInventoryIndexMap = () => {
  inventoryIndexMap.clear();
  inventory.forEach((item, index) => {
    inventoryIndexMap.set(item.name, index);
  });
};
