function findOdd(arr) {
    // Create a hash map to store the count of each integer
    const countMap = new Map();
  
    // Iterate through the array and update the count for each integer
    for (const num of arr) {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1);
      } else {
        countMap.set(num, 1);
      }
    }
  
    // Find the integer with an odd count
    for (const [num, count] of countMap.entries()) {
      if (count % 2 !== 0) {
        return num;
      }
    }
  
    // If no odd count is found, you can return a default value or throw an error
    return null; // or throw new Error("No integer with an odd count found");
  }
  
  // Test cases
  console.log(findOdd([7])); // Should return 7
  console.log(findOdd([0])); // Should return 0
  console.log(findOdd([1, 1, 2])); // Should return 2
  console.log(findOdd([0, 1, 0, 1, 0])); // Should return 0
  console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Should return 4
  