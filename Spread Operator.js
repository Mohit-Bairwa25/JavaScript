/*
The Spread Operator in JavaScript is a syntax introduced in ECMAScript 6 (ES6) that allows you to spread the elements of an iterable (such as arrays, strings, or objects) into another iterable or function call. It’s denoted by three dots (...) followed by an expression or an iterable. 
*/
let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3) {
  return v1 + v2 + v3
}

console.log(sum(...arr1))

let obj2 = {
  name: "Harry",
  company: "Company xyz",
  address: "XYZ"
}

// console.log({ ...obj2, name: "John", company: "ABC" })
console.log({ name: "John", company: "ABC", ...obj2 }) // This will print the obj2 object without changing any values

// 1. Array Spread
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
console.log("Array Spread:", newArray);

// 2. String Spread
const myString = "Hello";
const charArray = [...myString];
console.log("String Spread:", charArray);

// 3. Object Spread
const person = { name: "John", age: 30 };
const updatedPerson = { ...person, city: "New York" };
console.log("Object Spread:", updatedPerson);

// 4. Function Arguments
function myFunction(a, b, c) {
  console.log("Function Arguments:", a, b, c);
}
const args = [1, 2, 3];
myFunction(...args);

// 5. Copying Arrays
const copyArray = [...originalArray];
console.log("Copying Arrays:", copyArray);

// 6. Copying Objects
const originalObject = { name: "Alice", age: 25 };
const copyObject = { ...originalObject };
console.log("Copying Objects:", copyObject);
