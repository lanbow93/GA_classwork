console.log("Hello World");
/*
- name
- weight
- age
- birthday
- description
- hungerLevel
- happinessLevel
- attentionLevel
- lifeStage // Baby, Child, Teen, and Adult

Specifications
Create a repo for your tamagotchi pet
Create a Class (JS Class, look at your notes if your forget) for your tamagotchi
Instantiate your Tamagotchi
Display a character of your choice on the screen to represent your pet
Display the following metrics for your pet:
Hunger (1-10 scale)
Sleepiness (1-10 scale)
Boredom (1-10 scale)
Age
- isHungry
- wantsToPlay
- isHappy
- needsAttention
Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
Add the ability to name your pet.

Style the page.
Increase your pet's age every x minutes
Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
You pet should die if Hunger, Boredom, or Sleepiness hits 10.
eat() {
 feeding should satisfy hunger, depending on what you feed it, and may increase weight
 grass, meat, tofu, bread, candy, etc…

}
speak() {
 Care/* what needs does your tamagotchi have?
}
play() {
  playing with your tamagotchi should increase happiness, satisfy need for attention, and may decrease weight
}
tamagotchi.age // 0
tamagotchi.birthday // today's date
tamagotchi.weight // 1 
tamagotchi.description // 'A <lifeStage> tamagotchi named <name> born on <birthday> weighing <weight>'
tamagotchi.speak() // 'Mesutchi is <some state>'
*/
let time = new Date()
let month = time.getMonth() + 1;
let day = time.getDate();
let year = time.getFullYear();

const trackingTime = setInterval(timePassed, 500);
const timeCount = setInterval(timeMarker, 2000);
const nameOfPet = window.prompt("What is your pet's name");
const pet = {
  name: nameOfPet,
  hungerLevel: 0,
  happinessLevel: 10,
  attentionLevel: 10,
  lifeStage: "baby",  // Baby 0-3, Child 4-12 , Teen 13-19 , Adult 20-59, Senior 60+
  weight: 1,
  age: 0,
  birthday: `${month}/${day}/${year}`,
};

