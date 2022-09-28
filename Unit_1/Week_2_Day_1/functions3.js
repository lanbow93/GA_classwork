//----------------------------------
//     Functions Return Values
//----------------------------------
// Parameters/Args => send stuff into a function
// return values => stuff sent out of the function
// Can only return one value
// The functions stops once it returns a value

const buyAPony = (name) => {
  return {
    name,
    ride: () => console.log("You are riding a pony"),
  };
};

const myPony = buyAPony("Lightning");
console.log(myPony);
myPony.ride();

// another example

const returnsSomething = () => {return 1}
const returnNothing = () => {}

const resultSomething = returnsSomething()
const resultNothing = returnNothing()

console.log(resultSomething)
console.log(resultNothing)

// I want to add two numbers and then square

const addSquare = (num1, num2) => {
    return (num1 + num2)**2
}

const result = addSquare(2,2)

console.log(result)

const addNums = (x,y) => {return x + y}
const squareNum = (x) =>  {return x**2}

const result2 = squareNum(addNums(2,2))

console.log(result2)