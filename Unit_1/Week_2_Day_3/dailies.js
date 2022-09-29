function createNumArray(num){
    let myArray = []
    for (let i = 0; i < (num+1); i++) {
        myArray.push(i);
    }
    return myArray;
}

console.log(createNumArray(5)) //[0,1,2,3,4,5]
console.log(createNumArray(3)) //[0,1,2,3]
