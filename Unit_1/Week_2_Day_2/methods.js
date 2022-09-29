//-----------------------------------------
//  Methods (Functions inside of objects)
//-----------------------------------------

const obj = {
    prop: "Hello World",
    // Method #1 Unable to use `this` with arrow functions 
    myFunc: () => {
        console.log("Can I use this: " + this.prop);
    },
    // Method #2 Is able to use the `this` keyword
    myFunc2: function() {
        console.log(this);
        console.log("Can I use this: " + this.prop)
    },
    //Method #3 is also able to use 'this' keyword
    myFunc3() {
        console.log(this);
        console.log("Can I use this: " + this.prop);

    }
}

obj.myFunc();
obj.myFunc2();
obj.myFunc3();

// Creating objects in loops

// Array to hold are robot objects
const robots = []

// Create 100 robots
for(let count = 0; count < 100; count += 1) {
    robots.push({
        name: `Evil Robot ${count}`,
        serial: count,
        attack: function() {
            console.log("Exterminaaaate!");
        }
    }

    )
}

//Only even robots attack
for(let robot of robots) {
    robot.serial % 2 === 0 ? robot.attack() : console.log("Stand down"); 
}
console.log(robots);