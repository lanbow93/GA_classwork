//----------------------------------
//            Functions
//----------------------------------

helloWorld()

// Defining a function (3 ways)
// Function Declaration (hoisted) can be used before declared
function helloWorld() {
    console.log("Hello World");
}

helloWorld();

//Function Exspression (not hoisted)
const helloWorld2 = function () {
    console.log("Hello World 2")
}
helloWorld2();

//Arrow Function (not hoisted)

const helloWorld3 = () => {console.log("Hello World 3")};

helloWorld3();