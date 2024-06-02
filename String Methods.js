// Define a string
let str = "Hello, World!";

// 1. charAt(): Returns the character at the specified index.
console.log(str.charAt(0)); // Outputs: H

// 2. concat(): Combines the text of two strings and returns a new string.
console.log(str.concat(" How are you?")); // Outputs: Hello, World! How are you?

// 3. includes(): Determines whether one string may be found within another string.
console.log(str.includes("World")); // Outputs: true

// 4. indexOf(): Returns the index within the calling String object of the first occurrence of the specified value.
console.log(str.indexOf("World")); // Outputs: 7

// 5. replace(): Returns a new string with some or all matches of a pattern replaced by a replacement.
console.log(str.replace("World", "Universe")); // Outputs: Hello, Universe!

// 6. slice(): Extracts a section of a string and returns it as a new string.
console.log(str.slice(0, 5)); // Outputs: Hello
console.log(str.slice(2)); // Outputs: llo, World!

// 7. split(): Splits a String object into an array of strings by separating the string into substrings.
console.log(str.split(" ")); // Outputs: [ 'Hello,', 'World!' ]

// 8. toLowerCase(): Returns the calling string value converted to lowercase.
console.log(str.toLowerCase()); // Outputs: hello, world!

// 9. toUpperCase(): Returns the calling string value converted to uppercase.
console.log(str.toUpperCase()); // Outputs: HELLO, WORLD!

// 10. trim(): Trims whitespace from the beginning and end of the string.
let str2 = " What's Up, Nigga! ";
console.log(str2.trim()); // Outputs: What's Up, Nigga!

// 11. startsWith(): Determines whether a string begins with the characters of a specified string.
console.log(str.startsWith("Hello")); // Outputs: true

// 12. endsWith(): Determines whether a string ends with the characters of a specified string.
console.log(str.endsWith("World!")); // Outputs: true

// friend is not changed, because string is immutable
let friend = "Deepika"
friend[3] = "R"
console.log(friend) 