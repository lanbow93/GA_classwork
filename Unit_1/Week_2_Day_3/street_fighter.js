class Fighter {
    constructor(name) {
        this.name = name;
        this.health = Math.floor(Math.random() * (11 - 5) + 5);
        this.strength = Math.floor(Math.random() * (11 - 5) + 5);
        this.defense = Math.floor(Math.random() * (11 - 5) + 5);
    }
}
