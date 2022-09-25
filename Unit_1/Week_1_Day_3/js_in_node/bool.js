//----------------------------
//     Boolean Operators
//----------------------------

const a = 5;
const b = 8;

// Equality
console.log(a === b); // strict equality
console.log(a == b); // loose equality

console.log(a === "5"); // false
console.log(a == "5"); // true

// Inequality
console.log(a !== b); // strict inequality
console.log(a != b); // loose inequality

console.log(a !== "5"); // true
console.log(a != "5"); // false

// Greater/Less than
console.log ("Less/Greater than");
console.log(a < b); // less than
console.log(a <= b); // less than or equal to 
console.log(a > b); // greater than
console.log(a >= b); // greater than or equal to 

//  Compound Operations
console.log("Compound Operations");
console.log(a < b && a > b); // false
console.log(a < b || b > a); // true

const c = a < b && a > b;
console.log(c);