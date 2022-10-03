// Encapsulation: abstracting an idea into a defined construct
// Inheritance: being able extend constructs to add functionality
// Polymorphism: The idea that one construct can be used in many ways

// Defines a new class (a Class is a blueprint to make an object)
class Animal {
    // Defines the 'constructor' (what every object you 'build' based on this class(blueprint)
    // All animals have: ears, legs, and a sound they make
    constructor(sound, ears, legs) {
        // Setting "this" specific instance of a object to the ones passed when calling this class (kinda like a function)
        this.ears = ears;
        this.legs = legs;
        this.sound = sound;
    }
    // Puts a function into the blueprint(class) 
    makeSound() {
        //Prints whatever is logged in "this" specific object 
        console.log(this.sound)
    }
}

// Use 'polymorphism' to use the class(blueprint) to create new objects
// variableName = new ClassName(argument1, argument2, argument3) 
const dog = new Animal("bark", 2, 4);
const pig = new Animal("oink", 2, 4);
const cow = new Animal("moo", 2, 4);
// Amount of arguments depends on how many you put in the constructor above


// Should print out each object, based on the class(blueprint)
console.log(dog, pig, cow);

// Should make the sound for that specific animal
dog.makeSound();
pig.makeSound();
cow.makeSound();

// Making a pig class that INHERITS from animal (Inheritance)
class Pig extends Animal {
    constructor(name) {
        // Invoking parent constructor with set values 
        super("oink", 2, 4);
        this.name = name;
    }
    // New method
    rollInMud() {
        console.log(`${this.name} rolls in mud and says ${this.sound}!`);
    }

    // Overridden method
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// Instantiate Instance of the new Pig Class
const wilbur = new Pig("Wilbur")

console.log(wilbur);
wilbur.rollInMud();
wilbur.makeSound();

// 10 minute exercise "Inherit This"
class Cow extends Animal {
    constructor(name) {
        super("Moo", 2, 4);
        this.name = name;
        this.location = "Barn"
    }

    grazeInField() {
        if (this.location === "Barn") {
            this.location === "Field";console.log(`${this.name} is out in the field eating grass.`);
        } else {
            this.location === "Barn";
            console.log(`The cow ${this.name} is already in the field grazing.`);
        }
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Bark", 2, 4);
        this.name = name;
    }

    dance() {
        console.log(`${this.name} stands up on it is hind legs.`);
        }
    makeSound(timesToBark) {
        for (let i = 0; i < timesToBark; i += 1) {
            console.log(this.sound);
        }
    }

}

let bessie = new Cow("Bessie");
let lassie = new Dog("Lassie");

bessie.grazeInField();
bessie.makeSound();
bessie.grazeInField();

lassie.dance();
lassie.makeSound(5);

