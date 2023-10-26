# Who Likes It?

**Description:** This JavaScript function, named `Who Likes It?`, takes an array of names as input and returns a string describing who likes something on a social media platform. The output varies depending on the number of names provided in the input array. It provides a neat and concise way to generate these like descriptions for different scenarios, making it a useful utility for applications or websites that display user interactions.

## Usage

You can use this function as follows:

```javascript
const likes = name => {
    return {
       0: `no one likes this`,
       1: `${name[0]} likes this`,
       2: `${name[0]} and ${name[1]} like this`,
       3: `${name[0]}, ${name[1]} and ${name[2]} like this`,
       4: `${name[0]}, ${name[1]} and 2 others like this`
    } [Math.min(4, name.length)]
}

console.log(likes([])); // -->  "no one likes this"
console.log(likes(["Peter"])); // -->  "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // -->  "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // -->  "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // -->  "Alex, Jacob and 2 others like this"
```

This function is versatile and can be easily integrated into your projects to provide a user-friendly way of displaying likes on your platform.

## Input

The function takes an array of names as input, where each name represents a user who likes a post or item.

## Output

The function returns a string describing who likes the post or item based on the number of names provided in the input array.

## Examples

- `likes([])` returns "no one likes this"
- `likes(["Peter"])` returns "Peter likes this"
- `likes(["Jacob", "Alex"])` returns "Jacob and Alex like this"
- `likes(["Max", "John", "Mark"])` returns "Max, John, and Mark like this"
- `likes(["Alex", "Jacob", "Mark", "Max"])` returns "Alex, Jacob, and 2 others like this"

This solution is a concise and elegant way to handle different scenarios for displaying likes, making it a valuable addition to your JavaScript utility library.