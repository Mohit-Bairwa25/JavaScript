// For 'var'
var x = 10; // declare and initialize the variable
console.log(x); // outputs: 10

x = 20; // update the value of the variable
console.log(x); // outputs: 20

var x = 30; // re-declare and update the value of the variable
console.log(x); // outputs: 30

// For 'let'
let y = 40; // declare and initialize the variable
console.log(y); // outputs: 40

y = 50; // update the value of the variable
console.log(y); // outputs: 50

// let y = 60; // This will throw an error because 'let' does not allow re-declaration in the same scope

// For 'const'
const z = 70; // declare and initialize the variable
console.log(z); // outputs: 70

// z = 80; // This will throw an error because 'const' does not allow updating
// const z = 90; // This will throw an error because 'const' does not allow re-declaration in the same scope
