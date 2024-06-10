
        // Methods are functions that are associated with a particular object. Methods are usually used to access and manipulate the data stored in an object. They are written in the same way as functions, but they are defined within the object.

        // Define an object with a method
        let obj = {
            name: "John",
            greet: function() {
                console.log("Hello, " + this.name);
            }
        };

        // Call the object method
        obj.greet(); // Outputs: Hello, John

        // Define an array
        let arr = [1, 2, 3, 4, 5];

        // Use the push() method to add an element to the end of the array
        arr.push(6); // arr is now [1, 2, 3, 4, 5, 6]
        console.log(arr);

        // Use the pop() method to remove the last element of the array
        let r = arr.pop(); // arr is now [1, 2, 3, 4, 5]
        console.log(arr,r);

        // Use the shift() method to remove the first element of the array
        arr.shift(); // arr is now [2, 3, 4, 5]
        console.log(arr);

        // Use the unshift() method to add an element to the beginning of the array
        arr.unshift(1); // arr is now [1, 2, 3, 4, 5]
        console.log(arr);

        // Use the join() method to join all elements of the array into a string
        let str = arr.join("-"); // str is now "1, 2, 3, 4, 5"
        console.log(str);
        console.log(typeof str);

        // Use the slice() method to select a part of the array
        // It Does not Modify Orignal Array It Creates a new Array
        let newArr1 = arr.slice(1, 4); 
        console.log(newArr1); // newArr1 is now [2, 3, 4]
        let newArr2 = arr.slice(2);
        console.log(newArr2); //  newArr2 is now [ 3, 4, 5 ]


        // Use the splice() method to add an element to the array at a specific index
        // array.splice(start[, deleteCoun{, element1, element2, ...}])
        arr.splice(2, 0, 2.5); // arr is now [1, 2, 2.5, 3, 4, 5]
        console.log(arr);
        let lost = arr.splice(2, 0, 2.5);
        console.log(lost);// Show Deleted Items
        /*You’re trying to insert 2.5 at index 2 and not removing any elements (deleteCount is 0). That’s why lost is an empty array.*/

        // Use the concat() method to join two arrays
        let arr2 = [6, 7, 8];
        let arr3 = arr.concat(arr2); // arr3 is now [1, 2, 2.5, 3, 4, 5, 6, 7, 8]
        console.log(arr3);

        // Use the toString() method to convert the array to a string
        let arrStr = arr3.toString(); // arrStr is now "1,2,2.5,3,4,5,6,7,8"
        console.log(arrStr);
        console.log(typeof arrStr);

        // The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
        let arr4 = [40, 100, 1, 5, 25, 10];
        arr4.sort();
        console.log(arr4); //Array By Deafult Sort Alphabetically

        // To Sort the array in ascending order
        arr4.sort(function(a, b) {return a - b});

        console.log(arr4); // Outputs: [1, 5, 10, 25, 40, 100]

        // Delete operator in JavaScript to remove elements from an array.
        // Delete by position (first element)
        delete arr4[0]; // Removes the first element at index 0
        console.log(arr4); // Output: [ <1 empty item>, 5, 10, 25, 40, 100 ]
        // Find the index of the value 100 and delete it
        let index = arr4.indexOf(25);
        if (index > -1) {
        delete arr4[index];
        }
        console.log(arr4); // Output: [ <1 empty item>, 5, 10, <1 empty item>, 40, 100 ]
        // Delete Opeartor Does'nt effect the length og array, and delted position remain empty
        console.log(arr4.length);

        //Use to reverse an Array
        arr4.reverse();
        console.log(arr4); //[ 100, 40, <1 empty item>, 10, 5, <1 empty item> ]