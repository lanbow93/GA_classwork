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
 /* what needs does your tamagotchi have?
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
const date = new Date()
const month = date.getUTCMonth()
const day = date.getUTCDate()
const year = date.getUTCFullYear();

const pet = {
  name: "Bob",
  weight: 1,
  age: .1,
  birthday: `${month}/${day}/${year}`,
  hungerLevel: 0,
  happinessLevel: 10,
  attentionLevel: 0,
  lifeStage: "Baby",

  description: function describe() {
    return (`A ${this.lifeStage} tamagotchi named ${this.name} born on ${this.birthday} weighing ${this.weight}lbs.`)
  }

} 

console.log(pet);
console.log(pet.description())

