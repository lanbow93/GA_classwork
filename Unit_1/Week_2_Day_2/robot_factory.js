const RobotEmpire = {
    // Army array holds all the robots created
    army: [],
    // The RobotEmpires build method creates a new robot and adds it to the army array
    build: function(){
        // create a new robot
        while (this.army.length < 100) {
        const newRobot = {
                name: `Robot Soldier ${this.army.length}`,
                serial: this.army.length,
                weapon: "Lazers",
                attack: function(){
                console.log(`${this.name} attacks with its ${this.weapon}`)
                    }
                }
        // push the newly created robot into the army array
        this.army.push(newRobot)
        }
    },
    //Function to make even serials attack
    legionAttack(){
        this.army.forEach(element => {
            if(element.serial % 2 === 0) {
                element.attack();
            }
        });

    }
}
/*
Take 5 minutes and try to do the following with our RobotEmpire object

use loops to generate 100 Robot Soldiers
use a for of loop to loop through the Robot Army, if their serial is even have them attack
*/

RobotEmpire.build()
RobotEmpire.legionAttack();