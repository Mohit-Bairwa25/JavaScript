let name0 = "Harry" //Can Be Closed in Double Quotes
console.log(name0.length)
console.log(name0[0])
console.log(name0[1])

let friend = 'Prakash' //Can Be Single Quotes
console.log(friend)

/*Can't be Open with Double and Closed with Single It will Give Error*/
// let myfriend = "Shubh'
// console.log(myfriend)

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
//  {   `   } This is a Backtick
let sentence0 = `boy2 is a friend of boy1`
let sentence1 = `${boy2} is a friend of ${boy1}`
console.log(sentence0)
console.log(sentence1)

function greet(strings, nameExpression) {
    let str0 = strings[0]; // "Hello, "
    let name = nameExpression.toUpperCase();
    return `${str0}${name}`;
}

let name = 'John';
console.log(greet`Hello, ${name}!`);  // Outputs: Hello, JOHN!



// Escape Sequence Characters
/* You Cannot put single or double quoates in betweern a string
to do You Have to use /' or /" Other wise it will give error */

// let fruit0 = 'Bana'na'
// console.log(fruit0)
let fruit1 = 'Bana\'na'
console.log(fruit1)
let fruit2 = "Bana\"na"
console.log(fruit2)
// For New Line
let a0 = 'My name is Anthony\nGonsalvis';
console.log(a0);
// For Tab Space
let a1 = 'My name is Anthony\tGonsalvis';
console.log(a1);
// Also For New Line
let a2 = 'My name is Anthony\rGonsalvis';
console.log(a2);

console.log("This is a backslash: \\\\");
console.log("This is a carriage return:\rCarriage return starts here.");
console.log("This is a backspace:\bBackspace starts here.");
console.log("This is a form feed:\fForm feed starts here.");
console.log("This is a vertical tab:\vVertical tab starts here.");
console.log("This is a null character:\0Null character starts here.");