function timeMarker() {
  pet.hungerLevel += 1;
  pet.attentionLevel -= 1;
  pet.age += 0.25;
  pet.happinessLevel -= 1;

  console.log(pet);
}
function timePassed() {
  // pet.hungerLevel += 1;
  // pet.attentionLevel -= 1;
  // pet.age += 0.25;
  // pet.happinessLevel -= 1;

  // console.log(pet);

  // KO Yoshi - https://www.nicepng.com/png/full/32-323685_images-is-love-wallpaper-and-background-photos-yoshi.png
  // Sad Yoshi - https://i.pinimg.com/originals/d6/c8/74/d6c874eee7176d367211daf954f0a555.png
  // Happy Yoshi - https://static.wikia.nocookie.net/smashboards-social/images/3/39/YoshiMarioParty9.png
  // Leaving Yoshi - https://ssb.wiki.gallery/images/thumb/2/29/Yoshi_SSB4.png/200px-Yoshi_SSB4.png
  // Gameover - https://dejpknyizje2n.cloudfront.net/marketplace/products/0812fa8272494839a2619fdcd45e9563.png

  if (pet.hungerLevel > 3 && pet.hungerLevel < 6) {
    document
      .querySelector("img")
      .setAttribute("style", "background-color: yellow");
    document.querySelector("img").src =
      "https://i.pinimg.com/originals/d6/c8/74/d6c874eee7176d367211daf954f0a555.png";
  } else if (pet.hungerLevel >= 6) {
    document
      .querySelector("img")
      .setAttribute("style", "background-color: red");
    document.querySelector("img").src =
      "https://www.nicepng.com/png/full/32-323685_images-is-love-wallpaper-and-background-photos-yoshi.png";
  } else {
    document
      .querySelector("img")
      .setAttribute("style", "background-color: green");
    document.querySelector("img").src =
      "https://static.wikia.nocookie.net/smashboards-social/images/3/39/YoshiMarioParty9.png";
  }

  if (pet.hungerLevel === 10) {
    clearInterval(trackingTime);
    clearInterval(timeCount);
    document.querySelector("img").src =
      "https://dejpknyizje2n.cloudfront.net/marketplace/products/0812fa8272494839a2619fdcd45e9563.png";

      document.querySelector("#conversation").innerHTML =
      `Your neglect has caused ${pet.name} to starve. </br> GAME OVER!`;
      if (document.querySelector("#one").innerHTML === "Some Grass") {
        document.querySelector("#talk").removeEventListener("click", speak);
        document.querySelector("#one").removeEventListener("click", feedPet);
        document.querySelector("#two").removeEventListener("click", feedPet);
        document.querySelector("#three").removeEventListener("click", feedPet);
        document.querySelector("#home").removeEventListener("click", returnHome);
      } else if (document.querySelector("#one").innerHTML === "Give Toy") {
        document.querySelector("#talk").removeEventListener("click", speak);
        document.querySelector("#one").removeEventListener("click", playPet);
        document.querySelector("#two").removeEventListener("click", playPet);
        document.querySelector("#three").removeEventListener("click", playPet);
        document.querySelector("#home").removeEventListener("click", returnHome);
      } else {
        document.querySelector("#talk").removeEventListener("click", speak);
        document.querySelector("#home").removeEventListener("click", returnHome);
        document.querySelector("#one").removeEventListener("click", describe);
        document.querySelector("#two").removeEventListener("click", toPlay);
        document.querySelector("#three").removeEventListener("click", toFood);
      }

    console.log("Game Over");
  } else if (pet.attentionLevel === 0) {
    clearInterval(trackingTime);
    clearInterval(timeCount);
    document.querySelector("img").src =
      "https://ssb.wiki.gallery/images/thumb/2/29/Yoshi_SSB4.png/200px-Yoshi_SSB4.png";
    document.querySelector("img").alt =
      "Photo of pet leaving";
    document.querySelector("#conversation").innerHTML =
      `Your lack of attention has caused ${pet.name} to leave. </br> GAME OVER!`;

    //Removing the option to do anything after game over.
    if (document.querySelector("#one").innerHTML === "Some Grass") {
      document.querySelector("#talk").removeEventListener("click", speak);
      document.querySelector("#one").removeEventListener("click", feedPet);
      document.querySelector("#two").removeEventListener("click", feedPet);
      document.querySelector("#three").removeEventListener("click", feedPet);
      document.querySelector("#home").removeEventListener("click", returnHome);
    } else if (document.querySelector("#one").innerHTML === "Give Toy") {
      document.querySelector("#talk").removeEventListener("click", speak);
      document.querySelector("#one").removeEventListener("click", playPet);
      document.querySelector("#two").removeEventListener("click", playPet);
      document.querySelector("#three").removeEventListener("click", playPet);
      document.querySelector("#home").removeEventListener("click", returnHome);
    } else {
      document.querySelector("#talk").removeEventListener("click", speak);
      document.querySelector("#home").removeEventListener("click", returnHome);
      document.querySelector("#one").removeEventListener("click", describe);
      document.querySelector("#two").removeEventListener("click", toPlay);
      document.querySelector("#three").removeEventListener("click", toFood);
    }
    console.log("gameover");
  }
}

//Function to feed pet

function feedPet(e) {
  let choice = e.target.id;
  //1. Grass 2. Apples 3. Watermelon
  switch (choice) {
    case "one":
      pet.hungerLevel -= 1;
      pet.weight += 0.5;
      pet.happinessLevel += 1;
      break;
    case "two":
      pet.hungerLevel -= 2;
      pet.weight += 3;
      pet.happinessLevel += 1;
      break;
    case "three":
      pet.hungerLevel -= 3;
      pet.weight += 5;
      pet.happinessLevel += 3;
      break;
    default:
      pet.hungerLevel += 1;
      break;
  }
}

