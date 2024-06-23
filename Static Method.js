  class Animal {
    // Constructor initializes an instance with a name property
    constructor(name) {
      // Capitalize the first letter of the name
      this.name = Animal.capitalize(name);
    }
  
    // Static method to capitalize a given name
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  
    // Instance method: Animal walks
    walk() {
      console.log(`Animal ${this.name} is walking.`);
    }
  }
  
  // Create an instance of Animal
  const myPet = new Animal("fluffy");
  
  // Call the walk method
  myPet.walk(); // Output: "Animal Fluffy is walking."
  