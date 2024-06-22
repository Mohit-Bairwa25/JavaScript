/*
Backticks (`) : Also known as template literals, are a way to create string literals with enhanced flexibility and readability.
Instead of using double quotes (") or single quotes ('), you can enclose strings with backticks (`).
Multi-line strings: You can include newline characters directly within the string.
String interpolation: You can embed expressions using ${expression} syntax.
Tagged templates: You can customize how template literals are processed by using a custom tag
*/ 

const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: "Hello, Alice!"
/*
${} (String Interpolation) : Inside a template literal, ${expression} allows you to insert the value of an expression directly into the string.
The expression is evaluated and converted to a string.
Useful for dynamic content, such as variable values or calculations.
*/
const price = 10;
const quantity = 3;
const total = `Total cost: $${price * quantity}`;
console.log(total); // Output: "Total cost: $30"
