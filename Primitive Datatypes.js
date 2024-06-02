
    /*At a very High Level There are two Types od data types in JavaScript
    1. Primitive Datatypes : Primitive data types are a set of basic data types in javascript
    Example: undefined, null, number, string, boolean, symbol, bigint
    */

    // 1. Boolean: It can hold two values: true or false.
    let boolVariable = true;
    console.log(boolVariable); // Outputs: true
    console.log(typeof boolVariable); // Outputs: boolean

    // 2. BigInt: It is an integer with arbitrary precision.
    let bigIntVariable = BigInt(1234567890123456789012345678901234567890);
    console.log(bigIntVariable); // Outputs: 1234567890123456789012345678901234567890n
    console.log(typeof bigIntVariable); // Outputs: bigint

    // 3. Null: It is an assignment value that means no value or no object. It is not an identifier for a property of the global object.
    let nullVariable = null;
    console.log(nullVariable); // Outputs: null
    console.log(typeof nullVariable); // Outputs: object

    /*
    In JavaScript, null is considered a primitive value, not an object. It represents the intentional absence of any object value. It is one of JavaScript’s primitive types, along with undefined, number, string, boolean, symbol, and bigint.
    However, interestingly, if you test null using the typeof operator, it will return "object":
    This is actually a long-standing bug in JavaScript, but it is not corrected due to backward-compatibility concerns. Despite this, null is still considered a primitive value, and it is not an object.
    */

    // 4. Number: It can be written with or without decimals. 
    var num1 = 55;
    var num2 = 56.76;
    console.log(num1+num2);
    console.log(typeof num1); // Outputs: number
    console.log(typeof num2); // Outputs: number

    // 5. String: It is used for storing text.
    var str1 = "This is String";
    var str2 = "This is 2nd String";
    console.log(str1+"  "+str2);
    console.log(typeof str1); // Outputs: string
    console.log(typeof str2); // Outputs: string

    // 6. Symbol: It is a new data type introduced in ES6. It creates a unique value.
    let symbolVariable = Symbol("symbol");
    console.log(symbolVariable); // Outputs: Symbol(symbol)
    console.log(typeof symbolVariable); // Outputs: symbol

    // 7. Undefined: It means a variable has been declared but has not yet been assigned a value.
    let undefinedVariable;
    console.log(undefinedVariable); // Outputs: undefined
    console.log(typeof undefinedVariable); // Outputs: undefined


