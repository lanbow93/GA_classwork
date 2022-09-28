// Encapsulation: abstracting an idea into a defined construct
// Inheritance: being able extend constructs to add functionality
// Polymorphism: The idea that one construct can be used in many ways

//define a new class
class Animal {
    //Define the constructor function to define object properties
    constructor(sound, ears, legs) {
        this.sound = sound;
        this.ears = ears;
        this.legs = legs;
    }

    makeSound() {
        console.log(this.sound)
    }
}

// Use polumorphism to use the class to create different things
const dog = new Animal("bark", 2, 4);
const pig = new Animal("oink", 2, 4);
const cow = new Animal("moo", 2, 4);

console.log(dog, pig, cow);
dog.makeSound();
pig.makeSound();
cow.makeSound();

// Making a pig class that INHERITS from animal (Inheritance)
class Pig extends Animal {
    constructor(name) {
        //invoking parent constructor with set values 
        super("oink", 2, 4);
        this.name = name;
    }
    //New method
    rollInMud() {
        console.log(`${this.name} rolls in mud and says ${this.sound}!`);
    }

    //Overridden method
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

//Instantiate Instance of the new Pig Class
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