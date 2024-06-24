/*
A Closure in JavaScript is the combination of a function bundled together (enclosed) with references to its surrounding state, known as the lexical environment. Here’s what it means:

Function and Lexical Environment:
A closure consists of a function and the lexical environment within which that function was declared.
The lexical environment includes any local variables that were in scope at the time the closure was created.
Access to Outer Function’s Scope:
When you create a closure, you gain access to an outer function’s scope from an inner function.
Closures allow inner functions to “remember” variables and other resources from their parent function even after the parent function has finished executing.
Automatic Creation:
Closures are automatically created every time a function is defined in JavaScript.
They capture the variables and context from their surrounding scope, preserving them for use within the inner function.
*/

function init() {
    var name = "Mozilla"; // 'name' is a local variable created by 'init'
  
    function displayName() {
      // 'displayName()' is the inner function (closure)
      console.log(name); // Access the variable declared in the parent function
    }

    // name = "Firefox";
    displayName();
  }
  
  init(); // Logs "Mozilla"
  