/*
Getters and setters are methods that allow you to access and modify object properties in a controlled way.
A getter retrieves the value of a property, and a setter assigns a new value to it.
*/
class Person {
    constructor(name) {
      this._name = name; // Private property
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(newName) {
      this._name = newName;
    }
  }
  
  const people = new Person("Alice");
  console.log(people.name); // Get the name
  people.name = "Bob"; // Set a new name
  console.log(people.name); // Get the updated name
  console.log(people instanceof Person) // true

  /*
    The instanceof operator checks if an object is an instance of a particular class or constructor.
    It returns true if the object’s prototype chain includes the specified constructor.
  */
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    eatCarrot() {
        console.log("Eating Carrot")
    }
  }
  
  const slow = new Animal("Turtle");
  console.log(slow instanceof Animal); // true
  let c= 100;
  console.log(c instanceof Animal); // False
  let fast = new Rabbit("Bunny");
  console.log(fast instanceof Rabbit); // true
  