// Get the button in a variable
const firstButton = document.querySelector(".click-events button");
console.log(firstButton);

// Add a click event - method #1
// firstButton.onclick = function() {
//   alert("Old-school click listener")
// }

function handleClick() {
  alert("Don't touch my button")
}

// Add a clickEvent  - method #2
firstButton.addEventListener("click", handleClick)

// Store block in variables
const black = document.querySelector(".bubble");
const pink = document.querySelector(".bubble div");

console.log(black);
console.log(pink);

black.addEventListener("click", function(){
  console.log("black");
})

pink.addEventListener("click", function(event){
  event.stopPropagation() // Prevents bubbling 
  console.log("pink");
})

// Keyboard events
window.addEventListener("keydown", function(event){
  console.log(event)
  if(event.altKey && event.ctrlKey && event.key === "g")
  alert("You did the thing")
})

//Handling Form Submit events
const form = document.querySelector("form")
const input = document.querySelector("input[type ='text']")

form.addEventListener("submit", function(event){
  event.preventDefault(); // <-- Prevents refresh 
  console.log(input.value);
})