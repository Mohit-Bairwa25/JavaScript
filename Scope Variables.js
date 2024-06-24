/*
Global Scope : Variables declared outside any function or block have global scope.
They can be accessed from anywhere in your JavaScript code.
*/
let globalVar = "I am global!"; // Global scope

function printGlobal() {
  console.log(globalVar); // Accessible inside the function
}

printGlobal(); // Logs: "I am global!"

/*
Local (Function) Scope : Variables declared within a function are local to that function.
They are only accessible within the function.
*/

function myFunction() {
    let localVar = "I am local!"; // Local scope
    console.log(localVar);
  }
  
  myFunction(); // Logs: "I am local!"
  // console.log(localVar); // Error: localVar is not defined

/*
Block Scope (Introduced by let and const) : Variables declared with let or const inside a block (e.g., { }) have block scope.
They are accessible only within that block.
*/
if (true) {
    let blockVar = "I am in a block!"; // Block scope
    console.log(blockVar);
  }
  
  // console.log(blockVar); // Error: blockVar is not defined

/*
Automatically Global (Avoid This!):If you assign a value to a variable without declaring it (using let, const, or var), it becomes a global variable.
This behavior is discouraged because it pollutes the global scope.
*/
function setGlobal() {
    carName = "Volvo"; // Automatically global
  }
  
  setGlobal();
  console.log(carName); // Logs: "Volvo"
  
  