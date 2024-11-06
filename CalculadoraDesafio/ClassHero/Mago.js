// Class definition for a generic hero in an adventure game
class Hero {
    constructor(name, age, type) {
      this.name = name; // Hero's name
      this.age = age; // Hero's age
      this.type = type; // Hero's type, e.g., "mage"
    }
  
    // Method to attack, with different output based on hero type
    attack() {
      let attackMethod;
  
      // Conditional logic based on the hero's type
      if (this.type.toLowerCase() === "mage") {
        attackMethod = "magic"; // Attack method for mage
      } else {
        attackMethod = "weapon"; // Default attack method
      }
  
      // Display the attack message
      console.log(`The ${this.type} attacked using ${attackMethod}.`);
    }
  }
  
  // Example usage:
  
  // Creating a new hero of type "mage"
  const hero = new Hero("Gandalf", 300, "Mage");
  
  // Calling the attack method, which displays the desired message
  hero.attack(); // Output: "The mage attacked using magic."
  