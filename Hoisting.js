/*
Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their scope during execution

Variable Hoisting : When you declare a variable using var, the declaration is hoisted to the top of its containing function or global scope.
However, the initialization (assigning a value) remains in place.
*/
console.log(a); // undefined (declaration is hoisted)
var a = 5; // initialization

var b; // declaration hoisted
console.log(b); // undefined
b = 5; // initialization
/*
Function Hoisting : Function declarations are also hoisted.
You can call a function before its actual declaration in the code.
*/
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}
/*
Block Scope (let and const) : Variables declared with let and const are also hoisted, but they remain uninitialized (in a “temporal dead zone”) until their actual declaration.
Attempting to use them before declaration results in a ReferenceError.
*/
// console.log(carName); // ReferenceError
let carName = "Volvo";
console.log(carName);
/*
Initialization Not Hoisted : Only declarations are hoisted, not initializations.
*/
var c = 7; // initialization
console.log(c); // 7

var d; // declaration hoisted
console.log(d); // undefined
d = 7; // initialization