//Function to allow pet to express needs
function speak() {
  //hunger happy attention
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
  document.querySelector("#conversation").innerHTML = needsStr;
}

//Function to play with pet
function playPet(e) {
  let choice = e.target.id;
  switch (choice) {
    case "one":
      pet.attentionLevel += 1;
      pet.happinessLevel += 1;
      pet.weight -= 1;
      break;
    case "two":
      pet.attentionLevel += 2;
      pet.happinessLevel += 1;
      pet.weight -= 3;
      break;
    case "three":
      pet.attentionLevel += 3;
      pet.happinessLevel += 1;
      pet.weight -= 5;
      break;
  }
}

function describe() {
  document.querySelector(
    "#conversation"
  ).innerHTML = `A ${pet.lifeStage} tamagotchi named ${pet.name} born on ${pet.birthday} weighing ${pet.weight}lbs.`;
}

// <button id="talk">Speak</button>
// <button id="one">Pet Info</button>
// <button id="two">Play Time</button>
// <button id="three">Feed Pet</button>

function toFood() {
  //Removing old event listeners to prepare for food options

  document.querySelector("#one").removeEventListener("click", describe);
  document.querySelector("#two").removeEventListener("click", toPlay);
  document.querySelector("#three").removeEventListener("click", toFood);
  //Reassigning button text align with food options
  document.querySelector("#one").innerHTML = "Some Grass";
  document.querySelector("#two").innerHTML = "An Apple";
  document.querySelector("#three").innerHTML = "A Watermelon";
  //setting new click listeners to actually run petFeed function
  document.querySelector("#one").addEventListener("click", feedPet);
  document.querySelector("#two").addEventListener("click", feedPet);
  document.querySelector("#three").addEventListener("click", feedPet);
}
function toPlay() {
  //Removing old event listeners to prepare for food options

  document.querySelector("#one").removeEventListener("click", describe);
  document.querySelector("#two").removeEventListener("click", toPlay);
  document.querySelector("#three").removeEventListener("click", toFood);
  //Reassigning button text and IDS to align with food options
  document.querySelector("#one").innerHTML = "Give Toy";
  document.querySelector("#two").innerHTML = "Go Walking";
  document.querySelector("#three").innerHTML = "Go Swimming";
  //setting new click listeners to actually run petFeed function
  document.querySelector("#one").addEventListener("click", playPet);
  document.querySelector("#two").addEventListener("click", playPet);
  document.querySelector("#three").addEventListener("click", playPet);
}

//What happens wwhen home button is clicked
function returnHome() {
  if (document.querySelector("#one").innerHTML === "Some Grass") {
    document.querySelector("#one").removeEventListener("click", feedPet);
    document.querySelector("#two").removeEventListener("click", feedPet);
    document.querySelector("#three").removeEventListener("click", feedPet);
  } else {
    document.querySelector("#one").removeEventListener("click", playPet);
    document.querySelector("#two").removeEventListener("click", playPet);
    document.querySelector("#three").removeEventListener("click", playPet);
  }

  //Setting innerHTML of button back to their original names
  document.querySelector("#one").innerHTML = "Pet Info";
  document.querySelector("#two").innerHTML = "Play Time";
  document.querySelector("#three").innerHTML = "Feed Pet";

  //Setting original clicklisteners back
  document.querySelector("#one").addEventListener("click", describe);
  document.querySelector("#two").addEventListener("click", toPlay);
  document.querySelector("#three").addEventListener("click", toFood);
}

document.querySelector("#talk").addEventListener("click", speak);
document.querySelector("#one").addEventListener("click", describe);
document.querySelector("#two").addEventListener("click", toPlay);
document.querySelector("#three").addEventListener("click", toFood);
document.querySelector("#home").addEventListener("click", returnHome);
