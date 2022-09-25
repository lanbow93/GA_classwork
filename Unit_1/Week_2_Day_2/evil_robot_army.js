const key = "weapon";
const robot  = {
    name: "Dalek Caan",
    serial: 1,
    isEvil: false,
    ["Gas Tank"]: "FUll",
    [key]: "Lazers",
    speak: () => {
        console.log("Exterrrrrminate");
    },
    myAttack(victim) {
        console.log(`${this.name} attacks ${victim} with its ${this.weapon}`)
    }
};

robot.speak();
//console.log(robot);

console.log(robot.name)
console.log(robot["Gas Tank"])
console.log(robot.weapon)

//method 1 - Using Arrow Function, can't use 'this' keyword

const obj= {
    prop: "hello world",
    myFunc: () => {
        console.log(`can I use this?... ${this.prop}`);
    }
}

// obj.myFunc();

//method 2 - Function keyword syntax, can use this keyword

const obj2 = {
    prop: "hello world",
    myFunc: function (str) {
      console.log(`can I use this?... ${this.prop} what about ${str}`);
    },
  };
  
  //obj2.myFunc("this");

  //method 3 - class syntax, can use this keyword, same as adding methods to classes later

const obj3 = {
    prop: "hello world",
    myFunc(str){
      console.log(`can I use this?... ${this.prop} what about ${str}`);
    },
  };
  
  //obj3.myFunc("this");