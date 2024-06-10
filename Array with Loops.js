// 1. Classical For Loop
let numbers = [2, 4, 6, 8, 10];
for(let i = 0; i < numbers.length; i++){
    console.log(`For Loop: ${numbers[i]}`);
}

// 2. ForEach Loop
numbers.forEach((element) => {
    console.log(`ForEach Loop: ${element * element}`);
});

// 3. For...of Loop
for (let item of numbers){
    console.log(`For...of Loop: ${item}`);
}

// 4. For...in Loop
for (let i in numbers){
    console.log(`For...in Loop: ${numbers[i]}`);
}

// 5. Array.from
let name = "Harry";
let arr = Array.from(name);
console.log(`Array.from: ${arr}`);

// 6. For Loop, ForEach Loop, For...of Loop, For...in Loop with objects
let data = [
    {name: 'apple', value: 1},
    {name: 'banana', value: 2},
    {name: 'cherry', value: 3}
];

// For Loop: Accessing both index and value
for(let i = 0; i < data.length; i++){
    console.log(`For Loop with objects: ${i} - ${data[i].name}`);
}

// ForEach Loop: Accessing value directly
data.forEach((item) => {
    console.log(`ForEach Loop with objects: ${item.name}`);
});

// For...of Loop: Accessing value directly
for (let item of data){
    console.log(`For...of Loop with objects: ${item.name}`);
}

// For...in Loop: Accessing index directly
for (let i in data){
    console.log(`For...in Loop with objects: ${i} - ${data[i].name}`);
}
