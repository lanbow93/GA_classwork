class Computer {
    constructor(model, year, type, OS) {
        this.model = model;
        this.year = year;
        this.type = type;
        this.OS = OS;
        this.powerState = false;
    }

    togglePower() {
        if(this.powerState === false) {
            this.powerState = true;
            console.log("The computer is now booting on");
        } else {
            this.powerState = false;
            console.log("Powering down the system")
        }
    }

    systemInfo() {
        return `This is a ${this.model} made in the year ${this.year}. The current operating system loaded on your ${this.type} is ${this.OS}`;
    }
}

let myLaptop = new Computer("Lenovo",2011,"laptop","Windows 10");
myLaptop.togglePower();
myLaptop.togglePower();
console.log(myLaptop.systemInfo());