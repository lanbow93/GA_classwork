//----------------------------
//       Control Flow
//----------------------------

// If statements
// If *expression) {true} else {false}

// if (3 > 3) {
//     console.log("Hello");
// } else {
//     console.log("Goodbye");
// }

// 5 > 3 ? console.log("Hello") : console.log("Goodbye");

// Everything is true except: 0, "", false, null, undefined, Nan

//----------------------------
//          Loops
//----------------------------

// while
// while (expression) { repeat this code as long as expression is true}

let counter = 0;

while (counter < 10) {
    console.log("Counter is now:", counter)
    counter += 1;
}

//For Loop
// for(declare counter; expression; increment)
// for (let counter = 0; counter < 10; counter += .5) {
//     console.log(counter);
// }

for (let i = 0; i < 100; i += 3) {
    if (i % 2 === 0) {
        console.log(i);
    }
}