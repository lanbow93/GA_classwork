randomsAttack = 

class Fighter {
  constructor(name) {
    this.name = name;
    this.health = 10;
    this.strength = Math.floor(Math.random() * (10 - 5) + 5);
    this.defense = Math.floor(Math.random() * (10 - 5) + 5);
  }
}
//Initializing two fighter objects
let playerOne = new Fighter("Chuck Norris");
let playerTwo = new Fighter("Bruce Lee");

// Making sure strength/defense pairings don't cause infinite loop
let flag = true;
while (flag) {
  if (
    playerOne.strength > playerTwo.defense ||
    playerTwo.strength > playerOne.defense
  ) {
    flag = false;
  } else {
    playerOne = new Fighter("Chuck Norris");
    playerTwo = new Fighter("Bruce Lee");
  }
}

// Function make to go through and have person one hit person two.
const attack = (fighterOne, fighterTwo) => {
  // Comparing offense and defense and applying proper damage
  if (fighterOne.strength > fighterTwo.defense) {
    let damage = fighterOne.strength - fighterTwo.defense;
    // If health is knocked lower than 0, set health to 0
    fighterTwo.health = Math.max(0, fighterTwo.health - damage);
    console.log(
      `    ${fighterOne.name} did ${
        fighterOne.strength - fighterTwo.defense
      } damage to ${fighterTwo.name} who is left with ${
        fighterTwo.health
      } health`
    );
  } else {
    console.log(
      `                 ${fighterOne.name} has an attack strengh of ${fighterOne.strength}.\nThey are too weak to take on the the mighty ${fighterTwo.name} with a defene of ${fighterTwo.defense}`
    );
  }
  console.log(
    `           ${playerOne.name} Health: ${playerOne.health}   ${playerTwo.name} Health: ${playerTwo.health}\n`
  );

  //If fighter 2 is knocked out, return winners name. Else call function again with fighters reversed.
  if (fighterTwo.health === 0) {
    return fighterOne.name;
  } else {
    return attack(fighterTwo, fighterOne);
  }
};

// Calling attack function and logging winners namer
console.log(
  "                      The winner is " + attack(playerOne, playerTwo)
);
