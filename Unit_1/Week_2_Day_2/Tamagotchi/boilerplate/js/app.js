console.log("Hello World");
/*
Specifications
Create a repo for your tamagotchi pet
Create a Class (JS Class, look at your notes if your forget) for your tamagotchi
Instantiate your Tamagotchi
Display a character of your choice on the screen to represent your pet
Display the following metrics for your pet:
*/

// Urls for image references
const fallenYoshi = "https://www.nicepng.com/png/full/32-323685_images-is-love-wallpaper-and-background-photos-yoshi.png";
const fallenAlt = "Photo of pet fallen down";
const sadYoshi = "https://i.pinimg.com/originals/d6/c8/74/d6c874eee7176d367211daf954f0a555.png";
const sadAlt = "Photo of pet looking sad";
const happyYoshi = "https://static.wikia.nocookie.net/smashboards-social/images/3/39/YoshiMarioParty9.png";
const happyAlt = "Photo of pet looking happy";
const leavingYoshi = "https://ssb.wiki.gallery/images/thumb/2/29/Yoshi_SSB4.png/200px-Yoshi_SSB4.png";
const leavingAlt = "Photo of pet leaving"
const gameover = "https://dejpknyizje2n.cloudfront.net/marketplace/products/0812fa8272494839a2619fdcd45e9563.png";
const gameoverAlt = "Photo of skull and crossbones. The game over screen."

let time = new Date()
let month = time.getMonth() + 1;
let day = time.getDate();
let year = time.getFullYear();

const pet = {
  name: window.prompt("What is your pet's name"),
  hungerLevel: 0,
  attentionLevel: 10,
  happinessLevel: 10,
  lifeStage: "baby",  // Baby 0-3, Child 4-12 , Teen 13-19 , Adult 20-59, Senior 60+
  weight: 1,
  age: 0,
  birthday: `${month}/${day}/${year}`,
};

// Made to change day counter and background of counter
function newDay() {
  let timeOfDay = "";
  let spanColor = "";
  const daySpan = document.querySelector(".time");
  switch ((pet.age * 2) % 1){
    case (0):
      timeOfDay = "Morning";
      spanColor = "yellow";
      break;
    case (.25):
      timeOfDay = "Noon";
      spanColor = "orange";
      break;
    case (.50):
      timeOfDay = "Evening";
      spanColor = "blue"
      break;
    case (.75):
      timeOfDay = "Night";
      spanColor = "black";
      break;
    default:
      timeOfDay = "Twilight Zone";
      spanColor = "white";
      break;
  }
  daySpan.textContent = `Day ${Math.floor(pet.age * 2) + 1} ~|~ ${timeOfDay}`;
  daySpan.style.backgroundColor = spanColor;
}

// Baby 0-3, Child 4-12 , Teen 13-19 , Adult 20-59, Senior 60+
function updateLifeStage(){
  if (pet.age >= 60) {
    pet.lifeStage = "senior";
  } else if (pet.age >= 20) {
    pet.lifeStage = "adult";
  } else if (pet.age >= 13) {
    pet.lifeStage = "teen";
  } else if (pet.age >= 4) {
    pet.lifeStage = "child";
  } else {
    pet.lifeStage = "baby";
  }
}

const trackingTime = setInterval(timePassed, 500);
const timeCount = setInterval(timeMarker, 4000);

function timeMarker() {
  pet.hungerLevel += 1;
  pet.attentionLevel -= 1;
  pet.age += .125;
  pet.happinessLevel -= 1;
  updateLifeStage();
  newDay();

  console.log(pet);
}



// Function to remove all buttons from screen
function buttonElimination() {
  buttons = document.querySelectorAll("button");
  for (button of buttons) {
    button.style.display = "none";
  }
}

