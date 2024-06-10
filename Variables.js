
// Rules For Choosing Variable Names
// 1. Letters, Digit, Underscore $ & Signs are Allowed.
// 2. Must Begin with a _ $ or a letter.
// 3. Javascript reserved words cannot be used as avariable name.
// 4. Harry & harry are diifferent Variable name (Case Sensitive).
// 

        var a = 67;
        console.log(a);
        a = "harry";
        console.log(a);
        // let 8harry = 7;
        // let var =10;
        // Not allowed this will throw an error
        var Harry = 10;
        console.log(Harry);
        var harry = 11
        console.log(harry);

    // 1. var: It is used to declare a variable. It can be reassigned but only accessed within a function. Variables declared with var move to the top when code is executed.
    var varVariable = "I'm a var variable";
    console.log(varVariable);
    
    // 2. let: It is block scoped. It can be reassigned but not re-declared.
    let letVariable = "I'm a let variable";         
    console.log(letVariable);

    // 3. const: It is block scoped. It cannot be reassigned or re-declared.
    const constVariable = "I'm a const variable";
    console.log(constVariable);

    // 4. Boolean: It can hold two values: true or false.
    let boolVariable = true;
    console.log(boolVariable);

    // 5. Null: It is an assignment value that means no value or no object. It is not an identifier for a property of the global object.
    let nullVariable = null;
    console.log(nullVariable);

    // 6. Undefined: It means a variable has been declared but has not yet been assigned a value.
    var und = undefined;
    console.log(und);