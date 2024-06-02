// An object is a complex data type that allows you to store collections of data. It can contain many values as a written list.

// 1. Object Literals
let objectLiteralVariable = {name: "John", age: 30};
console.log(objectLiteralVariable); // Outputs: { name: 'John', age: 30 }
console.log(typeof objectLiteralVariable); // Outputs: object

// 2. Array
let arrayVariable = [1, 2, 3];
console.log(arrayVariable); // Outputs: [1, 2, 3]
console.log(typeof arrayVariable); // Outputs: object

// 3. Functions
let functionVariable = function() { return "Hello, world!"; };
console.log(functionVariable()); // Outputs: Hello, world!
console.log(typeof functionVariable); // Outputs: function
/*
A function is a callable object, so it’s a bit special. The typeof operator returns "function" for functions. But, functions in JavaScript are objects, they have properties and methods.
*/

// 4. Date
let dateVariable = new Date();
console.log(dateVariable); // Outputs: current date and time
console.log(typeof dateVariable); // Outputs: object

// 5. RegExp
let regExpVariable = new RegExp('\\w+');
console.log(regExpVariable); // Outputs: /\w+/
console.log(typeof regExpVariable); // Outputs: object

// 6. Math
console.log(Math.PI); // Outputs: 3.141592653589793
console.log(typeof Math); // Outputs: object

// 7. Error
let errorVariable = new Error("This is an error message");
console.log(errorVariable); // Outputs: Error: This is an error message
console.log(typeof errorVariable); // Outputs: object

// 8. String
let stringVariable = new String("This is a string");
console.log(stringVariable); // Outputs: [String: 'This is a string']
console.log(typeof stringVariable); // Outputs: object

// Primitive String
let primitiveString = "hello";
console.log(primitiveString); // Outputs: hello
console.log(typeof primitiveString); // Outputs: string

// 9. Number
let numberVariable = new Number(123);
console.log(numberVariable); // Outputs: [Number: 123]
console.log(typeof numberVariable); // Outputs: object

// 10. Boolean
let booleanVariable = new Boolean(true);
console.log(booleanVariable); // Outputs: [Boolean: true]
console.log(typeof booleanVariable); // Outputs: object

// Primitive Boolean
let primitiveBoolean = true;
console.log(primitiveBoolean); // Outputs: true
console.log(typeof primitiveBoolean); // Outputs: boolean

// 11. Map
let mapVariable = new Map();
mapVariable.set('name', 'John');
console.log(mapVariable); // Outputs: Map { 'name' => 'John' }
console.log(typeof mapVariable); // Outputs: object

// 12. Set
let setVariable = new Set();
setVariable.add(1);
console.log(setVariable); // Outputs: Set { 1 }
console.log(typeof setVariable); // Outputs: object

// 13. WeakMap
let weakMapVariable = new WeakMap();
let obj = {};
weakMapVariable.set(obj, 'John');
console.log(weakMapVariable.get(obj)); // Outputs: John
console.log(typeof weakMapVariable); // Outputs: object

// 14. WeakSet
let weakSetVariable = new WeakSet();
let obj2 = {};
weakSetVariable.add(obj2);
console.log(weakSetVariable.has(obj2)); // Outputs: true
console.log(typeof weakSetVariable); // Outputs: object

// 15. Promise
let promiseVariable = new Promise((resolve, reject) => {});
console.log(promiseVariable); // Outputs: Promise { <pending> }
console.log(typeof promiseVariable); // Outputs: object

// 16. Generator
function* generatorVariable() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = generatorVariable();
console.log(gen.next().value); // Outputs: 1
console.log(typeof gen); // Outputs: object

