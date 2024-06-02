// You can convert data types explicitly (known as typecasting) or implicitly (known as coercion).
// Number to String
let num = 123;
let numToString = String(num);
console.log(numToString); // Outputs: "123"
console.log(typeof numToString); // Outputs: string

// String to Number
let str = "123";
let strToNum = Number(str);
console.log(strToNum); // Outputs: 123
console.log(typeof strToNum); // Outputs: number

// Boolean to String
let bool = true;
let boolToString = String(bool);
console.log(boolToString); // Outputs: "true"
console.log(typeof boolToString); // Outputs: string

// String to Boolean
let str2 = "true";
let strToBool = (str2 === 'true');
console.log(strToBool); // Outputs: true
console.log(typeof strToBool); // Outputs: boolean

// Number to Boolean
let num2 = 1;
let numToBool = Boolean(num2);
console.log(numToBool); // Outputs: true
console.log(typeof numToBool); // Outputs: boolean

// Boolean to Number
let bool2 = false;
let boolToNum = Number(bool2);
console.log(boolToNum); // Outputs: 0
console.log(typeof boolToNum); // Outputs: number
