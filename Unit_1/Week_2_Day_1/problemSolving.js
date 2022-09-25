// Write a function called printGreeting with a parameter 'name' that returns a greeting with the argument interpolated into the greeting.

function printGreeting(name) {
  console.log(`Hey ${name}, how are you doing today?`);
}
printGreeting("Lance");

// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

function reverseWordOrder(str) {
  return str.split(" ").reverse().join(" ");
}

/*
Write a function called calculate.
This function should take three arguments, two numbers and a string.=
Name the parameters num1, num2, and operation.
If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
*/

function calculate(num1, num2, str) {
  switch (str) {
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mult":
      return num1 * num2;
    case "div":
      return num1 / num3;
    case "exp":
      return num1 ** num2;
  }
}

//Write a function printConsecutives that can take an array of any length, and print groups of three numbers where three consecutive numbers increase by 1.

const printConsecutives = function (someArray) {
  for (i in someArray) {
    let a = someArray[i];
    let b = someArray[parseInt(i) + 1];
    let c = someArray[parseInt(i) + 2];
    if (b === a + 1 && c === b + 1) {
      console.log(a, b, c);
    }
  }
};

//Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

const letterReverse = (str) => {
  str
    .split(" ")
    .map((element) => element.split("").reverse().join(" "))
    .join("  ");
}

const whoIsTheOwner = (name) => {
    return (item) => {
        console.log(`${name} is the owner of ${item}`)
    }
}

const theReturnedFunction = whoIsTheOwner("Alex")
console.log(theReturnedFunction())
theReturnedFunction("Many Cardigans")