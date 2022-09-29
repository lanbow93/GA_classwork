//-------------------------------
//           OBJECTS
//-------------------------------

const arr = [1,2,3,4,];

const Lance = {
    name: "Lance B",
    favoriteHobby: "coding",
    isFun: true,

    myGreeting() {
        console.log(`${this.name} says hello`);
    },
}
Lance.myGreeting();

const Sam = {
    name: "Sam",
    age: 29,
    isTall: false
}

const people = [Lance, Sam]

console.log(Lance.name)

// Robot

const key = "weapon";

const robot = {
    name: "Dalek Caan",
    serial: 1,
    isEvil: false,
    ["gas tank"]: "full",
    [key]: "Lazers",

};
console.log(robot);
console.log(robot.name); // Access prop via dot
console.log(robot["gas tank"]); // Access pro via dot
console.log(robot.weapon);

// using objects to count strings

function countStrings(arr){

    const obj = {}

    for (let word of arr){
        if(obj[word]){
            obj[word] += 1
        } else {
            obj[word] = 1
        }
    }

    return obj

}

console.log(countStrings(["dog", "dog", "cat"]))

// Adding keys after object was created

const you = {}

you.name = "Alex Merced"
you.age = 37

console.log(you)