function timePassed() {
  if ((pet.hungerLevel > 3 && pet.hungerLevel < 6) || (pet.attentionLevel < 7 && pet.attentionLevel > 4) || (pet.happinessLevel < 7 && pet.happinessLevel > 4) ) {
    document
      .querySelector("img")
      .setAttribute("style", "background-color: yellow");
    document.querySelector("img").src = sadYoshi;
    document.querySelector("img").alt = sadAlt;
  } else if (pet.hungerLevel >= 6 || pet.attentionLevel <= 4 || pet.happinessLevel <= 4 ) {
    document
      .querySelector("img")
      .setAttribute("style", "background-color: red");
    document.querySelector("img").src = fallenYoshi;
    document.querySelector("img").alt = fallenAlt;
  } else {
    document
      .querySelector("img")
      .setAttribute("style", "background-color: green");
    document.querySelector("img").src = happyYoshi
    document.querySelector("img").alt = happyAlt;
  }

  if (pet.hungerLevel === 10) {
    clearInterval(trackingTime);
    clearInterval(timeCount);
    document.querySelector("img").src = gameover;

      document.querySelector("#conversation").innerHTML = `Your neglect has caused ${pet.name} to starve. </br> GAME OVER!`;
      buttonElimination();
      console.log("Game Over");
    } else if (pet.attentionLevel === 0 || pet.happinessLevel === 0) {
    clearInterval(trackingTime);
    clearInterval(timeCount);
    document.querySelector("img").src = leavingYoshi;
    document.querySelector("img").alt = leavingAlt;
    document.querySelector("#conversation").innerHTML =
      `Your lack of attention and care has caused ${pet.name} to leave. </br> GAME OVER!`;
    buttonElimination();
    console.log("gameover");
  }
}

//Function to feed pet

function feedPet(e) {
  let choice = e.target.id;
  switch (choice) {
    case "grass":
      pet.hungerLevel -= 1;
      pet.weight += 0.5;
      pet.happinessLevel -= 1;
      break;
    case "apple":
      pet.hungerLevel -= 2;
      pet.weight += 3;
      pet.happinessLevel += 1;
      break;
    case "watermelon":
      pet.hungerLevel -= 3;
      pet.weight += 5;
      pet.happinessLevel += 3;
      break;
    default:
      pet.hungerLevel += 1;
      break;
  }
}  

//Function to play with pet
function playPet(e) {
  let choice = e.target.id;
  switch (choice) {
    case "toy":
      pet.attentionLevel += 1;
      pet.happinessLevel += 1;
      pet.weight -= 1;
      break;
    case "walk":
      pet.attentionLevel += 2;
      pet.happinessLevel += 1;
      pet.weight -= 3;
      break;
    case "swim":
      pet.attentionLevel += 3;
      pet.happinessLevel += 1;
      pet.weight -= 5;
      break;
  }
}

document.querySelector("#speak").addEventListener("click", function(){
  //Function to allow pet to express needs
  needsStr = "";
  if (pet.hungerLevel > 3) {
    needsStr += "I am hungry. ";
  }
  if (pet.happinessLevel < 7) {
    needsStr += "I am unhappy. ";
  }
  if (pet.attentionLevel < 7) {
    needsStr += "I am bored";
  }
  if (needsStr === "") {
    needsStr = "I am doing just great!</br>Thanks for checking on me!";
  }
  document.querySelector("#conversation").innerHTML = needsStr;
})

// Changing buttons to food menu
document.querySelector("#food").addEventListener("click", function(){
  const initialButtons = document.querySelectorAll(".options");
  const endingButtons = document.querySelectorAll(".food");
  for (let i = 0; i < endingButtons.length; i += 1) {
    initialButtons[i].style.display = "none";
    endingButtons[i].style.display = "unset";
  }
})

// Changing buttons to play menu
document.querySelector("#play").addEventListener("click", function(){
  const initialButtons = document.querySelectorAll(".options");
  const endingButtons = document.querySelectorAll(".play");
  for (let i = 0; i < endingButtons.length; i += 1) {
    initialButtons[i].style.display = "none";
    endingButtons[i].style.display = "unset";
  }
})

// Returning buttons back to original state
document.getElementById("home").addEventListener("click", function(){
  const foodButtons = document.querySelectorAll(".food");
  const playButtons = document.querySelectorAll(".play");
  const endingButtons = document.querySelectorAll(".options");
  for (let i = 0; i < endingButtons.length; i += 1) {
    foodButtons[i].style.display = "none";
    playButtons[i].style.display = "none";
    endingButtons[i].style.display = "unset";
  }
})

// Click listener to get it to read out its information
document.querySelector("#info").addEventListener("click", function(){
  document.querySelector(
    "#conversation"
  ).innerHTML = `A ${pet.lifeStage} tamagotchi named ${pet.name} born on ${pet.birthday} weighing ${pet.weight}lbs. They are currently ${pet.age} virtuals old. `;
})

document.querySelector("#toy").addEventListener("click", playPet);
document.querySelector("#walk").addEventListener("click", playPet);
document.querySelector("#swim").addEventListener("click", playPet);

document.querySelector("#grass").addEventListener("click", feedPet);
document.querySelector("#apple").addEventListener("click", feedPet);
document.querySelector("#watermelon").addEventListener("click", feedPet);