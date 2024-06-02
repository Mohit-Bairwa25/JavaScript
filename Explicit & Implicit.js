/*
Explicit Type Conversion (Typecasting): This is when you manually change the data type of a value using built-in functions. The intent is clear and direct. For example, if you have a number and you want to convert it to a string, you would use the String() function:
*/

let num = 123;
let str = String(num); // explicit conversion to string
console.log(typeof str); // Outputs: "string"

/*
Implicit Type Conversion (Coercion): This is when JavaScript automatically changes the data type of a value behind the scenes. This usually happens when you perform operations on values of different data types, and JavaScript will implicitly convert one value to match the other’s data type.
*/

let num1 = 123;
let str1 = num + ""; // implicit conversion to string
console.log(typeof str1); // Outputs: "string"
