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