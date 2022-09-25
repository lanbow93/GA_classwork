//----------------------------
//          Arrays
//----------------------------

// declare an array

const instructionalTeam = ["Alex", "Billie", "David", "Kyle", "Max", "Hisham"];

// log the array
console.log(instructionalTeam);

// access the first element
console.log(instructionalTeam[0]);

// edit a value
instructionalTeam[0] = "Alex Merced";
console.log(instructionalTeam);

// Array Methods
instructionalTeam.push("August"); // Adds to the end of an array
instructionalTeam.unshift("Amber"); // Adds to the beginning of an array
console.log(instructionalTeam);

instructionalTeam.pop(); // Removes last item in array
instructionalTeam.shift(); // Removes first item in array
console.log(instructionalTeam);

//Splice
// array.splice(whereToStartSplice, howManToRemove, itemsToAdd)

const nums = [1,5,6,7,3];
nums.splice(1,3,2);
console.log(nums);

//Looping over array

const pokemon = ["Pikachu", "Mew", "Snorlax"];
for (let counter = 0; counter < pokemon.length; counter += 1) {
    const poke = pokemon[counter]
    console.log(poke);
}

for (let poke of pokemon) {
    console.log(poke);
}

// Multi-Dimensionals
const arr = [1,2,[3,4,[5,6]],[7,8]]

//How to get the number 6
console.log(arr[2][2][1]);

//How to get the number 8
console.log(arr[3][1]);