//----------------------------------
//            Functions
//----------------------------------

// parameters are used in the declaration
const nameAPony = (name, name2) => {
    console.log(`The name of my pony is ${name} ${name2}`);
}

// Each invocation, can pass an argument

nameAPony("Bob","Hope");
nameAPony("Charlie", "Sheen");
nameAPony("Susie", "Carmichael");

// default values
const logTheThing = (stuff = "Hello World") => {console.log(stuff)};

logTheThing("STUFF");
logTheThing();