/*
Primitive Data Types: In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

Here are some key characteristics of primitive data types:
1. They are immutable, which means they cannot be changed once they are created.
2. When you assign a primitive value to a variable, JavaScript stores the value in the variable’s location in memory.
3. When you assign the variable to another variable, JavaScript creates a copy of the original value and stores it in the new variable’s location in memory.

Objects: In contrast, an object in JavaScript is a standalone entity, with properties and type. It’s a collection of properties where each property is an association between a name (or key) and a value. A property’s value can be a function, in which case the property is known as a method.

Here are some key characteristics of objects:
1. Objects are mutable. They are addressed by reference, not by value.
2. When you assign an object to a variable, that variable doesn’t actually contain the object. It contains a reference to the object.
3. When you assign that variable to another variable, both variables now reference the same object. Changes to the object through one variable are visible to the other variable.
*/

// Primitive type
let x = 10;
let y = x; // y is a copy of x
x = 20; // changing x doesn't affect y
console.log(x); // 20
console.log(y); // 10

// Object
let a = { value: 10 };
let b = a; // b is a reference to the same object
a.value = 20; // changing a.value also changes b.value
console.log(a.value); // 20
console.log(b.value); // 20
