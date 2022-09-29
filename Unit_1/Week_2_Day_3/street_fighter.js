class Fighter {
  constructor(name) {
    this.name = name;
    this.health = 10;
    this.strength = Math.floor(Math.random() * (10 - 5) + 5);
    this.defense = Math.floor(Math.random() * (6 - 3) + 3);
  }
}
//Initializing two fighter objects
let playerOne = new Fighter("Chuck Norris");
let playerTwo = new Fighter("Bruce Lee");

// Logging their stats
console.log(playerOne);
console.log(playerTwo);

// Function make to go through and have person one hit person two.
const attack = (fighterOne, fighterTwo) => {
  // Comparing offense and defense and applying proper damage
  if (fighterOne.strength > fighterTwo.defense) {
    let damage = fighterOne.strength - fighterTwo.defense;
    console.log(damage);
    // If health is knocked lower than 0, set health to 0
    fighterTwo.health = Math.max(0, fighterTwo.health - damage);
    console.log(
      `${fighterOne.name} did damage to ${fighterTwo.name} who is left with ${fighterTwo.health} health`
    );
  }

  //If fighter 2 is knocked out, return winners name. Else call function again with fighters reversed.
  if (fighterTwo.health === 0) {
    console.log(fighterOne.name);
    return fighterOne.name;
  } else {
    return attack(fighterTwo, fighterOne);
  }
};

// Calling attack function and logging winners namer
console.log("The winner is " + attack(playerOne, playerTwo));
