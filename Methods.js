/*
A method is a function that is associated with an object, or, simply put, it is a property of an object that is a function. Methods are typically used to perform operations on the object’s data.

In JavaScript, objects can have methods. For example, consider an object representing a rectangle. This object might have properties like width and height, and it could also have methods like calculateArea and calculatePerimeter that use the object’s properties to perform calculations.
*/
let rectangle = {
    width: 10,
    height: 5,
    calculateArea: function() {
      return this.width * this.height;
    },
    calculatePerimeter: function() {
      return 2 * (this.width + this.height);
    }
  };
  
  console.log(rectangle.calculateArea()); // 50
  console.log(rectangle.calculatePerimeter()); // 30
  