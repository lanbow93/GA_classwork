class Animal {
    constructor(sound,ears,legs) {
        this.sound = sound
        this.ears = ears;
        this.legs = legs;
    }

makeSound() {
    console.log(this.sound);
}
}

// New Pig Class inherits from Animal
class Pig extends Animal {

        // Define static property
        static count = 0;

        constructor(name) {
            // Invoking the parent constructor with set values
            super("Oink", 2, 4);
            this.name = name;
            // Increment static property when each pig is created
            Pig.count++;
        }

        // New method
        rollInMud() {
            console.log(`${this.name} rolls in mud and says ${this.sound}`);
        }

        makeSound(){
            console.log(`${this.name} says ${this.sound}`);
        }

        // Method used to count total amount of Pigs created with this class
        static countPigs(){
            return Pig.count;
        }
}

const pig1 = new Pig("1")
const pig2 = new Pig("2")
const pig3 = new Pig("3")

// Invoking the static method
console.log(Pig.countPigs());