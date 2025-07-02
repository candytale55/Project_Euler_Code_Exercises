# Finding the Index of an Object in an Array

JavaScript snippets that demonstrate how to find the index of an object in an array by a property (e.g. `name`).

---

## 🔹 `findIndex.js`

**What it does:**  
Uses `.findIndex()` to search an array of objects for a match and returns its index.

**Efficiency:**  
- Time complexity: **O(n)**  
- Searches from start to finish until a match is found.

**Best for:**  
- One-time or infrequent lookups  
- Small to medium arrays  

**Not ideal for:**  
- Large datasets  
- Repeated lookups

---

## 🔹 `mapArrayFindIndex.js`

**What it does:**  
Builds a `Map` where keys are object identifiers (e.g. `name`), and values are the corresponding indices. Enables fast lookups.

**Efficiency:**  
- Setup: **O(n)** (to build the map)  
- Lookup: **O(1)**  

**Best for:**  
- Large arrays  
- Frequent or repeated lookups  

**Not ideal for:**  
- One-off searches  
- Constantly changing arrays (unless the map is kept updated)

---

## ✅ Summary: When to Use What

| Scenario                                  | Use `findIndex.js` | Use `mapArrayFindIndex.js` |
|-------------------------------------------|--------------------|-----------------------------|
| One-time lookup                           | ✅ Yes             | ❌ Overkill                 |
| Multiple lookups by the same key          | ❌ Inefficient     | ✅ Best choice              |
| Large arrays                              | ❌ Slower          | ✅ Recommended              |
| Dynamically changing arrays               | ✅ Easier to manage | ⚠️ Map must be rebuilt     |

