/*
In JavaScript, you can use the prompt() function to get user input. However, it’s important to note that prompt() is a web API, which means it is part of the browser environment and not the JavaScript language itself. It works in the browser, but it doesn’t work in a Node.js environment or in the Visual Studio Code (VS Code) terminal.

If you’re writing JavaScript code in VS Code and want to run it in the terminal, you’ll need to use a different method to get user input. One common way is to use the built-in readline module in Node.js
*/

process.stdout.write('Enter Your Name: ');

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    console.log(`Your Name is : ${input}`);
    process.exit();
});

// Run this in node.exe
// .load Unser_Input.js