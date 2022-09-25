const brokenRobot = {
    part1: "arm",
    part2: "lazer",
    part3: "wheels"
}

const {part1, ...theRest} = brokenRobot;

console.log(part1, theRest)