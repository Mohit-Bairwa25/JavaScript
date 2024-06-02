    // 1. For Loop
    // The for loop is used when you know how many times the script should run.
    for (let i = 0; i < 5; i++) {
        console.log("For loop iteration: " + i);
    }

    // 2. For...of Loop
    // The for...of loop is used to iterate over iterable objects (like arrays, strings, etc.).
    let array = [1, 2, 3, 4, 5];
    for (let value of array) {
        console.log("For...of loop iteration: " + value);
    }

    // 3. For...in Loop
    // The for...in loop is used to iterate over the enumerable properties of an object.
    let object = {a: 1, b: 2, c: 3};
    for (let property in object) {
        console.log("For...in loop iteration: " + property + " = " + object[property]);
    }

    // 4. While Loop
    // The while loop continues as long as the specified condition is true.
    let j = 0;
    while (j < 5) {
        console.log("While loop iteration: " + j);
        j++;
    }

    // 5. Do...While Loop
    // The do...while loop will always be executed at least once, even if the condition is false, because the code block is run before the condition is tested.
    let k = 0;
    do {
        console.log("Do...while loop iteration: " + k);
        k++;
    } while (k < 5);

    //Control Flow Statement with Loops
    // 1. Break Statement: It is used to "jump out" of a loop.
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log("For loop iteration with break: " + i);
    }

    // 2. Continue Statement: It is used to "jump over" one iteration in the loop.
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log("For loop iteration with continue: " + i);
    }