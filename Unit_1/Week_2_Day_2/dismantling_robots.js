const brokenRobot = {
    part1: "arm",
    part2: "lazer",
    part3: "wheels"
}


// const part1 = brokenRobot.part1;
// const part2 = brokenRobot.part2;
// const part3 = brokenRobot.part3;

// const { part1, part2, part3} = brokenRobot;

const { part1, ...theRest} = brokenRobot;

console.log(part1, theRest)

//iffe—immediately invoked function, declaring a function and calling it immediately
(() => {console.log("Hello!") })();