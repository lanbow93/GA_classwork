const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  minions.forEach(function(minion){
    console.log(`This is ${minion} checking in.`)
  })


let capitalizedMinions = minions.map((employee) => {
    if(employee !== "kevin") {
        let minionArray = employee.split("")
        minionArray[0] = minionArray[0].toUpperCase();
        return minionArray.join("");
    } else {
        return employee;
    }
})

// console.log(capitalizedMinions);

let actuallyCapitalizedMinions = capitalizedMinions.filter(minion => minion[0] === minion[0].toUpperCase());
console.log(actuallyCapitalizedMinions)

let captialVerification = actuallyCapitalizedMinions.every((minion, index) => minion[0] === minion[0].toUpperCase())
console.log(captialVerification)

function isCaptialized(oneMinion) {
    return oneMinion[0] === oneMinion[0].toUpperCase();
}

