const dogs = [
    {name: "Fido", age: 5, owner: "Sam", adopted: true},
    {name: "Stella", age: 2, owner: "", adopted: false},
    {name: "Spot", age: 6, owner: "Diane", adopted: true},
    {name: "Clifford", age: 1, owner: "", adopted: false},
    {name: "Bruiser", age: 8, owner: "Sam", adopted: true},
    {name: "Frodo", age: 3, owner: "", adopted: false},
  ]
  
const someAdopted = dogs.some((item, index) => {return item.adopted})
const everyAdopted = dogs.every((item, index) => {return item.adopted})

console.log("Some dogs adopted?:", someAdopted)
console.log("Every dog adopted?:", everyAdopted)

const value = dogs.find((item, index) => {return item.owner === "Diane"});
const index = dogs.findIndex((item, index) => {return item.owner === "Diane"});

console.log("Dog Diane Adopted:", value)
console.log("Index of the dog:", index)

dogs.sort((currentItem, nextItem) => {
    // translate adopted value into numbers
    const currentValue = currentItem.adopted ? 1 : 2
    const nextValue = nextItem.adopted ? 1 : 2
    // subtract values to determine if they are swapped
    return currentValue - nextValue
    })
  
  
  console.log(dogs)

const result = dogs.reduce((acc, item, index) => { return item.adopted ? acc : acc + item.age} , 0)
console.log(result)