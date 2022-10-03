class Animal{
    constructor(phylum){
        this.phylum = phylum
    }

    walk() {
        console.log("moved from point a to point b");
    }
}

class Mammals extends Animal {
    constructor(phylum) {
        super(phylum)
    }
}

const meow = new Mammals("mammal");

class Fish extends Animal{
    constructor(phylum){
        super(phylum)
    }
    walk() {
        console.log("I cannot walk. I will swimm...");
    }
}

// Many ways
meow.walk();
const goldfish = new Fish("fish");
goldfish.walk();