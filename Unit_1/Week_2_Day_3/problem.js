function sayHello(name, day, morning) {
  let greeting = "";
  if (morning) {
    greeting = "Good Morning";
  } else {
    greeting = "Good Afternoon";
  }
  console.log(`Hello ${name},It is ${day}, ${greeting}`);
}
// sayHello("Lance", false);

/* Prompt 2
​
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 
 * Then, create an array of quotes. You can just list the quotes, or you can add other values like the person who said it, and when.
 * Set up a random number function that displays a random quote (and any add'l information you added) each time the file is run
 */
quotes = [
  "Be yourself; everyone else is already taken",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
];
randomQuoteNumber = Math.floor(Math.random() * quotes.length);

function printMessage(message) {
  console.log(`Today's message is: ${message}`);
}

//printMessage();
// printMessage(quotes[randomQuoteNumber]);

/* Prompt 3
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */


function reverseMessage(message){
    console.log(message.split("").reverse().join(""));
}
reverseMessage("We are together!");

/*
 * Prompt 4:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Try doing the same for Addition, Subtraction, Division, and anything involving Square Roots.
 * You may want to save all of these functions in a different file that you can use to create a JS calculator in once we learn DOM manipulation
 
 *If you've got this down, lets take a second and add in the Modulus operator that can tell us if a number is even or odd (or anything else about it)
 */

 function multiply(a, b) {
    if(!b) {
        console.log(a*2);
    } else {
        console.log(a*b);
    }
 }

 /*
 * Prompt 5
 *
 * Write a function that returns an object. The object can be anything.
 * 
 * Then, write a function that returns and logs an array of objects. The array can be of anything. Make it as simple or as complex as you would like
 * Have some fun and try using conditions, random numbers, and other JS tricks to get different objects from the array to log. 
 */

 function bringObj() {
    
 }

 /*
 * Prompt 6:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
let sum = 0

/*
 * Prompt 7:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */

/* Prompt 8:
 *
 * Write a function that takes a string and logs and returns an array of every word in
 * the string.
 */

/*
 * Prompt 13:
 *
* convert a function you have already written from an Expression to a Declaration, or vice versa
​
​
/** Starter Code */
testFunc()

/** Your Solution */
testFunc()

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
function add(a, b) {
  a + b
}

/** Your Solution */
function add(a, b) {
  a + b
}

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */