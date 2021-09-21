function likes(names) {
    return {
          0: `no one likes this`, 
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      } [Math.min(4, names.length)]
  }

  console.log([]); // -->  "no one likes this"
  console.log(["Peter"]); // -->  "Peter likes this"
  console.log(["Jacob", "Alex"]); // -->  "Jacob and Alex like this"
  console.log(["Max", "John", "Mark"]); // -->  "Max, John and Mark like this"
  console.log(["Alex", "Jacob", "Mark", "Max"]); // -->  "Alex, Jacob and 2 others like this"