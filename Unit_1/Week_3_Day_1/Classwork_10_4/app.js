console.log("External file");

// Adding a DOM node to a variable
const p = document.querySelector("p")

// Edit the text of node
p.innerText = "I am the new text";
console.dir(p)

// Select a node based on it's class
const gh1 = document.querySelector(".green");
console.log(gh1);

// Setting stules directly
gh1.style.color = "green";
gh1.style.backgroundColor = "pink";

// Select a node based on it's ID
const rh1 = document.querySelector("#red");
console.log(rh1);

// Setting the classes on a node
rh1.classList.add("blue");

// create an img and set its source attribute
const img = document.createElement("img");
console.log(img);

img.setAttribute("src", "https://the-take.com/images/uploads/screenprism/_constrain-480w/doctorwho_s05_e00_21_tardis__x-large.jpg");
p.append(img)

console.log(img)
console.dir(img)

// Select all the lis
const lis = document.querySelectorAll("li");
console.log(lis);

// looping over items in an array to create notes
const chipmunks = ["Alvin", "Theodore", "Simon"]

const ul = document.querySelector("ul")

for (const chipmunk of chipmunks){
    const newLi = document.createElement("li")
    newLi.innerText = chipmunk
    ul.append(newLi)
}
