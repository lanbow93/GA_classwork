//Function to alternate the title between red and purple when clicked
function beenClicked() {
  let titleElement = document.querySelector("h1");
  let test = getComputedStyle(titleElement).getPropertyValue("color");

  if (test === "rgb(138, 43, 226)") {
    document.querySelector("h1").setAttribute("style", "color: red");
  } else {
    document.querySelector("h1").setAttribute("style", "color: blueviolet");
  }
}

document.querySelector("h1").addEventListener("click", beenClicked);


// getElementByID methods is the most efficient way to select a DOM element, provided it has an id
 let titleEle = document.getElementById('title');
 // console.log(titleEle);
 // console.dir(titleEle); //console.dir() prints a list of properties that object has to be used

const pE1 = document.querySelector(".cool")

pE1.innerHTML = "Comments for <strong>Today</strong>";
console.log(pE1.innerHTML);
// Uncomment below to see what happens when using textContent vs 
//pE1.textContent = "Comments for <strong>Today</strong>";

// Hot to change css of an element
titleEle.style.backgroundColor = "blue";
pE1.style.textAlign = "center";


//Assigning hyper link to text after the element has been created in index.html
document.querySelector('a').href = "https://www.google.com";

// console.log(pE1);

//Review Questions

// ❓ If we want to change the text (no HTML) inside of a <div>, what property should we set?
// document.querySelector('div Id_Class').textContent = "Whatever we want";
// ❓ How many DOM elements are returned by the querySelectormethod?
// querySelector() returns one & querySelectorAll() returns one or multiple given the initial consiion 
// ❓ What DOM element property is used to style a DOM element?
// "style" ex. document.queryElement('h1').style.

// Below selects multiple elements 
const exampleOne = document.getElementsByTagName("li");
const exampleTwo = document.getElementsByClassName("comment");

const commentElements = document.querySelectorAll(".comment");
console.log("The comment Element look like:");
console.log(commentElements);

console.log("Iterating over collection of elements:");
for (let commentElement of commentElements) {
  commentElement.style.fontSize = "30px";
  //commentElement.setAttribute("style", "font-size: 30px");
  console.log(commentElement);
}

/*
Final Questions
❓ What method is the most efficient for selecting an element that has an id?

document.getElementById("InsertIdHere")

❓ If we wanted to grab all of the content (including its nested elements) of an element, what property on that element would we use?

document.querySelectorAll("Insert Class/Tag here")

❓ If you had to pick only one method to select DOM elements with during your career as a developer, which one should you choose?

document.querySelector("Insert #ID/.Class/tag here")

❓ Which property on DOM elements is used to set the CSS properties for that element?
document.ELEMENT.style
*/



/* -----------------------------------------
HOMEWORK DOM MENU LAB PART 1 of 2
--------------------------------------------
https://codesandbox.io/s/dom-menu-lab-rndnhn?file=/js/script.js
