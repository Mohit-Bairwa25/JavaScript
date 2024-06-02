/*
1. Var is Global Scoped while let & Const are block scoped
2. Var can be updated & re-declared within its scope
3. Let can be updated but not re-declared
4. Const can neither be updated nor be re-declared
5. Var Variable are initalised with undefined whereas let and const variable are not initalised.
6. Const must be initalized during declaration unlike let and var.
*/
// Initialization
var x; // 'var' can be declared without being initialized
let y; // 'let' can be declared without being initialized
// const z; // 'const' must be initialized during declaration. This line will throw an error.

// Global scope
x = 10; // 'var' can be initialized after declaration
y = 20; // 'let' can be initialized after declaration
const z = 30; // 'const' must be initialized during declaration

console.log(x); // outputs: 10
console.log(y); // outputs: 20
console.log(z); // outputs: 30

if (true) {
    // Block scope
    var x = 40; // 'var' is function-scoped, so this will also change the global 'x'
    let y = 50; // 'let' is block-scoped, so this won't affect the global 'y'
    const z = 60; // 'const' is block-scoped, so this won't affect the global 'z'

    console.log(x); // outputs: 40
    console.log(y); // outputs: 50
    console.log(z); // outputs: 60
}

console.log(x); // outputs: 40, because 'x' was re-declared in the block scope
console.log(y); // outputs: 20, because 'y' in the block scope didn't affect the global 'y'
console.log(z); // outputs: 30, because 'z' in the block scope didn't affect the global 'z'
