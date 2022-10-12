function electricMixer(attachment) {
    console.log("This mixer is now " + attachment());
    return attachment;
}

const spiralizer = () => {
    return "sprializing";
}

const pureeMaker = () => {
    return "smashing and squashing"
}

electricMixer(spiralizer);
electricMixer(pureeMaker);

function wordReverse(str) {
    return str.split(' ').reverse().join(' ');
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function repMaster (someInput, someFunction) {
    return someFunction(someInput) + " proves that I am the rep MASTER!";
}
console.log(repMaster("Never give your heart to a blockhead", wordReverse));
console.log(repMaster("I finished this practice", toUpperCase));

let testArray = [0,1,1,2,2,3,4,5,7,63,1,4,7,11,7 ]
// 0,1,2,3,4,5,7,63,11  || 0(1) 1(3) 2(2) 3(1) 4(2) 5(1) 7(3) 63(1) 11(1) 

function count(someArray) {
    let counter = 0;
    for (element of someArray) {
        if (someArray.indexOf(element) === someArray.lastIndexOf(element)) {
            counter++;
        }
    }
    return counter
}

function unique(someArray) {
    return someArray.filter(element => someArray.indexOf(element) === someArray.lastIndexOf(element));
}

console.log(unique(testArray));
