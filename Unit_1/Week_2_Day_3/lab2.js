const tom = {
    name: "Bulbasaur",
    weight: 100,
    age: 1,
    birthday: "09/28/2021",
    description: "grass type",
    hungerLevel: 5,
    happinessLevel: 5,
    attentionLevel: 5,
    lifeStafe: "Baby", //Baby, Chile, Teen or Adult
    isHungry: false,
    isHappy: true,
    isWantingToPlay: false,
    isNeedingAttention: false,
    // Inital declarion of function called 'eat'
    eat: function (food) {
        // Switch is similar to 'if' 
        switch(food) {
            // If staments in brackets above equals meat
            case ("meat"): 
                // Calling "this" specific object hunger level above, and removing two from it 
                this.hungerLevel -= 2;
                // Adding two to "this" specific object's weight
                this.weight += 2;
            // If statements in brackets above equals 
            case ("tofu"): 
                this.hungerLevel -= 1;
                this.weight += 1;
            // If none of the cases above are treu
            // Switches version of the work "else"
            default:
                console.log("Invalid Option");
        }
    }
}
// Calling the object tom and running the method 'eat' insoide
tom.eat();