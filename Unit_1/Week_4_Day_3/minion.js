// Initial array of minions
const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  // forEach loop logging a message with the minions name 
  minions.forEach(function(minion){
    console.log(`This is ${minion} checking in.`)
  })

  // setting captializedMinions to a new array with names Captialized save for Kevin
let capitalizedMinions = minions.map((employee) => {
    // If employee is not equal to Kevin
    if(employee !== "kevin") {
        // Splitting the string into an array of letters
        let minionArray = employee.split("")
        //Taking first character in array and assigning it to the uppercase of that letter
        minionArray[0] = minionArray[0].toUpperCase();
        // Joining array back together into one string and returning it
        return minionArray.join("");
    } else {
        // Just returns all lowercase 'kevin'
        return employee;
    }
})
// console.log(capitalizedMinions);

// Assigning variable to the array filtered, 
// function= For every minion comare minions first letter to the uppcase version, return that comparison boolean
let actuallyCapitalizedMinions = capitalizedMinions.filter(minion => minion[0] === minion[0].toUpperCase());
// console.log(actuallyCapitalizedMinions)

// Assigning variable to the outcome/return of the every function
// function, see if first letter equals the captial version of that letter on ALL elements, return that boolean
let captialVerification = actuallyCapitalizedMinions.every((minion, index) => minion[0] === minion[0].toUpperCase())
// console.log(captialVerification)

// Function isCaptialized that takes a parameter of oneMinion
function isCaptialized(oneMinion) {
    // Returns the comparison if first letter of minion is equal to it's captial equivalent
    return oneMinion[0] === oneMinion[0].toUpperCase();
}

// setting variable to the boolean returned by comparing ALL elements to see if EVERY one met the requirement
let firstTest = capitalizedMinions.every((minion) => {
    // Calling the argument minion as a parameter for the previously created function to check for captialization 
    isCaptialized(minion)
});
// console.log(firstTest);

// Set variable to be the result of the following function with the parameter called name
let uncaptializedMinion = capitalizedMinions.find(function(name) {
    // Returns the !opposite result of 'isCaptialized' with name passed as an argument
    return !isCaptialized(name);
});
// console.log(uncaptializedMinion);

// Setting variable to the following, run findIndex on the array, for each minion see if it fails the isCaptialized check
let locator = capitalizedMinions.findIndex((minion) => !isCaptialized(minion));

// Using the index above to get the element that has the one not captalized, and creating an array out of their name
let minionArray = capitalizedMinions[locator].split('');

// In the above array, take first element and assign it to the captial version of itself
minionArray[0] = minionArray[0].toUpperCase();

// Assign that specic name in the array, to now be the above array joined together
capitalizedMinions[locator] = minionArray.join('');
// console.log(capitalizedMinions)

// setting variable to the boolean returned by comparing ALL elements to see if EVERY one met the requirement
let secondTest = capitalizedMinions.every((minion) => { return isCaptialized(minion)});
// console.log(secondTest);

// Setting variable to the new array by mapping each element to a new one representing sting length
const minionNameLength = capitalizedMinions.map((minion) => minion.length);

// Assigning variable to, array minionNameLength reduced by added each element to the counter
let sumOfNames = minionNameLength.reduce((counter, currentElement) => counter += currentElement)
console.log(sumOfNames);

// Assigning variable to, the boolean outcome if SOME of the elements in the minionNameLength are equal to or more than 6
let sixAndOver = minionNameLength.some(length => length >= 6);
// console.log(sixAndOver);

// Assigning variable to, the boolean outcome if SOME of the elements in the minionNameLength are equal to or more than 7
let sevenAndOver = minionNameLength.some(length => length >= 7);
// console.log(sevenAndOver);

//Setting kevins name in the array back to lower case (position stored in the 'locator' value from earlier)
capitalizedMinions[locator] = capitalizedMinions[locator].toLowerCase();
// console.log(capitalizedMinions);

// Setting variable to the return if SOME in the array have captial letters, using the function we created earlier
let someCaptialized = capitalizedMinions.some((minion) => isCaptialized(minion));
// console.log(someCaptialized);

// Setting variable to the return if SOME have lower case letters, using operator !(not) and the same previous function
let someLowercase = capitalizedMinions.some((minion) => !isCaptialized(minion));
// console.log(someLowercase);

// Setting variable to the return of sorting the list by the before string length and the after string length
let sortedByLength = capitalizedMinions.sort((before, after) => before.length - after.length)
// console.log(sortedByLength);