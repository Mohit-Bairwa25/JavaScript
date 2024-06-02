        //OPERTORS
        // Arithmetic Operators
        let a = 5;
        let b = 2;

        console.log(a + b); // Addition: Outputs 7
        console.log(a - b); // Subtraction: Outputs 3
        console.log(a * b); // Multiplication: Outputs 10
        console.log(a / b); // Division: Outputs 2.5
        console.log(a % b); // Modulus (Remainder): Outputs 1
        console.log (a**b); // Exponential : Outputs 25

        // Increment and Decrement Operators

        // Post-Increment: The value of 'a' is returned first, then 'a' is incremented.
        console.log(a++); // Outputs 5
        console.log(a); // Outputs 6, because 'a' was incremented after the previous statement

        // Pre-Increment: 'a' is incremented first, then the value of 'a' is returned.
        console.log(++a); // Outputs 7, because 'a' was incremented before the statement

        // Post-Decrement: The value of 'a' is returned first, then 'a' is decremented.
        console.log(a--); // Outputs 7
        console.log(a); // Outputs 6, because 'a' was decremented after the previous statement

        // Pre-Decrement: 'a' is decremented first, then the value of 'a' is returned.
        console.log(--a); // Outputs 5, because 'a' was decremented before the statement


        // Assignment Operators
        a += b; // Addition assignment: a is now 7
        console.log(a);

        a -= b; // Subtraction assignment: a is now 5
        console.log(a);

        a *= b; // Multiplication assignment: a is now 10
        console.log(a);

        a /= b; // Division assignment: a is now 5
        console.log(a);

        a %= b; // Modulus assignment: a is now 1
        console.log(a);

        // Comparison Operators
        let c = 6;
        let d = '6';
        console.log(c == d); // Equal to: Outputs false
        console.log(c != d); // Not equal to: Outputs true
        console.log(c === d); // Strict equal to: Outputs false
        console.log(c !== d); // Strict not equal to: Outputs true
        console.log(a > b); // Greater than: Outputs false
        console.log(a < b); // Less than: Outputs true
        console.log(a >= b); // Greater than or equal to: Outputs false
        console.log(a <= b); // Less than or equal to: Outputs true

        // Logical Operators
        console.log(a > 0 && b > 0); // Logical AND: Outputs true
        console.log(a > 0 || b < 0); // Logical OR: Outputs true
        console.log(!(a > 0)); // Logical NOT: Outputs false

        // Ternary Operator (Conditional)
        let result = (a > b) ? "a is greater than b" : "a is not greater than b";
        console.log(result); // Outputs "a is not greater than b"
