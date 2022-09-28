console.log("The Maze");

let host = {
    name: "Dorothy",
    occupation: "Farm Girl",
    saysSpecs() {
        console.log(`My name is ${this.name}. My occupation is ${this.occupation} `);
    }
}

class BasicHost {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    saySpecs() {
        console.log(`My name is ${this.name}. My occupation is ${this.occupation} `);
    }
}

let host1 = new BasicHost("Roget", "creator of Roget's Thesaurus");
console.log(host1);

let host2 = new BasicHost('Maeve', "Owner of fine establishment");
console.log(host2);

let host3 = new BasicHost("Arnold", "Co-Founder of Westworld");
console.log(host3);

let host4 = new BasicHost("William", "Executive Vice President");
console.log(host4);

const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
]; //20

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ]; //14

let hostArray = [];

for (let i = 0; i < 100; i += 1) {
    let randomName = names[(Math.floor(Math.random() * 20))];
    let randomJob =  occupations[(Math.floor(Math.random() * 14))];
    hostArray.push(new BasicHost(randomName,randomJob));
}

console.log(hostArray);
hostArray[55].saySpecs()

