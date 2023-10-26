# Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

```
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
```


# Find the Odd Integer

This JavaScript function, named "findOdd," is designed to find the integer within an array that has an odd count of occurrences. It utilizes a hash map to keep track of the count of each integer in the array, and then it iterates through the map to identify the integer with an odd count.

## Usage

You can use this function in your JavaScript code to find the odd integer in an array. Simply provide an array as the argument, and the function will return the integer with an odd count. If no integer with an odd count is found, the function will return `null`, but you can customize it to return a default value or throw an error if needed.

## Example

```javascript
console.log(findOdd([7])); // Should return 7
console.log(findOdd([0])); // Should return 0
console.log(findOdd([1, 1, 2])); // Should return 2
console.log(findOdd([0, 1, 0, 1, 0])); // Should return 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Should return 4
```

Feel free to use this function to find the odd integer in your arrays with ease.