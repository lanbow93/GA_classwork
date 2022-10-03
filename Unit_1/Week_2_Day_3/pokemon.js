class Pokemon {
  constructor(name, type, moveSet) {
    this.name = name;
    this.type = type;
    this.moveSet = moveSet;
  }
  attack(moveName) {
    
    return `${this.name} attacked with the move ${this.moveSet[moveName]}`;
  }
}

const bulbasaur = new Pokemon("Bulbasaur", "Grass", [
  "vine whip",
  "razor leaf",
  "headbutt",
  "solarbeam"
]);

const squirtle = new Pokemon("Squirtle", "Water", [
  "water gun",
  "tackle",
  "screech",
  "bubble beam"
]);

 console.log(bulbasaur.attack(2));
 console.log(squirtle.attack(0));
