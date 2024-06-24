/*
Destructuring in JavaScript is a powerful feature that allows you to extract data from arrays or objects into distinct variables. It makes your code more readable, concise, and expressive. 
*/
let arr = [3, 5, 8, 9, 12, 14];

// Destructuring arrays
let [a, b, c, d, ...rest1] = arr;
console.log(a, b, c, d, rest1);

// Corrected destructuring with variable names
let [x, , y, ...rest2] = arr;
console.log(x, y, rest2);

// Destructuring objects
let { j: num1, k: num2 } = { j: 1, k: 5 };
console.log(num1, num2);

// 1. Object Destructuring
const person = { firstName: "John", lastName: "Doe", age: 50 };
const { firstName, lastName } = person; // Extracts properties

// 2. Array Destructuring
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
const [fruit1, fruit2] = fruits; // Extracts array elements

// 3. Default Values
const { country = "US" } = person; // Sets default value for missing property

// 4. Property Alias
const { lastName: name } = person; // Renames property during destructuring

// 5. String Destructuring
const nameString = "W3Schools";
const [a1, a2, a3, a4, a5] = nameString; // Unpacks characters from a string

// 6. Rest Property
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [m, n, ...rest] = numbers; // Collects remaining values into 'rest' array

// 7. Swapping Variables
let firstNameSwap = "John";
let lastNameSwap = "Doe";
[firstNameSwap, lastNameSwap] = [lastNameSwap, firstNameSwap]; // Swaps values

// Explanation:
// - We use destructuring to extract data from objects and arrays.
// - Default values ensure properties are assigned even if missing.
// - Property aliasing allows renaming during extraction.
// - Rest property collects remaining elements.
// - Swapping variables is concise using destructuring.

console.log(firstName, lastName, country);
console.log(fruit1, fruit2);
console.log(m, n, rest);
console.log(name);
console.log(firstNameSwap, lastNameSwap);

