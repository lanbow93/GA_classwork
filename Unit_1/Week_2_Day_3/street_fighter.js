class Fighter {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.strength = Math.floor(Math.random() * (10 - 5) + 5);
        this.defense = Math.floor(Math.random() * (6 - 3) + 3);
    }
}
let playerOne = new Fighter("Chuck Norris");
let playerTwo = new Fighter("Bruce Lee");

console.log(playerOne);
console.log(playerTwo);

const attack = function (fighterOne, fighterTwo) {
    
    if(fighterOne.strength > fighterTwo.defense ) {
        let damage = fighterOne.strength - fighterTwo.defense;
        console.log(damage)
        fighterTwo.health = Math.max(0, (fighterTwo.health - damage));
        console.log(`${fighterOne.name} did damage to ${fighterTwo.name} who is left with ${fighterTwo.health} health`);
    }

    if(fighterTwo.health === 0) {
        console.log(fighterOne.name);
        return fighterOne.name;
    } else {
        attack(fighterTwo, fighterOne);
    }

}
console.log(attack(playerOne,playerTwo));

