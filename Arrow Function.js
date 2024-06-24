/*
An arrow function in JavaScript is a concise way to write functions.
Arrow functions use the => syntax.
They are defined using the format: const myFunction = (parameters) => {  function body  }.
Shorter Syntax : If the function has only one statement, you can omit the curly braces {} and the return keyword.
*/
// Regular function
const greet = function(name) {
    return "Hello " + name + "!";
};
console.log(greet("Binod"));

// Arrow function (shorter)
const greetArrow = (name1) => "Hello " + name1 + "!";
console.log(greetArrow("Aditya Kumar"));
/*
No Binding of this : Arrow functions do not have their own this context.
They inherit the this value from the surrounding lexical scope (the context where they are defined).
This behavior is different from regular functions, which have their own this context.
*/
const obj = {
    name: "Alice",
    greet: function() {
        // Regular function: 'this' refers to the object (obj)
        return "Hello, " + this.name;
    },
    greetArrow: () => {
        // Arrow function: 'this' refers to the lexical scope (not obj)
        return "Hello, " + this.name;
    }
};

console.log(obj.greet()); // "Hello, Alice"
console.log(obj.greetArrow()); // "Hello, undefined" (because 'this' is not bound to obj)
